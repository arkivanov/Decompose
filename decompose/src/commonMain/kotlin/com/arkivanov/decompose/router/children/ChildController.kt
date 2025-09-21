package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.backhandler.childBackHandler
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.router.items.ChildConfiguration
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal class ChildController<C : ChildConfiguration, out T : Any, out Ctx : GenericComponentContext<Ctx>>(
    private val componentContext: Ctx,
    key: Any,
    private val childFactory: (C, Ctx) -> T,
) {

    private val retainedInstance =
        componentContext.retainedInstance<RetainedInstance>(key = key, factory = ::RetainedInstance)

    private val childBackHandler = componentContext.backHandler.child(priority = BackCallback.PRIORITY_DEFAULT + 1)

    private val items = HashMap<Any, Item<C, T>>()

    fun init(dropState: Boolean = false, block: () -> Unit = {}) {
        if (dropState) {
            retainedInstance.onDestroy()
        }

        block()

        val iter = retainedInstance.map.iterator()
        while (iter.hasNext()) {
            val (key, instanceKeeper) = iter.next()

            if (items[key]?.instance == null) {
                instanceKeeper.destroy()
                iter.remove()
            }
        }
    }

    fun saveState(configuration: C): SerializableContainer? =
        items[configuration.childKey]?.saveState()

    private fun Item<*, *>.saveState(): SerializableContainer? =
        when (this) {
            is Item.Created -> stateKeeperDispatcher.save()
            is Item.Destroyed -> savedState
        }

    operator fun get(configuration: C): T? =
        items[configuration.childKey]?.instance

    fun getLifecycleState(configuration: C): Lifecycle.State? =
        when (val item = items[configuration.childKey]) {
            is Item.Created -> item.lifecycleRegistry.state
            is Item.Destroyed -> Lifecycle.State.DESTROYED
            null -> null
        }

    fun remove(configuration: C) {
        val key = configuration.childKey
        val item = items.remove(key) as? Item.Created ?: return

        item.destroy()
        retainedInstance.map -= key
    }

    fun destroy(configuration: C, savedState: SerializableContainer? = null) {
        val key = configuration.childKey
        val item = items.remove(key) as? Item.Created

        if (item == null) {
            items[key] = Item.Destroyed(configuration = configuration, savedState = savedState)
            return
        }

        val childSavedState = savedState ?: item.stateKeeperDispatcher.save()
        item.destroy()
        retainedInstance.map -= key

        items[key] = Item.Destroyed(configuration = configuration, savedState = childSavedState)
    }

    fun create(configuration: C, savedState: SerializableContainer? = null): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.CREATED,
            savedState = savedState,
        )

    fun start(
        configuration: C,
        backHandlerPriority: Int = BackCallback.PRIORITY_DEFAULT,
        savedState: SerializableContainer? = null
    ): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.STARTED,
            backHandlerPriority = backHandlerPriority,
            savedState = savedState,
        )

    fun resume(
        configuration: C,
        backHandlerPriority: Int = BackCallback.PRIORITY_DEFAULT,
        savedState: SerializableContainer? = null
    ): T =
        activate(
            configuration = configuration,
            lifecycleState = ActiveLifecycleState.RESUMED,
            backHandlerPriority = backHandlerPriority,
            savedState = savedState,
        )

    private fun activate(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        backHandlerPriority: Int = BackCallback.PRIORITY_DEFAULT,
        savedState: SerializableContainer? = null
    ): T =
        when (val oldItem = items[configuration.childKey]) {
            is Item.Created -> {
                if (oldItem.configuration == configuration) {
                    oldItem.apply { setState(lifecycleState, backHandlerPriority) }.instance
                } else {
                    val savedState = oldItem.stateKeeperDispatcher.save()
                    oldItem.destroy()
                    activateNew(configuration, lifecycleState, backHandlerPriority, savedState)
                }
            }

            is Item.Destroyed -> activateNew(configuration, lifecycleState, backHandlerPriority, savedState ?: oldItem.savedState)
            null -> activateNew(configuration, lifecycleState, backHandlerPriority, savedState)
        }

    private fun activateNew(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        backHandlerPriority: Int = BackCallback.PRIORITY_DEFAULT,
        savedState: SerializableContainer? = null,
    ): T {
        val key = configuration.childKey
        val item = item(configuration = configuration, savedState = savedState)
        item.setState(lifecycleState = lifecycleState, backHandlerPriority = backHandlerPriority)
        retainedInstance.map[key] = item.instanceKeeperDispatcher
        items[configuration.childKey] = item

        return item.instance
    }

    private fun Item.Created<*, *>.setState(lifecycleState: ActiveLifecycleState, backHandlerPriority: Int) {
        lifecycleRegistry.setState(lifecycleState)
        backHandler.setState(lifecycleState = lifecycleState, priority = backHandlerPriority)
    }

    private fun LifecycleRegistry.setState(lifecycleState: ActiveLifecycleState) {
        when (lifecycleState) {
            ActiveLifecycleState.CREATED ->
                if (state < Lifecycle.State.CREATED) {
                    create()
                } else {
                    stop()
                }

            ActiveLifecycleState.STARTED ->
                if (state < Lifecycle.State.STARTED) {
                    start()
                } else {
                    pause()
                }

            ActiveLifecycleState.RESUMED -> resume()
        }
    }

    private fun ChildBackHandler.setState(
        lifecycleState: ActiveLifecycleState,
        priority: Int,
    ) {
        when (lifecycleState) {
            ActiveLifecycleState.CREATED -> stop()
            ActiveLifecycleState.STARTED,
            ActiveLifecycleState.RESUMED -> start()
        }

        this@setState.priority = priority
    }

    private fun item(
        configuration: C,
        savedState: SerializableContainer?,
    ): Item.Created<C, T> {
        val key = configuration.childKey
        val componentLifecycleRegistry = LifecycleRegistry()
        val mergedLifecycle = MergedLifecycle(componentContext.lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val instanceKeeperDispatcher = retainedInstance.map[key] ?: InstanceKeeperDispatcher()
        val backHandler = childBackHandler.childBackHandler()

        val component =
            childFactory(
                configuration,
                componentContext.componentContextFactory(
                    lifecycle = mergedLifecycle,
                    stateKeeper = stateKeeperDispatcher,
                    instanceKeeper = instanceKeeperDispatcher,
                    backHandler = backHandler,
                )
            )

        return Item.Created(
            configuration = configuration,
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperDispatcher,
            backHandler = backHandler,
        )
    }

    private fun Item.Created<*, *>.destroy() {
        backHandler.stop()
        lifecycleRegistry.destroy()
        instanceKeeperDispatcher.destroy()
    }

    private enum class ActiveLifecycleState {
        CREATED,
        STARTED,
        RESUMED,
    }

    private sealed interface Item<out C : Any, out T : Any> {
        val configuration: C
        val instance: T?

        class Destroyed<out C : Any>(
            override val configuration: C,
            val savedState: SerializableContainer? = null,
        ) : Item<C, Nothing> {
            override val instance: Nothing? = null
        }

        class Created<out C : Any, out T : Any>(
            override val configuration: C,
            override val instance: T,
            val lifecycleRegistry: LifecycleRegistry,
            val stateKeeperDispatcher: StateKeeperDispatcher,
            val instanceKeeperDispatcher: InstanceKeeperDispatcher,
            val backHandler: ChildBackHandler,
        ) : Item<C, T>
    }

    private class RetainedInstance : InstanceKeeper.Instance {
        val map: MutableMap<Any, InstanceKeeperDispatcher> = HashMap()

        override fun onDestroy() {
            map.values.forEach { it.destroy() }
            map.clear()
        }
    }
}
