package com.arkivanov.decompose.router.children

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.lifecycle.DecomposeLifecycleRegistry
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.navigationevent.ChildNavigationEventDispatcher
import com.arkivanov.decompose.navigationevent.NavigationEventPriority
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.navigationevent.childNavigationEventDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal class ChildController<C : Any, out T : Any, out Ctx : GenericComponentContext<Ctx>>(
    private val componentContext: Ctx,
    key: Any,
    private val childFactory: (C, Ctx) -> T,
) {

    private val retainedInstance =
        componentContext.retainedInstance<RetainedInstance<C>>(key = key, factory = ::RetainedInstance)

    private val childNavigationEventDispatcher =
        componentContext.navigationEventDispatcher.child(priority = NavigationEventPriority.Overlay)

    private val items = HashMap<C, Item<T>>()

    fun init(dropState: Boolean = false, block: () -> Unit = {}) {
        if (dropState) {
            retainedInstance.onDestroy()
        }

        block()

        val iter = retainedInstance.map.iterator()
        while (iter.hasNext()) {
            val (cfg, instanceKeeper) = iter.next()

            if (items[cfg]?.instance == null) {
                instanceKeeper.destroy()
                iter.remove()
            }
        }
    }

    fun saveState(configuration: C): SerializableContainer? =
        items[configuration]?.saveState()

    private fun Item<*>.saveState(): SerializableContainer? =
        when (this) {
            is Item.Created -> stateKeeperDispatcher.save()
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

    fun destroy(configuration: C, savedState: SerializableContainer? = null) {
        val item = items.remove(configuration) as? Item.Created

        if (item == null) {
            items[configuration] = Item.Destroyed(savedState)
            return
        }

        val childSavedState = savedState ?: item.stateKeeperDispatcher.save()
        item.destroy()
        retainedInstance.map -= configuration

        items[configuration] = Item.Destroyed(childSavedState)
    }

    fun create(configuration: C, savedState: SerializableContainer? = null): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.CREATED,
            savedState = savedState,
        )

    fun start(
        configuration: C,
        savedState: SerializableContainer? = null
    ): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.STARTED,
            savedState = savedState,
        )

    fun resume(
        configuration: C,
        savedState: SerializableContainer? = null
    ): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.RESUMED,
            savedState = savedState,
        )

    private fun activate(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        savedState: SerializableContainer? = null
    ): T =
        when (val oldItem = items[configuration]) {
            is Item.Created -> oldItem.apply { setState(lifecycleState) }.instance
            is Item.Destroyed -> activateNew(configuration, lifecycleState, savedState ?: oldItem.savedState)
            null -> activateNew(configuration, lifecycleState, savedState)
        }

    private fun activateNew(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        savedState: SerializableContainer? = null,
    ): T {
        val item = item(configuration = configuration, savedState = savedState)
        item.setState(lifecycleState = lifecycleState)
        retainedInstance.map[configuration] = item.instanceKeeperDispatcher
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
        savedState: SerializableContainer?,
    ): Item.Created<T> {
        val componentLifecycleRegistry = DecomposeLifecycleRegistry()
        val mergedLifecycle = mergedLifecycle(componentContext.lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val instanceKeeperDispatcher = retainedInstance.map[configuration] ?: InstanceKeeperDispatcher()
        val navigationEventDispatcher = childNavigationEventDispatcher.childNavigationEventDispatcher()

        val component =
            childFactory(
                configuration,
                componentContext.componentContextFactory(
                    lifecycle = mergedLifecycle,
                    stateKeeper = stateKeeperDispatcher,
                    instanceKeeper = instanceKeeperDispatcher,
                    navigationEventDispatcher = navigationEventDispatcher.dispatcher,
                )
            )

        return Item.Created(
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperDispatcher,
            navigationEventDispatcher = navigationEventDispatcher,
        )
    }

    private fun Item.Created<*>.destroy() {
        navigationEventDispatcher.destroy()
        lifecycleRegistry.moveToDestroyed()
        instanceKeeperDispatcher.destroy()
    }

    private enum class ActiveLifecycleState {
        CREATED,
        STARTED,
        RESUMED,
    }

    private sealed interface Item<out T : Any> {
        val instance: T?

        class Destroyed(
            val savedState: SerializableContainer? = null,
        ) : Item<Nothing> {
            override val instance: Nothing? = null
        }

        class Created<out T : Any>(
            override val instance: T,
            val lifecycleRegistry: DecomposeLifecycleRegistry,
            val stateKeeperDispatcher: StateKeeperDispatcher,
            val instanceKeeperDispatcher: InstanceKeeperDispatcher,
            val navigationEventDispatcher: ChildNavigationEventDispatcher,
        ) : Item<T>
    }

    private class RetainedInstance<C : Any> : InstanceKeeper.Instance {
        val map: MutableMap<C, InstanceKeeperDispatcher> = HashMap()

        override fun onDestroy() {
            map.values.forEach { it.destroy() }
            map.clear()
        }
    }
}
