package com.arkivanov.decompose.testutils

import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ComponentContextFactory
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy

class TestComponentContext(
    override val lifecycle: LifecycleRegistry = LifecycleRegistry(Lifecycle.State.RESUMED),
    override val stateKeeper: TestStateKeeperDispatcher = TestStateKeeperDispatcher(),
    override val instanceKeeper: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
    override val navigationEventDispatcher: NavigationEventDispatcher = NavigationEventDispatcher(),
) : ComponentContext {

    override val componentContextFactory: ComponentContextFactory<ComponentContext> =
        ComponentContextFactory(::DefaultComponentContext)

    val navigationEventInput: TestNavigationEventInput = navigationEventDispatcher.addTestInput()
    val hasEnabledHandlers: Boolean get() = navigationEventInput.hasEnabledHandlers // STOPSHIP: remove
}

fun TestComponentContext.recreate(isConfigurationChange: Boolean = false): TestComponentContext {
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

    return TestComponentContext(
        lifecycle = LifecycleRegistry(oldLifecycleState),
        stateKeeper = newStateKeeper,
        instanceKeeper = newInstanceKeeper,
    )
}
