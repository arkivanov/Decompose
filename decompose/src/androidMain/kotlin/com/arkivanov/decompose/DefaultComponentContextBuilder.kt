package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.lifecycle.asDecomposeLifecycle
import com.arkivanov.decompose.statekeeper.StateKeeper
import androidx.lifecycle.Lifecycle as AndroidLifecycle

fun DefaultComponentContext(
    lifecycle: AndroidLifecycle,
    savedStateRegistry: SavedStateRegistry? = null,
    viewModelStore: ViewModelStore? = null,
    onBackPressedDispatcher: OnBackPressedDispatcher? = null
): DefaultComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle.asDecomposeLifecycle(),
        stateKeeper = savedStateRegistry?.let(::StateKeeper),
        instanceKeeper = viewModelStore?.let(::InstanceKeeper),
        backPressedDispatcher = onBackPressedDispatcher?.let(::BackPressedDispatcher)
    )

fun <T> T.defaultComponentContext(): DefaultComponentContext where
    T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    DefaultComponentContext(
        lifecycle = (this as LifecycleOwner).lifecycle,
        savedStateRegistry = savedStateRegistry,
        viewModelStore = viewModelStore,
        onBackPressedDispatcher = onBackPressedDispatcher
    )
