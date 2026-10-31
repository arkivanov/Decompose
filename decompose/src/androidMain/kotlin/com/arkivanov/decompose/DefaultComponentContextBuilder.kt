package com.arkivanov.decompose

import androidx.fragment.app.Fragment
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStoreOwner
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.essenty.statekeeper.stateKeeper
import kotlinx.serialization.builtins.serializer

/**
 * Creates a [DefaultComponentContext] and attaches it to the receiver [T] (e.g., an [Activity][android.app.Activity]).
 * The receiver [T] must implement the following AndroidX interfaces:
 * [SavedStateRegistryOwner], [NavigationEventDispatcherOwner], [ViewModelStoreOwner], [LifecycleOwner].
 *
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 */
fun <T> T.defaultComponentContext(
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
): DefaultComponentContext
    where T : SavedStateRegistryOwner,
          T : NavigationEventDispatcherOwner,
          T : ViewModelStoreOwner,
          T : LifecycleOwner =
    defaultComponentContextInternal(
        navigationEventDispatcher = navigationEventDispatcher,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

/**
 * Creates a [DefaultComponentContext] and attaches it to this [Fragment].
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
fun Fragment.defaultComponentContext(
    navigationEventDispatcher: NavigationEventDispatcher?,
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
): DefaultComponentContext =
    defaultComponentContextInternal(
        navigationEventDispatcher = navigationEventDispatcher?.child(lifecycle = lifecycle),
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

/**
 * Creates a [DefaultComponentContext] from the AndroidX dependencies obtained from the receiver [T].
 * The receiver [T] must implement the following AndroidX interfaces:
 * [SavedStateRegistryOwner], [ViewModelStoreOwner], [LifecycleOwner].
 * Use this overload when the receiver does not implement [NavigationEventDispatcherOwner]
 * (for example, a [Fragment][androidx.fragment.app.Fragment]).
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
private fun <T> T.defaultComponentContextInternal(
    navigationEventDispatcher: NavigationEventDispatcher?,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
): DefaultComponentContext where T : SavedStateRegistryOwner, T : ViewModelStoreOwner, T : LifecycleOwner {
    val stateKeeper = stateKeeper(discardSavedState = discardSavedState, isSavingAllowed = isStateSavingAllowed)
    val marker = stateKeeper.consume(key = KEY_STATE_MARKER, strategy = String.serializer())
    stateKeeper.register(key = KEY_STATE_MARKER, strategy = String.serializer()) { "marker" }

    return DefaultComponentContext(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper,
        viewModelStore = viewModelStore.child(key = "decompose.DefaultComponentContextViewModelStore", recreate = marker == null),
        navigationEventDispatcher = navigationEventDispatcher,
    )
}

private const val KEY_STATE_MARKER = "DefaultComponentContext_state_marker"
