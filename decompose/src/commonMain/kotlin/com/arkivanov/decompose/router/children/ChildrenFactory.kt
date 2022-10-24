package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.consume

/**
 * Initialised and manages a generic list of components. This is an API for custom navigation models.
 * Please consider the existing navigation models first:
 * [childStack][com.arkivanov.decompose.router.stack.childStack],
 * [childOverlay][com.arkivanov.decompose.router.overlay.childOverlay].
 *
 * The API is based around [NavState] and [ChildNavState] interfaces that should be implemented by
 * clients. [NavState] represents a persistent state of the navigation. It also holds a navigation
 * state for each child - [ChildNavState]. Both [NavState] and [ChildNavState] must be immutable, and
 * correctly implement `equals` and `hashCode` methods (or just be data classes). There must be no
 * duplicated (be equality) [ChildNavState.configuration] within a [NavState].
 *
 * The navigation is performed by transforming the current [NavState] to a new one. The implementation
 * calculates diffs between the old and the new [NavState], and manipulates child components as needed.
 *
 * @param C a type of component configurations.
 * @param T a type of components.
 * @param E a type of navigation events.
 * @param N a type of navigation state, must implement [NavState] interface.
 * @param S a type of the resulting children state.
 * @param source a source of navigation events.
 * @param key a key of this `children` collection, must be unique if there are multiple
 * `children` used in the same component.
 * @param initialNavState an initial navigation state that should be used if there is no previously saved state.
 * @param saveNavState a function that saves the provided navigation state into [ParcelableContainer].
 * @param restoreNavState a function that restores the navigation state from the provided [ParcelableContainer].
 * The restored navigation state must have the same amount of child configurations and in the same order.
 * The restored child [Statuses][ChildNavState.Status] can be any, e.g. a previously active child may become
 * destroyed, etc.
 * @param navTransformer a function that transforms the current navigation state to a new one using the provided
 * navigation event.
 * @param onEventComplete called when a navigation event is processed and the navigation completed.
 * @param backTransformer a function that checks the provided navigation state, and either returns another function
 * transforming the navigation state to a new one, or `null` if back button handling should be disabled. Called
 * during the initialisation and after each navigation event.
 * @param stateMapper combines the provided navigation state and list of child components to a resulting state.
 * @param childFactory a factory function that creates new child component instances.
 * @return an observable [Value] of the resulting children state.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any, E : Any, N : NavState<C>, S : Any> ComponentContext.children(
    source: NavigationSource<E>,
    key: String,
    initialNavState: () -> N,
    saveNavState: (navState: N) -> ParcelableContainer,
    restoreNavState: (container: ParcelableContainer) -> N,
    navTransformer: (navState: N, event: E) -> N,
    onEventComplete: (event: E, newNavState: N, oldNavState: N) -> Unit,
    backTransformer: (navState: N) -> (() -> N)?,
    stateMapper: (navState: N, children: List<Child<C, T>>) -> S,
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): Value<S> {
    val mainBackHandler = backHandler.child()

    val savedState = stateKeeper.consume<SavedState>(key = key)

    val navigator =
        ChildrenNavigator(
            lifecycle = lifecycle,
            retainedInstanceSupplier = { factory -> instanceKeeper.getOrCreate(key = key, factory = factory) },
            childItemFactory = DefaultChildItemFactory(
                lifecycle = lifecycle,
                backHandler = backHandler.child(),
                childFactory = childFactory,
            ),
            navState = savedState?.navState?.let(restoreNavState) ?: initialNavState(),
            savedChildState = savedState?.childState,
        )

    stateKeeper.register(key = key) {
        SavedState(
            navState = saveNavState(navigator.navState),
            childState = navigator.saveChildState(),
        )
    }

    val state = MutableValue(stateMapper(navigator.navState, navigator.children))

    var bt: (() -> N)? = backTransformer(navigator.navState)

    lateinit var backCallback: BackCallback

    fun onAfterNavigate(navState: N) {
        bt = backTransformer(navState)
        backCallback.isEnabled = bt != null
        state.value = stateMapper(navState, navigator.children)
    }

    backCallback =
        BackCallback(isEnabled = bt != null) {
            bt?.invoke()?.also { navState ->
                navigator.navigate(navState = navState)
                onAfterNavigate(navState)
            }
        }

    mainBackHandler.register(backCallback)

    val eventObserver: (E) -> Unit =
        { event ->
            val oldNavState = navigator.navState
            navigator.navigate(navState = navTransformer(navigator.navState, event))
            val newNavState = navigator.navState
            onAfterNavigate(newNavState)
            onEventComplete(event, newNavState, oldNavState)
        }

    source.subscribe(eventObserver)

    lifecycle.doOnDestroy {
        source.unsubscribe(eventObserver)
        stateKeeper.unregister(key = key)
        mainBackHandler.unregister(backCallback)
    }

    return state
}

@Parcelize
private class SavedState(
    val navState: ParcelableContainer,
    val childState: List<ParcelableContainer?>,
) : Parcelable
