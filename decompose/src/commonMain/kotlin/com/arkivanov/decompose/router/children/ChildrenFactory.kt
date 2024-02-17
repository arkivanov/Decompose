package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.consumeRequired
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable

/**
 * A convenience method for the main [children] method. Allows having `Serializable` navigation state [N],
 * so it's automatically saved and restored. This method can be used if the custom save/restore logic
 * is not required.
 */
fun <C : Any, T : Any, E : Any, N : NavState<C>, S : Any> ComponentContext.children(
    source: NavigationSource<E>,
    stateSerializer: KSerializer<N>?,
    initialState: () -> N,
    key: String,
    navTransformer: (state: N, event: E) -> N,
    stateMapper: (state: N, children: List<Child<C, T>>) -> S,
    onStateChanged: (newState: N, oldState: N?) -> Unit = { _, _ -> },
    onEventComplete: (event: E, newState: N, oldState: N) -> Unit = { _, _, _ -> },
    backTransformer: (state: N) -> (() -> N)? = { null },
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): Value<S> =
    children(
        source = source,
        saveState = { state ->
            if (stateSerializer != null) {
                SerializableContainer(value = state, strategy = stateSerializer)
            } else {
                null
            }
        },
        restoreState = { container ->
            if (stateSerializer != null) {
                container.consumeRequired(strategy = stateSerializer)
            } else {
                null
            }
        },
        initialState = initialState,
        key = key,
        navTransformer = navTransformer,
        stateMapper = stateMapper,
        onStateChanged = onStateChanged,
        onEventComplete = onEventComplete,
        backTransformer = backTransformer,
        childFactory = childFactory,
    )

/**
 * Initialised and manages a generic list of components. This is an API for custom navigation models.
 * Please consider the existing navigation models first:
 * [Child Stack][com.arkivanov.decompose.router.stack.childStack],
 * [Child Slot][com.arkivanov.decompose.router.slot.childSlot].
 *
 * The API is based around [NavState] and [ChildNavState] interfaces that should be implemented by
 * clients. [NavState] represents a persistent state of the navigation. It also holds a navigation
 * state for each child - [ChildNavState]. Both [NavState] and [ChildNavState] must be immutable, and
 * correctly implement `equals` and `hashCode` methods (or just be data classes). There must be no
 * duplicated (by equality) [ChildNavState.configuration] within a [NavState].
 *
 * The navigation is performed by transforming the current [NavState] to a new one. The implementation
 * calculates diffs between the old list of [ChildNavState] and the new one, and manipulates child
 * components as needed.
 *
 * @param C a type of component configurations.
 * @param T a type of components.
 * @param E a type of navigation events.
 * @param N a type of navigation state, must implement [NavState] interface.
 * @param S a type of the resulting children state.
 * @param source a source of navigation events.
 * @param key a key of this `children` collection, must be unique if there are multiple
 * `children` used in the same component.
 * @param initialState an initial navigation state that should be used if there is no previously saved state.
 * @param saveState a function that saves the provided navigation state into [SerializableContainer].
 * The navigation state is not saved if `null` is returned.
 * @param restoreState a function that restores the navigation state from the provided [SerializableContainer].
 * If `null` is returned then [initialState] is used instead.
 * The restored navigation state must have the same amount of child configurations and in the same order.
 * The restored child [Statuses][ChildNavState.Status] can be any, e.g. a previously active child may become
 * destroyed, etc.
 * @param navTransformer a function that transforms the current navigation state to a new one using the provided
 * navigation event.
 * @param stateMapper combines the provided navigation state and list of child components to a resulting state.
 * @param onStateChanged called every time the navigation state changes, `oldState` is `null` when
 * called first time during initialisation.
 * @param onEventComplete called when a navigation event is processed and the navigation completed.
 * @param backTransformer a function that checks the provided navigation state, and either returns another function
 * transforming the navigation state to a new one, or `null` if back button handling should be disabled. Called
 * during initialisation and after each navigation event.
 * @param childFactory a factory function that creates new child component instances.
 * @return an observable [Value] of the resulting children state.
 */
