package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.lifecycle.Lifecycle

interface ComponentContext : RouterFactory {

    val lifecycle: Lifecycle
    val savedStateKeeper: SavedStateKeeper
    val onBackPressedDispatcher: OnBackPressedDispatcher
}
