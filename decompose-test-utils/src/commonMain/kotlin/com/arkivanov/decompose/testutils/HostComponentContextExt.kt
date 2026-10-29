package com.arkivanov.decompose.testutils

import com.arkivanov.decompose.HostComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy

fun HostComponentContext.recreate(isConfigurationChange: Boolean = false): HostComponentContext {
    val oldLifecycleState = lifecycle.state

    if (oldLifecycleState == Lifecycle.State.INITIALIZED) {
        lifecycle.create()
    }

    val newStateKeeper = stateKeeper.recreate(isConfigurationChange = isConfigurationChange)

    if (!isConfigurationChange) {
        instanceKeeper.destroy()
    }

    val newInstanceKeeper = if (isConfigurationChange) instanceKeeper else InstanceKeeperDispatcher()

    lifecycle.destroy()

    return HostComponentContext(
        lifecycleState = oldLifecycleState,
        stateKeeper = newStateKeeper,
        instanceKeeper = newInstanceKeeper,
    )
}
