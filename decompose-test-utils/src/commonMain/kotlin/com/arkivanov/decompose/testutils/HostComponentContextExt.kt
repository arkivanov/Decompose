package com.arkivanov.decompose.testutils

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModelStore
import com.arkivanov.decompose.HostComponentContext
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed

fun HostComponentContext.recreate(isConfigurationChange: Boolean = false): HostComponentContext {
    val oldLifecycleState = lifecycle.currentState

    if (oldLifecycleState == Lifecycle.State.INITIALIZED) {
        lifecycle.moveToCreated()
    }

    val newStateKeeper = stateKeeper.recreate(isConfigurationChange = isConfigurationChange)

    if (!isConfigurationChange) {
        viewModelStore.clear()
    }

    val newViewModelStore = if (isConfigurationChange) viewModelStore else ViewModelStore()

    lifecycle.moveToDestroyed()

    return HostComponentContext(
        lifecycleState = oldLifecycleState,
        stateKeeper = newStateKeeper,
        viewModelStore = newViewModelStore,
    )
}
