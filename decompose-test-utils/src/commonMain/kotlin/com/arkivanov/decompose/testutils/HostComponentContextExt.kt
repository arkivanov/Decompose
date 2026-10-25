package com.arkivanov.decompose.testutils

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.HostComponentContext
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher

fun HostComponentContext.recreate(isConfigurationChange: Boolean = false): HostComponentContext {
    val oldLifecycleState = lifecycle.currentState

    if (oldLifecycleState == Lifecycle.State.INITIALIZED) {
        lifecycle.moveToCreated()
    }

    val newStateKeeper = stateKeeper.recreate(isConfigurationChange = isConfigurationChange)

    if (!isConfigurationChange) {
        instanceKeeper.destroy()
    }

    val newInstanceKeeper = if (isConfigurationChange) instanceKeeper else InstanceKeeperDispatcher()

    lifecycle.moveToDestroyed()

    return HostComponentContext(
        lifecycleState = oldLifecycleState,
        stateKeeper = newStateKeeper,
        instanceKeeper = newInstanceKeeper,
    )
}
