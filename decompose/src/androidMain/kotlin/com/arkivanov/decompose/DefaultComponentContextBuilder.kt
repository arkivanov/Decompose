package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
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

fun <T> T.defaultComponentContext(): DefaultComponentContext where
    T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    DefaultComponentContext(
        lifecycle = (this as LifecycleOwner).lifecycle,
        savedStateRegistry = savedStateRegistry,
        viewModelStore = viewModelStore,
        onBackPressedDispatcher = onBackPressedDispatcher
    )
