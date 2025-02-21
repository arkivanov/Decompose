package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.router.children.ChildController
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleNavigation
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation.Event
import com.arkivanov.decompose.router.lazyitems.LazyItems.ActiveLifecycleState
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.Serializable

internal class DefaultChildLazyItems<C : Any, out T : Any>(
    private val controller: ChildController<C, T, *>,
) : ChildLazyItems<C, T>() {

    private val nav = ChildLazyItemsNavigation<C>()

    private val _state = MutableValue(LazyItems<C>())
    override val state: Value<LazyItems<C>> = _state
    private var isNavigating = false

    fun init(
        source: NavigationSource<Event<C>>,
        initialState: () -> LazyItems<C>,
        key: String,
        stateKeeper: StateKeeper,
        stateSaver: NavStateSaver<LazyItems<C>>?,
    ): Cancellation {
        val restoredState = stateKeeper.consume(key = key, strategy = SavedState.serializer())
        val restoredNavState = restoredState?.let { stateSaver?.restoreState(it.navState) }

        if (stateSaver != null) {
            stateKeeper.register(key = key, SavedState.serializer()) {
                stateSaver.saveState(state.value)?.let { navState ->
                    SavedState(navState = navState, childState = saveChildState())
                }
            }
        }

        val initNav = SimpleNavigation<NavEvent.Init<C>>()

        val cancellation =
            merge(source.map { NavEvent.Event(it) }, nav.map { NavEvent.Event(it) }, initNav)
                .subscribe(::onEvent)

        initNav.navigate(
            NavEvent.Init(
                initialState = restoredNavState ?: initialState(),
                savedChildState = restoredState?.childState?.takeUnless { restoredNavState == null },
            ),
        )

        return cancellation
    }

    private fun saveChildState(): Map<Int, SerializableContainer> {
        val childState = HashMap<Int, SerializableContainer>()

        state.value.items.forEachIndexed { index, cfg ->
            controller.saveState(cfg)?.also {
                childState[index] = it
            }
        }

        return childState
    }

    private fun onEvent(event: NavEvent<C>) {
        isNavigating = true
        try {
            when (event) {
                is NavEvent.Init -> onInit(event)
                is NavEvent.Event -> onEvent(event.event)
            }
        } finally {
            isNavigating = false
        }
    }

    private fun onInit(event: NavEvent.Init<C>) {
        val initialState = event.initialState
        val savedChildState = event.savedChildState
        _state.value = initialState

        controller.init(dropState = savedChildState == null) {
            initialState.items.forEachIndexed { index, cfg ->
                val childSavedState = savedChildState?.get(index)
                val lifecycleState = initialState.activeItems[cfg]
                if (lifecycleState != null) {
                    activateChild(cfg, lifecycleState, childSavedState)
                } else {
                    controller.destroy(cfg, childSavedState)
                }
            }
        }
    }

    private fun onEvent(event: Event<C>) {
        val oldState = _state.value
        var newState = event.transformer(oldState)

        val newConfigs = newState.items.takeUnless { it === oldState.items }?.toSet()

        if (newConfigs != null) {
            check(newConfigs.size == newState.items.size) { "Configurations must be unique" }

            val extraActiveItems = newState.activeItems.keys.filterNotTo(HashSet()) { it in newConfigs }
            if (extraActiveItems.isNotEmpty()) {
                newState = newState.copy(activeItems = newState.activeItems - extraActiveItems)
            }
        }

        activateChildren(newState.activeItems)

        oldState.activeItems.forEach { (cfg) ->
            if (cfg !in newState.activeItems) {
                val isExistingConfig = newConfigs?.contains(cfg) != false
                if (isExistingConfig) {
                    controller.destroy(configuration = cfg)
                } else {
                    controller.remove(configuration = cfg)
                }
            }
        }

        _state.value = newState
        event.onComplete(newState, oldState)
    }

    private fun activateChildren(activeItems: Map<C, ActiveLifecycleState>) {
        activeItems.forEach { (cfg, lifecycleState) ->
            activateChild(cfg, lifecycleState)
        }
    }

    private fun activateChild(configuration: C, lifecycleState: ActiveLifecycleState, savedState: SerializableContainer? = null) {
        when (lifecycleState) {
            ActiveLifecycleState.CREATED -> controller.create(configuration = configuration, savedState = savedState)
            ActiveLifecycleState.STARTED -> controller.start(configuration = configuration, savedState = savedState)
            ActiveLifecycleState.RESUMED -> controller.resume(configuration = configuration, savedState = savedState)
        }
    }

    override fun get(configuration: C): T {
        var child = controller[configuration]
        if (child == null) {
            check(!isNavigating) { "Instantiating a lazy child recursively is prohibited" }

            nav.navigate { it.copy(activeItems = it.activeItems + (configuration to ActiveLifecycleState.CREATED)) }
            child = requireNotNull(controller[configuration])
        }

        return child
    }

    override fun setActiveItems(items: Map<C, ActiveLifecycleState>) {
        nav.navigate { it.copy(activeItems = items) }
    }

    @Serializable
    private class SavedState(
        val navState: SerializableContainer,
        val childState: Map<Int, SerializableContainer>,
    )

    private sealed interface NavEvent<C : Any> {
        class Init<C : Any>(
            val initialState: LazyItems<C>,
            val savedChildState: Map<Int, SerializableContainer>?,
        ) : NavEvent<C>

        class Event<C : Any>(val event: ChildLazyItemsNavigation.Event<C>) : NavEvent<C>
    }
}
