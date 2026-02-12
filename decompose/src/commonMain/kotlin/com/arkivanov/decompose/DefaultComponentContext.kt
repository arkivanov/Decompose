package com.arkivanov.decompose

import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

/**
 * A default implementation of the [ComponentContext] interface.
 * Can be also used in tests.
 */
class DefaultComponentContext(
    override val lifecycle: Lifecycle,
    stateKeeper: StateKeeper? = null,
    instanceKeeper: InstanceKeeper? = null,
    navigationEventDispatcher: NavigationEventDispatcher? = null,
) : ComponentContext {

    override val stateKeeper: StateKeeper = stateKeeper ?: StateKeeperDispatcher()
    override val instanceKeeper: InstanceKeeper = instanceKeeper ?: InstanceKeeperDispatcher().attachTo(lifecycle)
    override val navigationEventDispatcher: NavigationEventDispatcher = navigationEventDispatcher ?: NavigationEventDispatcher()
    override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::DefaultComponentContext)

    constructor(lifecycle: Lifecycle) : this(
        lifecycle = lifecycle,
        stateKeeper = null,
        instanceKeeper = null,
        navigationEventDispatcher = null,
    )
}
