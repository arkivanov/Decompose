package com.arkivanov.decompose

import android.os.Parcelable
import androidx.activity.OnBackPressedDispatcher
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModelStore

internal class DefaultRouterFactory(
    private val lifecycle: Lifecycle,
    private val savedStateKeeper: SavedStateKeeper,
    private val onBackPressedDispatcher: OnBackPressedDispatcher,
    private val viewModelStore: ViewModelStore
) : RouterFactory {

    override fun <C : Parcelable> router(
        initialConfiguration: C,
        configurationClassLoader: ClassLoader?,
        key: String,
        handleBackButton: Boolean,
        componentFactory: (configuration: C, ComponentContext) -> Component
    ): Router<C> =
        RouterImpl(
            initialConfiguration = initialConfiguration,
            configurationClassLoader = configurationClassLoader,
            lifecycle = lifecycle,
            savedStateKeeper = savedStateKeeper,
            key = key,
            onBackPressedDispatcher = onBackPressedDispatcher.takeIf { handleBackButton },
            viewModelStore = viewModelStore
        ) { configuration, lifecycle, savedStateKeeper, viewModelStore ->
            componentFactory(
                configuration,
                ComponentContextImpl(
                    lifecycle,
                    savedStateKeeper,
                    onBackPressedDispatcher,
                    viewModelStore,
                    DefaultRouterFactory(lifecycle, savedStateKeeper, onBackPressedDispatcher, viewModelStore)
                )
            )
        }
}
