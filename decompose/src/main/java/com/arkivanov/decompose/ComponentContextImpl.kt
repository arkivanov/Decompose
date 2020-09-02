package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModelStore

internal class ComponentContextImpl(
    private val lifecycle: Lifecycle,
    override val savedStateKeeper: SavedStateKeeper,
    private val onBackPressedDispatcher: OnBackPressedDispatcher,
    private val viewModelStore: ViewModelStore,
    routerFactory: RouterFactory
) : ComponentContext, RouterFactory by routerFactory {

    override fun getLifecycle(): Lifecycle = lifecycle

    override fun getOnBackPressedDispatcher(): OnBackPressedDispatcher = onBackPressedDispatcher

    override fun getViewModelStore(): ViewModelStore = viewModelStore
}
