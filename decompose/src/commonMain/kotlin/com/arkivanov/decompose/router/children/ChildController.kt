package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.decompose.backhandler.childBackHandler
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.router.children.ChildNavState.Status
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

internal class ChildController<C : Any, out T : Any, out Ctx : GenericComponentContext<Ctx>>(
    private val componentContext: Ctx,
    key: Any,
    private val childFactory: (C, Ctx) -> T,
) {

    private val retainedInstance: RetainedInstance<C> = componentContext.retainedInstance(key = key, factory = ::RetainedInstance)

    private val items = HashMap<C, Item<T>>()

    fun init(state: Map<C, Status>) {
        retainedInstance.onDestroy()

        state.forEach { (cfg, status) ->
            when (status) {
                Status.DESTROYED -> items[cfg] = Item.Destroyed()
                Status.CREATED -> activateNew(cfg, ActiveLifecycleState.CREATED)
                Status.STARTED -> activateNew(cfg, ActiveLifecycleState.STARTED)
                Status.RESUMED -> activateNew(cfg, ActiveLifecycleState.RESUMED)
            }
        }
    }

    fun restore(savedState: Map<C, Pair<Status, SerializableContainer?>>) {
        savedState.forEach { (cfg, childSavedState) ->
            when (childSavedState.first) {
                Status.DESTROYED -> items[cfg] = Item.Destroyed(childSavedState.second)
                Status.CREATED -> activateNew(cfg, ActiveLifecycleState.CREATED, childSavedState.second)
                Status.STARTED -> activateNew(cfg, ActiveLifecycleState.STARTED, childSavedState.second)
                Status.RESUMED -> activateNew(cfg, ActiveLifecycleState.RESUMED, childSavedState.second)
            }
        }

        val iter = retainedInstance.map.iterator()
        while (iter.hasNext()) {
            val (cfg, instanceKeeper) = iter.next()
            val childSavedState = savedState[cfg]

            if ((childSavedState == null) || (childSavedState.first == Status.DESTROYED)) {
                instanceKeeper.destroy()
                iter.remove()
            }
        }
    }

    fun saveState(configuration: C): SerializableContainer? =
        when (val item = items[configuration]) {
            is Item.Created -> item.stateKeeperDispatcher.save()
            is Item.Destroyed -> item.savedState
            null -> null
        }

    fun update(configuration: C, status: Status?) {
        when (status) {
            null -> remove(configuration)
            Status.DESTROYED -> destroy(configuration)
            Status.CREATED -> activate(configuration, ActiveLifecycleState.CREATED)
            Status.STARTED -> activate(configuration, ActiveLifecycleState.STARTED)
            Status.RESUMED -> activate(configuration, ActiveLifecycleState.RESUMED)
        }
    }

    operator fun get(configuration: C): T? =
        items[configuration]?.instance

    private fun remove(configuration: C) {
        val item = items.remove(configuration) as? Item.Created ?: return

        item.destroy()
        retainedInstance.map -= configuration
    }

    private fun destroy(configuration: C) {
        val item = items.remove(configuration) as? Item.Created ?: return

        val savedState = item.stateKeeperDispatcher.save()
        item.destroy()
        retainedInstance.map -= configuration

        items[configuration] = Item.Destroyed(savedState)
    }

    private fun activate(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
    ) {
        when (val oldItem = items[configuration]) {
            is Item.Created -> oldItem.setState(lifecycleState)
            is Item.Destroyed -> activateNew(configuration, lifecycleState, oldItem.savedState)
            null -> activateNew(configuration, lifecycleState)
        }
    }

    private fun activateNew(
        configuration: C,
        lifecycleState: ActiveLifecycleState,
        savedState: SerializableContainer? = null,
    ) {
        val item = item(configuration = configuration, savedState = savedState)
        item.setState(lifecycleState)
        retainedInstance.map[configuration] = item.instanceKeeperDispatcher
        items[configuration] = item
    }

    private fun Item.Created<*>.setState(lifecycleState: ActiveLifecycleState) {
        lifecycleRegistry.setState(lifecycleState)
        backHandler.setState(lifecycleState)
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

    private fun ChildBackHandler.setState(lifecycleState: ActiveLifecycleState) {
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
        val componentLifecycleRegistry = LifecycleRegistry()
        val mergedLifecycle = MergedLifecycle(componentContext.lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val instanceKeeperDispatcher = retainedInstance.map[configuration] ?: InstanceKeeperDispatcher()
        val backHandler = componentContext.backHandler.childBackHandler()

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
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperDispatcher,
            backHandler = backHandler,
        )
    }

    private fun Item.Created<*>.destroy() {
        lifecycleRegistry.destroy()
        instanceKeeperDispatcher.destroy() // TODO: Check order
        backHandler.stop()
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
            val lifecycleRegistry: LifecycleRegistry,
            val stateKeeperDispatcher: StateKeeperDispatcher,
            val instanceKeeperDispatcher: InstanceKeeperDispatcher,
            val backHandler: ChildBackHandler,
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
