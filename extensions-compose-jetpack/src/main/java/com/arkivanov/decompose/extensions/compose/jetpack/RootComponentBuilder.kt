package com.arkivanov.decompose.extensions.compose.jetpack

import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.backpressed.toBackPressedDispatcher
import com.arkivanov.decompose.extensions.compose.jetpack.lifecycle.lifecycle
import com.arkivanov.decompose.instancekeeper.toInstanceKeeper
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.lifecycle.asDecomposeLifecycle
import com.arkivanov.decompose.statekeeper.toStateKeeper
import androidx.lifecycle.Lifecycle as AndroidLifecycle

@Composable
fun <T> rootComponent(
    savedStateRegistry: SavedStateRegistry,
    viewModelStore: ViewModelStore,
    onBackPressedDispatcher: OnBackPressedDispatcher,
    lifecycle: AndroidLifecycle? = null,
    factory: (ComponentContext) -> T,
): T {
    val composableLifecycle = lifecycle()

    return remember {
        val componentContext =
            DefaultComponentContext(
                lifecycle?.asDecomposeLifecycle()?.let { MergedLifecycle(it, composableLifecycle) } ?: composableLifecycle,
                savedStateRegistry.toStateKeeper(),
                viewModelStore.toInstanceKeeper(),
                onBackPressedDispatcher.toBackPressedDispatcher()
            )

        factory(componentContext)
    }
}

@Composable
fun <T, C> T.rootComponent(
    factory: (ComponentContext) -> C
): C where T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    rootComponent(savedStateRegistry, viewModelStore, onBackPressedDispatcher, (this as LifecycleOwner).lifecycle, factory)
