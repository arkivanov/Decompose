package com.arkivanov.decompose

import androidx.fragment.app.Fragment
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelProvider.AndroidViewModelFactory.Companion.APPLICATION_KEY
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.defaultViewModelCreationExtras
import androidx.lifecycle.defaultViewModelProviderFactory
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.plus
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.viewmodel.ViewModelStoreHost
import com.arkivanov.decompose.viewmodel.child
import com.arkivanov.essenty.statekeeper.stateKeeper
import kotlinx.serialization.builtins.serializer

/**
 * Creates a new instance of [ComponentContext] and attaches it to the
 * host [T] (e.g., an [Activity][android.app.Activity]).
 * The host [T] must implement the following AndroidX interfaces:
 * [SavedStateRegistryOwner], [NavigationEventDispatcherOwner], [ViewModelStoreOwner], [LifecycleOwner].
 *
 * There must be only one instance of [ComponentContext] per host [T].
 *
 * @param viewModelCreationExtras a provider of additional `ViewModel` [CreationExtras]. Default is [CreationExtras.Empty].
 * Pay attention not to leak any Activity-scoped objects.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 */
fun <T> T.componentContext(
    viewModelCreationExtras: () -> CreationExtras = { CreationExtras.Empty },
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
): ComponentContext
    where T : SavedStateRegistryOwner,
          T : NavigationEventDispatcherOwner,
          T : ViewModelStoreOwner,
          T : LifecycleOwner =
    componentContextInternal(
        viewModelCreationExtras = viewModelCreationExtras,
        navigationEventDispatcher = navigationEventDispatcher,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

/**
 * Creates a new instance of [ComponentContext] and attaches it to this [Fragment].
 *
 * There must be only one instance of [ComponentContext] per hosting [Fragment].
 *
 * @param viewModelCreationExtras a provider of additional `ViewModel` [CreationExtras]. Default is [CreationExtras.Empty].
 * Pay attention not to leak any Fragment-scoped objects.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not.
 * Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead. Default value is `false`.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 * @param navigationEventDispatcher an optional [NavigationEventDispatcher] for navigation event handling,
 * or `null` if navigation event handling is not required. For a [Fragment][androidx.fragment.app.Fragment],
 * can be obtained via `requireActivity().navigationEventDispatcher`.
 */
fun Fragment.componentContext(
    viewModelCreationExtras: () -> CreationExtras = { CreationExtras.Empty },
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
    navigationEventDispatcher: NavigationEventDispatcher? = requireActivity().navigationEventDispatcher,
): ComponentContext =
    componentContextInternal(
        viewModelCreationExtras = viewModelCreationExtras,
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
 * @param viewModelCreationExtras a provider of additional `ViewModel` [CreationExtras]. Default is [CreationExtras.Empty].
 * Pay attention not to leak any Activity or Fragment scoped objects.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not.
 * Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't.
 * @param navigationEventDispatcher an optional [NavigationEventDispatcher] for navigation event handling,
 * or `null` if navigation event handling is not required. For a [Fragment][androidx.fragment.app.Fragment],
 * can be obtained via `requireActivity().navigationEventDispatcher`.
 */
private fun <T> T.componentContextInternal(
    viewModelCreationExtras: () -> CreationExtras,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
    navigationEventDispatcher: NavigationEventDispatcher?,
): ComponentContext where T : SavedStateRegistryOwner, T : ViewModelStoreOwner, T : LifecycleOwner {
    val stateKeeper = stateKeeper(discardSavedState = discardSavedState, isSavingAllowed = isStateSavingAllowed)
    val marker = stateKeeper.consume(key = KEY_STATE_MARKER, strategy = String.serializer())
    stateKeeper.register(key = KEY_STATE_MARKER, strategy = String.serializer()) { "marker" }

    return ComponentContext(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper,
        viewModelStoreHost = ViewModelStoreHost(
            store = viewModelStore.child(key = "decompose.DefaultComponentContextViewModelStore", recreate = marker == null),
            factory = this::defaultViewModelProviderFactory,
            extras = { baseViewModelCreationExtras() + viewModelCreationExtras() },
        ),
        navigationEventDispatcher = navigationEventDispatcher ?: NavigationEventDispatcher(),
    )
}

internal fun ViewModelStoreOwner.baseViewModelCreationExtras(): CreationExtras =
    CreationExtras {
        defaultViewModelCreationExtras[APPLICATION_KEY]?.also { set(APPLICATION_KEY, it) }
    }

private const val KEY_STATE_MARKER = "DefaultComponentContext_state_marker"