fun <C : Any, T : Any, E : Any, N : NavState<C>, S : Any> ComponentContext.children(
    source: NavigationSource<E>,
    key: String,
    initialState: () -> N,
    saveState: (state: N) -> SerializableContainer?,
    restoreState: (container: SerializableContainer) -> N?,
    navTransformer: (state: N, event: E) -> N,
    stateMapper: (state: N, children: List<Child<C, T>>) -> S,
    onStateChanged: (newState: N, oldState: N?) -> Unit = { _, _ -> },
    onEventComplete: (event: E, newState: N, oldState: N) -> Unit = { _, _, _ -> },
    backTransformer: (state: N) -> (() -> N)? = { null },
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): Value<S> {
    val mainBackHandler = backHandler.child()
    val relay = Relay<NavEvent<E>>()
    val cancellation = source.subscribe { relay.accept(NavEvent.Event(it)) }
    val backCallback = BackCallback { relay.accept(NavEvent.Back) }

    val eventProcessor = EventProcessor<E>()
    relay.subscribe(eventProcessor::process)

    val holder =
        Holder(
            navigator = childrenNavigator(
                key = key,
                initialState = initialState,
                saveState = saveState,
                restoreState = restoreState,
                childFactory = childFactory,
            ),
            stateMapper = stateMapper,
            navTransformer = navTransformer,
            onStateChanged = { newState, oldState, isBackEnabled ->
                backCallback.isEnabled = isBackEnabled
                onStateChanged(newState, oldState)
            },
            onEventComplete = onEventComplete,
            backTransformer = backTransformer,
        )

    relay.accept(NavEvent.Init(holder))
    mainBackHandler.register(backCallback)
    lifecycle.doOnDestroy(cancellation::cancel)

    return holder.state
}

private class EventProcessor<in E : Any> {
    private val pendingEvents = ArrayList<E>()
    private var holder: Holder<*, *, E, *, *>? = null

    fun process(event: NavEvent<E>) {
        when (event) {
            is NavEvent.Event -> {
                if (holder != null) {
                    holder?.navigate(event.event)
                } else {
                    pendingEvents += event.event
                }
            }

            is NavEvent.Back -> holder?.back()

            is NavEvent.Init -> {
                holder = event.holder
                pendingEvents.forEach(event.holder::navigate)
                pendingEvents.clear()
            }
        }
    }
}

private sealed interface NavEvent<out E : Any> {
    class Init<E : Any>(val holder: Holder<*, *, E, *, *>) : NavEvent<E>
    class Event<out E : Any>(val event: E) : NavEvent<E>
    data object Back : NavEvent<Nothing>
}

private class Holder<out C : Any, T : Any, in E : Any, N : NavState<C>, S : Any>(
    private val navigator: ChildrenNavigator<C, T, N>,
    private val stateMapper: (state: N, children: List<Child<C, T>>) -> S,
    private val navTransformer: (state: N, event: E) -> N,
    private val onStateChanged: (newState: N, oldState: N?, isBackEnabled: Boolean) -> Unit,
    private val onEventComplete: (event: E, newState: N, oldState: N) -> Unit,
    private val backTransformer: (state: N) -> (() -> N)?,
) {
    val state: MutableValue<S> = MutableValue(stateMapper(navigator.navState, navigator.children))
    private var bt: (() -> N)? = backTransformer(navigator.navState)

    init {
        onStateChanged(navigator.navState, null, bt != null)
    }

    fun navigate(event: E) {
        val oldState = navigator.navState
        navigator.navigate(navState = navTransformer(navigator.navState, event))
        val newState = navigator.navState
        onAfterNavigate(newState, oldState)
        onEventComplete(event, newState, oldState)
    }

    fun back() {
        val state = bt?.invoke() ?: return
        val oldState = navigator.navState
        navigator.navigate(navState = state)
        val newState = navigator.navState
        onAfterNavigate(newState, oldState)
    }

    private fun onAfterNavigate(newState: N, oldState: N) {
        bt = backTransformer(newState)
        state.value = stateMapper(newState, navigator.children)
        onStateChanged(newState, oldState, bt != null)
    }
}

private fun <C : Any, T : Any, N : NavState<C>> ComponentContext.childrenNavigator(
    key: String,
    initialState: () -> N,
    saveState: (state: N) -> SerializableContainer?,
    restoreState: (container: SerializableContainer) -> N?,
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): ChildrenNavigator<C, T, N> {
    val navigator =
        stateKeeper.consume(key = key, strategy = SavedState.serializer()).let { savedState ->
            val restoredNavState: N? = savedState?.navState?.let(restoreState)

            ChildrenNavigator(
                lifecycle = lifecycle,
                retainedInstanceSupplier = { factory -> instanceKeeper.getOrCreate(key = key, factory = factory) },
                childItemFactory = DefaultChildItemFactory(
                    lifecycle = lifecycle,
                    backHandler = backHandler.child(priority = BackCallback.PRIORITY_DEFAULT + 1),
                    childFactory = childFactory,
                ),
                navState = restoredNavState ?: initialState(),
                savedChildState = savedState?.childState?.takeUnless { restoredNavState == null },
            )
        }

    stateKeeper.register(key = key, strategy = SavedState.serializer()) {
        saveState(navigator.navState)?.let { savedState ->
            SavedState(
                navState = savedState,
                childState = navigator.saveChildState(),
            )
        }
    }

    return navigator
}

@Serializable
private class SavedState(
    val navState: SerializableContainer,
    val childState: List<SerializableContainer?>,
)
