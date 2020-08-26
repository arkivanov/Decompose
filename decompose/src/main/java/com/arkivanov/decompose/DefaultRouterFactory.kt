package com.arkivanov.decompose

import android.os.Parcelable
import androidx.activity.OnBackPressedDispatcher
import androidx.lifecycle.Lifecycle

internal class DefaultRouterFactory(
    private val lifecycle: Lifecycle,
    private val savedStateKeeper: SavedStateKeeper,
    private val onBackPressedDispatcher: OnBackPressedDispatcher
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
            savedStateKey = key,
            onBackPressedDispatcher = onBackPressedDispatcher.takeIf { handleBackButton }
        ) { configuration, lifecycle, savedStateKeeper ->
            componentFactory(
                configuration,
                ComponentContextImpl(
                    lifecycle,
                    savedStateKeeper,
                    onBackPressedDispatcher,
                    DefaultRouterFactory(lifecycle, savedStateKeeper, onBackPressedDispatcher)
                )
            )
        }
}
