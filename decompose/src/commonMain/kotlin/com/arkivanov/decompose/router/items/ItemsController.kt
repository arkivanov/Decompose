package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.findFirstDuplicate
import com.arkivanov.decompose.router.children.ChildController
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.router.items.ItemsNavigation.Event
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.Serializable

internal class ItemsController<C : ChildConfiguration, out T : Any>(
    private val controller: ChildController<C, T, *>,
) : ItemsNavigator<C> {

    private val nav = Relay<NavEvent<C>>()
    private val navState = MutableValue(Items<C>())

    private val _state = MutableValue(ChildItems<C, T>())
    val state: Value<ChildItems<C, T>> = _state

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
        when (event) {
            is NavEvent.Init -> onInit(event)
            is NavEvent.Event -> onEvent(event.event)
        }
    }

    private fun onInit(event: NavEvent.Init<C>) {
        val initialNavState = event.initialState
        val savedChildState = event.savedChildState
        val activeItems = HashMap<C, Pair<T, ActiveLifecycleState>>()

        controller.init(dropState = savedChildState == null) {
            initialNavState.items.forEachIndexed { index, cfg ->
                val childSavedState = savedChildState?.get(index)
                val lifecycleState = initialNavState.activeItems[cfg]
                if (lifecycleState != null) {
                    val instance = activateChild(cfg, lifecycleState, childSavedState)
                    activeItems[cfg] = instance to lifecycleState
                } else {
                    controller.destroy(cfg, childSavedState)
                }
            }
        }

        setState(navState = initialNavState, activeItems = activeItems)
    }

    private fun setState(navState: Items<C>, activeItems: Map<C, Pair<T, ActiveLifecycleState>>) {
        this.navState.value = navState
        _state.value = ChildItems(items = navState.items, activeItems = activeItems)
    }

    private fun onEvent(event: Event<C>) {
        val oldNavState = navState.value
        var newNavState = event.transformer(oldNavState)

        val newConfigs = newNavState.items.takeUnless { it === oldNavState.items }?.toSet()

        if (newConfigs != null) {
            check(newConfigs.size == newNavState.items.size) {
                val diff = newNavState.items.findFirstDuplicate(newConfigs)
                "Configurations must be unique. " +
                    "First duplicate: ${diff?.second} at index ${diff?.first}. List size: ${newNavState.items.size}."
            }

            val extraActiveItems = newNavState.activeItems.keys.filterNotTo(HashSet()) { it in newConfigs }
            if (extraActiveItems.isNotEmpty()) {
                newNavState = newNavState.copy(activeItems = newNavState.activeItems - extraActiveItems)
            }
        }

        val newActiveItems =
            newNavState.activeItems.mapValues { (cfg, lifecycleState) ->
                val instance = activateChild(cfg, lifecycleState)
                instance to lifecycleState
            }

        val newActiveItemKeys = newNavState.activeItems.keys.map { it.childKey }.toSet()

        oldNavState.activeItems.forEach { (cfg) ->
            if (cfg.childKey !in newActiveItemKeys) {
//                val isExistingConfig = (newConfigs == null) || (cfg in newConfigs)
                if (isExistingConfig) {
                    controller.destroy(configuration = cfg)
                } else {
                    controller.remove(configuration = cfg)
                }
            }
        }

        setState(navState = newNavState, activeItems = newActiveItems)
        event.onComplete(newNavState, oldNavState)
    }

    private fun activateChild(configuration: C, lifecycleState: ActiveLifecycleState, savedState: SerializableContainer? = null): T =
        when (lifecycleState) {
            ActiveLifecycleState.CREATED -> controller.create(configuration = configuration, savedState = savedState)
            ActiveLifecycleState.STARTED -> controller.start(configuration = configuration, savedState = savedState)
            ActiveLifecycleState.RESUMED -> controller.resume(configuration = configuration, savedState = savedState)
        }

    @Serializable
    private class SavedState(
        val navState: SerializableContainer,
        val childState: Map<Int, SerializableContainer>,
    )

    private sealed interface NavEvent<C : ChildConfiguration> {
        class Init<C : ChildConfiguration>(
            val initialState: Items<C>,
            val savedChildState: Map<Int, SerializableContainer>?,
        ) : NavEvent<C>

        class Event<C : ChildConfiguration>(val event: ItemsNavigation.Event<C>) : NavEvent<C>
    }
}
