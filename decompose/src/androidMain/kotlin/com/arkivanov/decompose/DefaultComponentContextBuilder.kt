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
import com.arkivanov.essenty.lifecycle.asEssentyLifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
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
 */
fun <T> T.defaultComponentContext(): DefaultComponentContext where
    T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    DefaultComponentContext(
        lifecycle = (this as LifecycleOwner).lifecycle,
        savedStateRegistry = savedStateRegistry,
        viewModelStore = viewModelStore,
        onBackPressedDispatcher = onBackPressedDispatcher,
    )

/**
 * Creates a default implementation of [ComponentContext] and attaches it to the [Fragment].
 *
 * @param onBackPressedDispatcher an optional [OnBackPressedDispatcher] for back button handling,
 * or `null` if back button handling is not required. Can be obtained via `requireActivity().onBackPressedDispatcher`.
 */
fun Fragment.defaultComponentContext(
    onBackPressedDispatcher: OnBackPressedDispatcher?,
): DefaultComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle.asEssentyLifecycle(),
        stateKeeper = StateKeeper(savedStateRegistry),
        instanceKeeper = InstanceKeeper(viewModelStore),
        backHandler = onBackPressedDispatcher?.let {
            BackHandler(
                onBackPressedDispatcher = it,
                lifecycleOwner = this,
            )
        },
    )
