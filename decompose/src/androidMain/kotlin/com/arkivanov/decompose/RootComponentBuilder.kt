package com.arkivanov.decompose

import android.os.Bundle
import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.lifecycle.asDecomposeLifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.lifecycle
import com.arkivanov.decompose.statekeeper.StateKeeper
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher
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
        val componentLifecycle = lifecycle?.asDecomposeLifecycle()?.let { MergedLifecycle(it, composableLifecycle) } ?: composableLifecycle
        val componentContext = rootComponentContext(savedStateRegistry, viewModelStore, onBackPressedDispatcher, componentLifecycle)
        factory(componentContext)
    }
}

@Composable
fun <T, C> T.rootComponent(
    factory: (ComponentContext) -> C
): C where T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    rootComponent(savedStateRegistry, viewModelStore, onBackPressedDispatcher, (this as LifecycleOwner).lifecycle, factory)

private fun rootComponentContext(
    savedStateRegistry: SavedStateRegistry,
    viewModelStore: ViewModelStore,
    onBackPressedDispatcher: OnBackPressedDispatcher,
    lifecycle: Lifecycle
): ComponentContext {
    val stateKeeper = rootStateKeeper(savedStateRegistry)
    val instanceKeeper = rootViewModel(viewModelStore).instanceKeeperDispatcher
    val backPressedDispatcher = BackPressedDispatcher()
    setupBackPressedCallback(lifecycle, onBackPressedDispatcher, backPressedDispatcher)

    return DefaultComponentContext(lifecycle, stateKeeper, instanceKeeper, backPressedDispatcher)
}

private fun rootStateKeeper(registry: SavedStateRegistry): StateKeeper =
    StateKeeperDispatcher(
        registry
            .consumeRestoredStateForKey(KEY_ROOT_SAVED_STATE_KEEPER_STATE)
            ?.getParcelable(KEY_ROOT_SAVED_STATE_KEEPER_STATE)
    ).also { dispatcher ->
        registry.registerSavedStateProvider(KEY_ROOT_SAVED_STATE_KEEPER_STATE) {
            Bundle().apply {
                putParcelable(KEY_ROOT_SAVED_STATE_KEEPER_STATE, dispatcher.save())
            }
        }
    }

private fun rootViewModel(viewModelStore: ViewModelStore): RootViewModel =
    ViewModelProvider(
        viewModelStore,
        object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel?> create(modelClass: Class<T>): T = RootViewModel() as T
        }
    ).get(KEY_ROOT_SAVED_STATE_KEEPER_STATE, RootViewModel::class.java)


internal class RootViewModel : ViewModel() {
    val instanceKeeperDispatcher = InstanceKeeperDispatcher()

    override fun onCleared() {
        instanceKeeperDispatcher.destroy()
    }
}

private fun setupBackPressedCallback(
    lifecycle: Lifecycle,
    androidBackPressedDispatcher: OnBackPressedDispatcher,
    decomposeBackPressedDispatcher: BackPressedDispatcher
) {
    var isBackPressed = false

    val callback =
        object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                isBackPressed = true
                if (!decomposeBackPressedDispatcher.onBackPressed()) {
                    isEnabled = false
                    androidBackPressedDispatcher.onBackPressed()
                    isEnabled = true
                }
                isBackPressed = false
            }
        }

    decomposeBackPressedDispatcher.register {
        if (isBackPressed) {
            false
        } else {
            callback.isEnabled = false
            androidBackPressedDispatcher.onBackPressed()
            callback.isEnabled = true
            true
        }
    }

    androidBackPressedDispatcher.addCallback(callback)

    lifecycle.doOnDestroy(callback::remove)
}

private const val KEY_ROOT_SAVED_STATE_KEEPER_STATE = "ROOT_SAVED_STATE_KEEPER_STATE"
