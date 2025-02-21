package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.backhandler.childBackHandler
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation.Event
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.update
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.retainedSimpleInstance
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
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.MapSerializer

internal class DefaultChildLazyItems<out Ctx : GenericComponentContext<Ctx>, C : Any, out T : Any>(
    private val componentContext: Ctx,
    private val key: String,
    private val source: NavigationSource<Event<C>>,
    private val initialList: () -> List<C>,
    serializer: KSerializer<C>?,
    private val childFactory: (C, Ctx) -> T,
) : ChildLazyItems<C, T>() {

    private val savedStateSerializer = serializer?.let { MapSerializer(it, SerializableContainer.serializer()) }
    override val state: MutableValue<LazyItems<C>> = MutableValue(LazyItems(items = initialList()))
    private val components = HashMap<C, ChildHolder<C, T>>()

    private val savedStates: MutableMap<C, SerializableContainer> =
        savedStateSerializer
            ?.let { componentContext.stateKeeper.consume(key = key, strategy = it) }
            ?.toMutableMap()
            ?: HashMap()

    // TODO: Change key?
    private val retainedKeepers = componentContext.retainedSimpleInstance(key = key) { HashMap<C, InstanceKeeperDispatcher>() }

    private val childBackHandler = componentContext.backHandler.child(priority = BackCallback.PRIORITY_DEFAULT + 1)

    init {
        source.subscribe { event ->
            state.update { event.transformer(it) }
        }

        state.subscribe { newState ->
            onStateChanged(newState.items.toSet())
        }

        if (savedStateSerializer != null) {
            // TODO: Change key?
            componentContext.stateKeeper.register(
                key = key,
                strategy = savedStateSerializer,
                supplier = { savedStates + components.mapValues { (_, holder) -> holder.stateKeeper.save() } },
            )
        }
    }

    // TODO: Use id
    private fun onStateChanged(items: Set<C>) {
        savedStates -= savedStates.filterKeys { it !in items }.keys

        components.filterKeys { it !in items }.values.forEach { holder ->
            holder.destroy(saveState = false)
        }
    }

    override fun get(configuration: C): Child.Created<C, T> =
        components[configuration]?.child
            ?: create(configuration).child

    override fun setActiveItems(items: Map<C, ChildNavState.Status>) {
        val map = LinkedHashMap<C, ChildStatus>()

        items.forEach { (cfg, status) ->
            when (status) {
                ChildNavState.Status.DESTROYED -> Unit // no-op
                ChildNavState.Status.CREATED -> map[cfg] = ChildStatus.CREATED
                ChildNavState.Status.STARTED -> map[cfg] = ChildStatus.STARTED
                ChildNavState.Status.RESUMED -> map[cfg] = ChildStatus.RESUMED
            }
        }

        setActiveComponents(map)
    }

    // TODO: Use relay
    private fun setActiveComponents(map: Map<C, ChildStatus>) {
        map.forEach { (cfg, status) ->
            val holder = components[cfg] ?: create(cfg)
            holder.lifecycle.setStatus(status)
        }

        components.filterKeys { it !in map }.values.forEach { holder ->
            holder.destroy(saveState = true)
        }

        map.keys.forEachIndexed { index, cfg ->
            components[cfg]?.backHandler?.priority = index
        }
    }

    private fun create(configuration: C): ChildHolder<C, T> {
        val lifecycle = LifecycleRegistry()
        val savedState = savedStates.remove(configuration)
        val stateKeeper = StateKeeperDispatcher(savedState = savedState)
        val instanceKeeper = retainedKeepers[configuration] ?: InstanceKeeperDispatcher()
        val backHandler = childBackHandler.childBackHandler()

        val ctx =
            componentContext.componentContextFactory(
                lifecycle = MergedLifecycle(componentContext.lifecycle, lifecycle),
                stateKeeper = stateKeeper,
                instanceKeeper = instanceKeeper,
                backHandler = backHandler,
            )

        val component = childFactory(configuration, ctx)
        val child = Child.Created(configuration, component)
        val holder = ChildHolder(child, lifecycle, stateKeeper, instanceKeeper, backHandler)
        components[configuration] = holder

        retainedKeepers[configuration] = instanceKeeper
        backHandler.start()
        lifecycle.create()

        return holder
    }

    private fun ChildHolder<C, T>.destroy(saveState: Boolean) {
        components -= child.configuration
        retainedKeepers -= child.configuration

        if (saveState) {
            savedStates[child.configuration] = stateKeeper.save()
        }

        backHandler.stop()
        lifecycle.destroy()
        instanceKeeper.destroy()
    }

    private fun LifecycleRegistry.setStatus(status: ChildStatus) {
        if (state == Lifecycle.State.DESTROYED) {
            return
        }

        when (status) {
            ChildStatus.CREATED ->
                if (state > Lifecycle.State.CREATED) {
                    stop()
                } else {
                    create()
                }

            ChildStatus.STARTED ->
                if (state > Lifecycle.State.STARTED) {
                    pause()
                } else {
                    start()
                }

            ChildStatus.RESUMED -> resume()
        }
    }

    private class ChildHolder<out C : Any, out T : Any>(
        val child: Child.Created<C, T>,
        val lifecycle: LifecycleRegistry,
        val stateKeeper: StateKeeperDispatcher,
        val instanceKeeper: InstanceKeeperDispatcher,
        val backHandler: ChildBackHandler,
    )

    private enum class ChildStatus {
        CREATED,
        STARTED,
        RESUMED,
    }
}
