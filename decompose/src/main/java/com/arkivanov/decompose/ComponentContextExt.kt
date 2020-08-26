package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle

fun ComponentContext.child(key: String, lifecycle: Lifecycle = this.lifecycle): ComponentContext {
    val childSavedStateKeeper = savedStateKeeper.child(key)

    return ComponentContextImpl(
        lifecycle,
        savedStateKeeper = childSavedStateKeeper,
        onBackPressedDispatcher = onBackPressedDispatcher,
        routerFactory = DefaultRouterFactory(lifecycle, childSavedStateKeeper, onBackPressedDispatcher)
    )
}
