package com.arkivanov.decompose

import androidx.fragment.app.Fragment
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStoreOwner
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.savedstate.child
import com.arkivanov.decompose.savedstate.consume
import com.arkivanov.decompose.savedstate.register
import kotlinx.serialization.builtins.serializer

/**
 * Creates a new instance of [ComponentContext] and attaches it to the
 * host [T] (e.g., an [Activity][android.app.Activity]).
 * The host [T] must implement the following AndroidX interfaces:
 * [SavedStateRegistryOwner], [NavigationEventDispatcherOwner], [ViewModelStoreOwner], [LifecycleOwner].
 *
 * There must be only one instance of [ComponentContext] per host [T].
 *
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 */
fun <T> T.componentContext(
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
): ComponentContext
    where T : SavedStateRegistryOwner,
          T : NavigationEventDispatcherOwner,
          T : ViewModelStoreOwner,
          T : LifecycleOwner =
    componentContextInternal(
        navigationEventDispatcher = navigationEventDispatcher,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

/**
 * Creates a new instance of [ComponentContext] and attaches it to this [Fragment].
 *
 * There must be only one instance of [ComponentContext] per hosting [Fragment].
 *
 * @param navigationEventDispatcher an optional [NavigationEventDispatcher] for navigation event handling,
 * or `null` if navigation event handling is not required. For a [Fragment][androidx.fragment.app.Fragment],
 * can be obtained via `requireActivity().navigationEventDispatcher`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not.
 * Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead. Default value is `false`.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 */
fun Fragment.componentContext(
    navigationEventDispatcher: NavigationEventDispatcher?,
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
): ComponentContext =
    componentContextInternal(
        navigationEventDispatcher = navigationEventDispatcher?.child(lifecycle = lifecycle),
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

/**
 * Creates a new instance of [ComponentContext] from the AndroidX dependencies obtained from the host [T].
 * The host [T] must implement the following AndroidX interfaces:
 * [SavedStateRegistryOwner], [ViewModelStoreOwner], [LifecycleOwner].
 * Use this overload when the host does not implement [NavigationEventDispatcherOwner]
 * (for example, a [Fragment][androidx.fragment.app.Fragment]).
 *
 * There must be only one instance of [ComponentContext] per host [T].
 *
 * @param navigationEventDispatcher an optional [NavigationEventDispatcher] for navigation event handling,
 * or `null` if navigation event handling is not required. For a [Fragment][androidx.fragment.app.Fragment],
 * can be obtained via `requireActivity().navigationEventDispatcher`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not.
 * Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't.
 */
private fun <T> T.componentContextInternal(
    navigationEventDispatcher: NavigationEventDispatcher?,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
): ComponentContext where T : SavedStateRegistryOwner, T : ViewModelStoreOwner, T : LifecycleOwner {
    val childSavedStateRegistry =
        savedStateRegistry.child(
            key = "decompose.DefaultComponentContextSavedStateRegistry",
            lifecycle = lifecycle,
            recreate = discardSavedState,
            isSavingAllowed = isStateSavingAllowed,
        )

    val marker = childSavedStateRegistry.consume(key = KEY_STATE_MARKER, strategy = String.serializer())
    childSavedStateRegistry.register(key = KEY_STATE_MARKER, strategy = String.serializer()) { "marker" }

    return ComponentContext(
        lifecycle = lifecycle,
        savedStateRegistry = childSavedStateRegistry,
        viewModelStore = viewModelStore.child(key = "decompose.DefaultComponentContextViewModelStore", recreate = marker == null),
        navigationEventDispatcher = navigationEventDispatcher ?: NavigationEventDispatcher(),
    )
}

private const val KEY_STATE_MARKER = "DefaultComponentContext_state_marker"
