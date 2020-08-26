package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryOwner

@Composable
fun RootComponent(
    savedStateRegistry: SavedStateRegistry,
    onBackPressedDispatcher: OnBackPressedDispatcher,
    factory: (ComponentContext) -> Component
) {
    val lifecycle = lifecycle()

    val component =
        remember {
            val savedStateKeeper = rootSavedStateKeeper(savedStateRegistry)
            val routerFactory = DefaultRouterFactory(lifecycle, savedStateKeeper, onBackPressedDispatcher)
            factory(ComponentContextImpl(lifecycle, savedStateKeeper, onBackPressedDispatcher, routerFactory))
        }

    component.content()
}

@Composable
fun <T> T.RootComponent(factory: (ComponentContext) -> Component) where T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner {
    RootComponent(savedStateRegistry, onBackPressedDispatcher, factory)
}

private fun rootSavedStateKeeper(registry: SavedStateRegistry): SavedStateKeeper =
    DefaultSavedStateKeeper(registry.consumeRestoredStateForKey(KEY_ROOT_SAVED_STATE_KEEPER_STATE)).also { keeper ->
        keeper.setCallbacks(
            onFirstSupplierAdded = { registry.registerSavedStateProvider(KEY_ROOT_SAVED_STATE_KEEPER_STATE, keeper::save) },
            onLastSupplierRemoved = { registry.unregisterSavedStateProvider(KEY_ROOT_SAVED_STATE_KEEPER_STATE) }
        )
    }

private const val KEY_ROOT_SAVED_STATE_KEEPER_STATE = "ROOT_SAVED_STATE_KEEPER_STATE"
