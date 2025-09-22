package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.children.ChildController
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.ItemsNavigation.Event
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.Serializable

internal class ItemsController<K : Any, C : Any, out T : Any>(
    private val controller: ChildController<C, T, *>,
    private val itemKey: (C) -> K,
) : ChildLazyItems<C, T>() {

    private val nav = Relay<NavEvent<C>>()
    private var activeKeys = emptySet<K>() // FIXME: retain
    private val state = MutableValue(State<K, C>(items = emptyList(), keyedItems = emptyMap()))
    private val items: Value<Items<C>> = state.map { Items(it.items) }
    override val value: Items<C> by items::value

    fun init(
        source: NavigationSource<Event<C>>,
        initialState: () -> List<C>,
        key: String,
        stateKeeper: StateKeeper,
        stateSaver: NavStateSaver<List<C>>?,
    ): Cancellation {
        val restoredState = stateKeeper.consume(key = key, strategy = SavedState.serializer())
        val restoredNavState = restoredState?.let { stateSaver?.restoreState(it.navState) }

        if (stateSaver != null) {
            stateKeeper.register(key = key, SavedState.serializer()) {
                stateSaver.saveState(state.value.items)?.let { navState ->
                    SavedState(navState = navState, childState = saveChildState())
                }
            }
        }

        nav.subscribe(::onEvent)
        val cancellation = source.subscribe { nav.accept(NavEvent.Event(it)) }

        nav.accept(
            NavEvent.Init(
                initialItems = restoredNavState ?: initialState(),
                savedChildState = restoredState?.childState?.takeUnless { restoredNavState == null },
            ),
        )

        return cancellation
    }

    override fun subscribe(observer: (Items<C>) -> Unit): Cancellation =
        items.subscribe(observer)

    // FIXME: optimize
    // FIXME: prevent recursive
    override fun get(configuration: C): T {
        val key = configuration.itemKey()
        val cfg = state.value.keyedItems[key] ?: error("Item with the provided key was not found: $key")
        return controller[cfg] ?: controller.resume(cfg)
    }

    // FIXME: prevent recursive
    override fun setActiveItems(configurations: Set<C>) {
        val keys = configurations.map { it.itemKey() }.toSet()
        val keyedItems = state.value.keyedItems

        activeKeys
            .filterNot { it in keys }
            .mapNotNull(keyedItems::get)
            .forEach(controller::destroy)

        activeKeys = keys
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
        when (event) {
            is NavEvent.Init -> onInit(event)
            is NavEvent.Event -> onEvent(event.event)
        }
    }

    private fun onInit(event: NavEvent.Init<C>) {
        val initialItems = event.initialItems
        val savedChildState = event.savedChildState

        controller.init(dropState = savedChildState == null) {
            initialItems.forEachIndexed { index, cfg ->
                val childSavedState = savedChildState?.get(index)
                if (cfg.itemKey() in activeKeys) {
                    activateChild(cfg, childSavedState)
                } else {
                    controller.destroy(cfg, childSavedState)
                }
            }
        }

        state.value = State(items = initialItems, keyedItems = initialItems.associateBy { it.itemKey() })
    }

    private fun onEvent(event: Event<C>) {
        val (oldItems, oldItemsKeyed) = state.value
        val newItems = event.transformer(oldItems)
        val newItemsKeyed = newItems.associateBy { it.itemKey() } // FIXME: reuse the old list if same

        check(newItems.size == newItemsKeyed.size) {
            "Child keys must be unique"
        }

        activeKeys.forEach { key ->
            val oldCfg = oldItemsKeyed[key]
            val newCfg = newItemsKeyed[key]

            if (oldCfg != null) {
                if (newCfg != null) {
                    if (newCfg != oldCfg) {
                        val savedState = controller.saveState(oldCfg)
                        controller.remove(oldCfg) // FIXME: recreate properly
                        activateChild(newCfg, savedState)
                    }
                } else {
                    controller.remove(oldCfg)
                }
            }
        }

        activeKeys = activeKeys.intersect(newItemsKeyed.keys)
        state.value = State(items = newItems, keyedItems = newItemsKeyed)
        event.onComplete(newItems, oldItems)
    }

    private fun activateChild(configuration: C, savedState: SerializableContainer? = null): T =
        controller.resume(configuration = configuration, savedState = savedState)

    private fun C.itemKey(): K =
        itemKey(this)

    private data class State<K : Any, C : Any>(
        val items: List<C>,
        val keyedItems: Map<K, C>,
    )

    @Serializable
    private class SavedState(
        val navState: SerializableContainer,
        val childState: Map<Int, SerializableContainer>,
    )

    private sealed interface NavEvent<out C : Any> {
        class Init<out C : Any>(
            val initialItems: List<C>,
            val savedChildState: Map<Int, SerializableContainer>?,
        ) : NavEvent<C>

        class Event<C : Any>(val event: ItemsNavigation.Event<C>) : NavEvent<C>
    }
}
