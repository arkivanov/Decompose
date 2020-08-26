package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.lifecycle.Lifecycle

internal class ComponentContextImpl(
    override val lifecycle: Lifecycle,
    override val savedStateKeeper: SavedStateKeeper,
    override val onBackPressedDispatcher: OnBackPressedDispatcher,
    routerFactory: RouterFactory
) : ComponentContext, RouterFactory by routerFactory
