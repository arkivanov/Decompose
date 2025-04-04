package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.children.ChildController
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.router.items.ItemsNavigation.Event
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.Serializable

internal class ItemsController<C : Any, out T : Any>(
    private val controller: ChildController<C, T, *>,
) : ItemsNavigator<C> {

    private val nav = Relay<NavEvent<C>>()
    private val navState = MutableValue(Items<C>())
    private var isNavigating = false

    val state: Value<ChildItems<C, T>> =
        navState.map { (items, activeItems) ->
            ChildItems(
                items = items,
                activeItems = activeItems.mapValues { (cfg, activeLifecycleState) ->
                    val instance = requireNotNull(controller[cfg])
                    instance to activeLifecycleState
                },
            )
        }

    fun init(
        source: NavigationSource<Event<C>>,
        initialState: () -> Items<C>,
        key: String,
        stateKeeper: StateKeeper,
        stateSaver: NavStateSaver<Items<C>>?,
    ): Cancellation {
        val restoredState = stateKeeper.consume(key = key, strategy = SavedState.serializer())
        val restoredNavState = restoredState?.let { stateSaver?.restoreState(it.navState) }

        if (stateSaver != null) {
            stateKeeper.register(key = key, SavedState.serializer()) {
                stateSaver.saveState(navState.value)?.let { navState ->
                    SavedState(navState = navState, childState = saveChildState())
                }
            }
        }

        nav.subscribe(::onEvent)
        val cancellation = source.subscribe { nav.accept(NavEvent.Event(it)) }

        nav.accept(
            NavEvent.Init(
                initialState = restoredNavState ?: initialState(),
                savedChildState = restoredState?.childState?.takeUnless { restoredNavState == null },
            ),
        )

        return cancellation
    }

    override fun navigate(transformer: (Items<C>) -> Items<C>, onComplete: (Items<C>, Items<C>) -> Unit) {
        nav.accept(NavEvent.Event(Event(transformer, onComplete)))
    }

    private fun saveChildState(): Map<Int, SerializableContainer> {
        val childState = HashMap<Int, SerializableContainer>()

        navState.value.items.forEachIndexed { index, cfg ->
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

        navState.value = initialState
    }

    private fun onEvent(event: Event<C>) {
        val oldState = navState.value
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

        navState.value = newState
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

    @Serializable
    private class SavedState(
        val navState: SerializableContainer,
        val childState: Map<Int, SerializableContainer>,
    )

    private sealed interface NavEvent<C : Any> {
        class Init<C : Any>(
            val initialState: Items<C>,
            val savedChildState: Map<Int, SerializableContainer>?,
        ) : NavEvent<C>

        class Event<C : Any>(val event: ItemsNavigation.Event<C>) : NavEvent<C>
    }
}
