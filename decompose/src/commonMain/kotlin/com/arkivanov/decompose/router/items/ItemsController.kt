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
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.Serializable

internal class ItemsController<K : Any, C : ChildConfiguration<K>, out T : Any>(
    private val controller: ChildController<C, T, *>,
) : ItemsNavigator<K, C> {

    private val nav = Relay<NavEvent<K, C>>()
    private val navState = MutableValue(Items<K, C>())
    val state: Value<Items<K, C>> by ::navState
    private val _state = MutableValue(State<K, C, T>())

    fun init(
        source: NavigationSource<Event<K, C>>,
        initialState: () -> Items<K, C>,
        key: String,
        stateKeeper: StateKeeper,
        stateSaver: NavStateSaver<Items<K, C>>?,
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

    override fun navigate(transformer: (Items<K, C>) -> Items<K, C>, onComplete: (Items<K, C>, Items<K, C>) -> Unit) {
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

    private fun onEvent(event: NavEvent<K, C>) {
        when (event) {
            is NavEvent.Init -> onInit(event)
            is NavEvent.Event -> onEvent(event.event)
        }
    }

    private fun onInit(event: NavEvent.Init<K, C>) {
        val initialNavState = event.initialState
        val savedChildState = event.savedChildState
        val activeItems = HashMap<K, Triple<C, T, ActiveLifecycleState>>()

        controller.init(dropState = savedChildState == null) {
            initialNavState.items.forEachIndexed { index, cfg ->
                val childSavedState = savedChildState?.get(index)
                val lifecycleState = initialNavState.activeItems[cfg.childKey]
                if (lifecycleState != null) {
                    val instance = activateChild(cfg, lifecycleState, childSavedState)
                    activeItems[cfg.childKey] = Triple(cfg, instance, lifecycleState)
                } else {
                    controller.destroy(cfg, childSavedState)
                }
            }
        }

        setState(navState = initialNavState, activeItems = activeItems)
    }

    private fun setState(
        navState: Items<K, C>,
        activeItems: Map<K, Triple<C, T, ActiveLifecycleState>>,
        items: Map<K, C> = navState.items.associateBy { it.childKey },
    ) {
        this.navState.value = navState
        _state.value = State(items = items, activeItems = activeItems, originalItems = navState.items)
    }

    private fun onEvent(event: Event<K, C>) {
        val oldState = _state.value
        val oldNavState = navState.value
        var newNavState = event.transformer(oldNavState)

        val newItems = oldState.takeIf { it.originalItems == newNavState.items }?.items ?: newNavState.items.associateBy { it.childKey }

        check(newItems.size == newNavState.items.size) {
            "Child keys must be unique"
        }

        val extraActiveItemKeys = newNavState.activeItems.keys.filterNotTo(HashSet()) { it in newItems }
        if (extraActiveItemKeys.isNotEmpty()) {
            newNavState = newNavState.copy(activeItems = newNavState.activeItems - extraActiveItemKeys)
        }

        val newActiveItems = HashMap<K, Triple<C, T, ActiveLifecycleState>>()
        newNavState.activeItems.forEach { (key, activeLifecycleState) ->
            val newCfg = newItems[key]
            if (newCfg != null) {
                val oldCfg = oldState.items[key]

                val savedState =
                    if (oldCfg != null) {
                        val savedState = controller.saveState(oldCfg)
                        controller.remove(oldCfg)
                        savedState
                    } else {
                        null
                    }

                val instance = activateChild(newCfg, activeLifecycleState, savedState)
                newActiveItems[key] = Triple(newCfg, instance, activeLifecycleState)
            }
        }

        oldState.items.forEach { (key, cfg) ->
            if (key !in newActiveItems) {
                if (key in newItems) {
                    controller.destroy(configuration = cfg)
                } else {
                    controller.remove(configuration = cfg)
                }
            }
        }

        setState(navState = newNavState, activeItems = newActiveItems, items = newItems)
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

    private data class State<K : Any, out C : ChildConfiguration<K>, out T : Any>(
        val items: Map<K, C> = emptyMap(),
        val activeItems: Map<K, Triple<C, T, ActiveLifecycleState>> = emptyMap(),
        val originalItems: List<C> = emptyList(),
    )

//    private sealed interface Item<out K : Any, out C : ChildConfiguration<K>> {
//        val configuration: C
//
//        class Created<out K : Any, out C : ChildConfiguration<K>>(
//            override val configuration: C,
//
//        ) : Item<K, C>
//    }

    private sealed interface NavEvent<out K : Any, out C : ChildConfiguration<K>> {
        class Init<K : Any, out C : ChildConfiguration<K>>(
            val initialState: Items<K, C>,
            val savedChildState: Map<Int, SerializableContainer>?,
        ) : NavEvent<K, C>

        class Event<K : Any, C : ChildConfiguration<K>>(val event: ItemsNavigation.Event<K, C>) : NavEvent<K, C>
    }
}
