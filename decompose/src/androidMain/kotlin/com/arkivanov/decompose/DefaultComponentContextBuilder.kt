package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.fragment.app.Fragment
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.instanceKeeper
import com.arkivanov.essenty.lifecycle.asEssentyLifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.stateKeeper
import kotlinx.serialization.builtins.serializer
import androidx.lifecycle.Lifecycle as AndroidLifecycle

fun DefaultComponentContext(
    lifecycle: AndroidLifecycle,
    savedStateRegistry: SavedStateRegistry? = null,
    viewModelStore: ViewModelStore? = null,
    onBackPressedDispatcher: OnBackPressedDispatcher? = null
): DefaultComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle.asEssentyLifecycle(),
        stateKeeper = savedStateRegistry?.let(::StateKeeper),
        instanceKeeper = viewModelStore?.let(::InstanceKeeper),
        backHandler = onBackPressedDispatcher?.let(::BackHandler),
    )

/**
 * Creates a default implementation of [ComponentContext] and attaches it
 * to the receiver (e.g. an [Activity][android.app.Activity]).
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
): DefaultComponentContext where
    T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    defaultComponentContext(
        backHandler = BackHandler(onBackPressedDispatcher),
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

/**
 * Creates a default implementation of [ComponentContext] and attaches it to the [Fragment].
 *
 * @param onBackPressedDispatcher an optional [OnBackPressedDispatcher] for back button handling,
 * or `null` if back button handling is not required. Can be obtained via `requireActivity().onBackPressedDispatcher`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 */
fun Fragment.defaultComponentContext(
    onBackPressedDispatcher: OnBackPressedDispatcher?,
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
): DefaultComponentContext =
    defaultComponentContext(
        backHandler = onBackPressedDispatcher?.let {
            BackHandler(
                onBackPressedDispatcher = it,
                lifecycleOwner = this,
            )
        },
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
    )

private fun <T> T.defaultComponentContext(
    backHandler: BackHandler?,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
): DefaultComponentContext where
    T : SavedStateRegistryOwner, T : ViewModelStoreOwner, T : LifecycleOwner {
    val stateKeeper = stateKeeper(discardSavedState = discardSavedState, isSavingAllowed = isStateSavingAllowed)
    val marker = stateKeeper.consume(key = KEY_STATE_MARKER, strategy = String.serializer())
    stateKeeper.register(key = KEY_STATE_MARKER, strategy = String.serializer()) { "marker" }

    return DefaultComponentContext(
        lifecycle = lifecycle.asEssentyLifecycle(),
        stateKeeper = stateKeeper,
        instanceKeeper = instanceKeeper(discardRetainedInstances = marker == null),
        backHandler = backHandler,
    )
}

private const val KEY_STATE_MARKER = "DefaultComponentContext_state_marker"
