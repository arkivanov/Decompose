package com.arkivanov.decompose

import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.statekeeper.StateKeeper
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher

class DefaultComponentContext private constructor(
    override val lifecycle: Lifecycle,
    override val stateKeeper: StateKeeper = StateKeeperDispatcher(),
    override val instanceKeeper: InstanceKeeper = InstanceKeeperDispatcher(),
    override val backPressedDispatcher: BackPressedDispatcher = BackPressedDispatcher(),
    routerFactory: RouterFactory
) : ComponentContext, RouterFactory by routerFactory {

    constructor(
        lifecycle: Lifecycle,
        stateKeeper: StateKeeper = StateKeeperDispatcher(),
        instanceKeeper: InstanceKeeper = InstanceKeeperDispatcher(),
        backPressedDispatcher: BackPressedDispatcher = BackPressedDispatcher(),
    ) : this(
        lifecycle,
        stateKeeper,
        instanceKeeper,
        backPressedDispatcher,
        DefaultRouterFactory(lifecycle, stateKeeper, instanceKeeper, backPressedDispatcher)
    )

    constructor(lifecycle: Lifecycle) : this(
        lifecycle,
        StateKeeperDispatcher(),
        InstanceKeeperDispatcher(),
        BackPressedDispatcher()
    )
}
