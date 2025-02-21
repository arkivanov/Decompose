package com.arkivanov.decompose

import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal class TestComponentContext(
    override val lifecycle: LifecycleRegistry = LifecycleRegistry(Lifecycle.State.RESUMED),
    override val stateKeeper: StateKeeperDispatcher = StateKeeperDispatcher(),
    override val instanceKeeper: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
    override val backHandler: BackDispatcher = BackDispatcher(),
) : ComponentContext {

    override val componentContextFactory: ComponentContextFactory<ComponentContext> =
        ComponentContextFactory(::DefaultComponentContext)
}

internal fun TestComponentContext.recreate(isConfigurationChange: Boolean = false): TestComponentContext {
    val oldLifecycleState = lifecycle.state

    if (oldLifecycleState == Lifecycle.State.INITIALIZED) {
        lifecycle.create()
    }

    val newStateKeeper = stateKeeper.recreate(isConfigurationChange = isConfigurationChange)
    val newInstanceKeeper = if (isConfigurationChange) instanceKeeper else InstanceKeeperDispatcher()

    lifecycle.destroy()

    return TestComponentContext(
        lifecycle = LifecycleRegistry(oldLifecycleState),
        stateKeeper = newStateKeeper,
        instanceKeeper = newInstanceKeeper,
    )
}
