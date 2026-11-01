package com.arkivanov.decompose.router.children

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStore
import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.instancekeeper.retainedCloseable
import com.arkivanov.decompose.lifecycle.DecomposeLifecycleRegistry
import com.arkivanov.decompose.lifecycle.DecomposeLifecycleRegistryOwner
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.navigationevent.ChildNavigationEventDispatcher
import com.arkivanov.decompose.navigationevent.NavigationEventPriority
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.navigationevent.childNavigationEventDispatcher
import com.arkivanov.decompose.savedstate.save

internal class ChildController<C : Any, out T : Any, out Ctx : GenericComponentContext<Ctx>>(
    private val componentContext: Ctx,
    key: String,
    private val childFactory: (C, Ctx) -> T,
) {

    private val retainedInstance =
        componentContext.retainedCloseable<RetainedInstance<C>>(key = key, factory = ::RetainedInstance)

    private val childNavigationEventDispatcher =
        componentContext.navigationEventDispatcher.child(priority = NavigationEventPriority.Overlay)

    private val items = HashMap<C, Item<T>>()

    fun init(dropState: Boolean = false, block: () -> Unit = {}) {
        if (dropState) {
            retainedInstance.close()
        }

        block()

        val iter = retainedInstance.map.iterator()
        while (iter.hasNext()) {
            val (cfg, viewModelStore) = iter.next()

            if (items[cfg]?.instance == null) {
                viewModelStore.clear()
                iter.remove()
            }
        }
    }

    fun saveState(configuration: C): SavedState? =
        items[configuration]?.saveState()

    private fun Item<*>.saveState(): SavedState? =
        when (this) {
            is Item.Created -> savedStateRegistryController.save()
            is Item.Destroyed -> savedState
        }

    operator fun get(configuration: C): T? =
        items[configuration]?.instance

    fun getLifecycleState(configuration: C): Lifecycle.State? =
        when (val item = items[configuration]) {
            is Item.Created -> item.lifecycleRegistry.currentState
            is Item.Destroyed -> Lifecycle.State.DESTROYED
            null -> null
        }

    fun remove(configuration: C) {
        val item = items.remove(configuration) as? Item.Created ?: return

        item.destroy()
        retainedInstance.map -= configuration
    }

    fun destroy(configuration: C, savedState: SavedState? = null) {
        val item = items.remove(configuration) as? Item.Created

        if (item == null) {
            items[configuration] = Item.Destroyed(savedState)
            return
        }

        val childSavedState = savedState ?: item.savedStateRegistryController.save()
        item.destroy()
        retainedInstance.map -= configuration

        items[configuration] = Item.Destroyed(childSavedState)
    }

    fun create(configuration: C, savedState: SavedState? = null): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.CREATED,
            savedState = savedState,
        )

    fun start(
        configuration: C,
        savedState: SavedState? = null
    ): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.STARTED,
            savedState = savedState,
        )

    fun resume(
        configuration: C,
        savedState: SavedState? = null
    ): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.RESUMED,
            savedState = savedState,
        )

    private fun activate(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        savedState: SavedState? = null
    ): T =
        when (val oldItem = items[configuration]) {
            is Item.Created -> oldItem.apply { setState(lifecycleState) }.instance
            is Item.Destroyed -> activateNew(configuration, lifecycleState, savedState ?: oldItem.savedState)
            null -> activateNew(configuration, lifecycleState, savedState)
        }

    private fun activateNew(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        savedState: SavedState? = null,
    ): T {
        val item = item(configuration = configuration, savedState = savedState)
        item.setState(lifecycleState = lifecycleState)
        retainedInstance.map[configuration] = item.viewModelStore
        items[configuration] = item

        return item.instance
    }

    private fun Item.Created<*>.setState(lifecycleState: ActiveLifecycleState) {
        lifecycleRegistry.setState(lifecycleState)
        navigationEventDispatcher.setState(lifecycleState = lifecycleState)
    }

    private fun DecomposeLifecycleRegistry.setState(lifecycleState: ActiveLifecycleState) {
        when (lifecycleState) {
            ActiveLifecycleState.CREATED -> moveToCreated()
            ActiveLifecycleState.STARTED -> moveToStarted()
            ActiveLifecycleState.RESUMED -> moveToResumed()
        }
    }

    private fun ChildNavigationEventDispatcher.setState(lifecycleState: ActiveLifecycleState) {
        when (lifecycleState) {
            ActiveLifecycleState.CREATED -> stop()
            ActiveLifecycleState.STARTED,
            ActiveLifecycleState.RESUMED -> start()
        }
    }

    private fun item(
        configuration: C,
        savedState: SavedState?,
    ): Item.Created<T> {
        val viewModelStore = retainedInstance.map[configuration] ?: ViewModelStore()
        val navigationEventDispatcher = childNavigationEventDispatcher.childNavigationEventDispatcher()

        return Item.Created(
            parentLifecycle = componentContext.lifecycle,
            savedState = savedState,
            viewModelStore = viewModelStore,
            navigationEventDispatcher = navigationEventDispatcher,
        ) { lifecycle, savedStateRegistry ->
            childFactory(
                configuration,
                componentContext.componentContextFactory(
                    lifecycle = lifecycle,
                    savedStateRegistry = savedStateRegistry,
                    viewModelStore = viewModelStore,
                    navigationEventDispatcher = navigationEventDispatcher.dispatcher,
                )
            )
        }
    }

    private fun Item.Created<*>.destroy() {
        navigationEventDispatcher.destroy()
        lifecycleRegistry.moveToDestroyed()
        viewModelStore.clear()
    }

    private enum class ActiveLifecycleState {
        CREATED,
        STARTED,
        RESUMED,
    }

    private sealed interface Item<out T : Any> {
        val instance: T?

        class Destroyed(
            val savedState: SavedState? = null,
        ) : Item<Nothing> {
            override val instance: Nothing? = null
        }

        class Created<out T : Any>(
            parentLifecycle: Lifecycle,
            savedState: SavedState?,
            val viewModelStore: ViewModelStore,
            val navigationEventDispatcher: ChildNavigationEventDispatcher,
            instanceFactory: (Lifecycle, SavedStateRegistry) -> T,
        ) : Item<T>, LifecycleOwner, SavedStateRegistryOwner {
            private val lifecycleRegistryOwner = DecomposeLifecycleRegistryOwner()
            val lifecycleRegistry: DecomposeLifecycleRegistry by lifecycleRegistryOwner::lifecycle

            override val lifecycle: Lifecycle = mergedLifecycle(parentLifecycle, lifecycleRegistry)
            val savedStateRegistryController = SavedStateRegistryController.create(this)
            override val savedStateRegistry: SavedStateRegistry by savedStateRegistryController::savedStateRegistry

            init {
                savedStateRegistryController.performAttach()
                savedStateRegistryController.performRestore(savedState)
            }

            override val instance: T = instanceFactory(lifecycle, savedStateRegistry)
        }
    }

    private class RetainedInstance<C : Any> : AutoCloseable {
        val map: MutableMap<C, ViewModelStore> = HashMap()

        override fun close() {
            map.values.forEach { it.clear() }
            map.clear()
        }
    }
}
