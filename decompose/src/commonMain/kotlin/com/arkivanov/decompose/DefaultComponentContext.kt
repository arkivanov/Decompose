package com.arkivanov.decompose

import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.statekeeper.StateKeeper
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher

class DefaultComponentContext private constructor(
    override val lifecycle: Lifecycle,
    override val stateKeeper: StateKeeper,
    override val instanceKeeper: InstanceKeeper,
    override val backPressedDispatcher: BackPressedDispatcher,
    routerFactory: RouterFactory = DefaultRouterFactory(lifecycle, stateKeeper, instanceKeeper, backPressedDispatcher)
) : ComponentContext, RouterFactory by routerFactory {

    constructor(
        lifecycle: Lifecycle,
        stateKeeper: StateKeeper? = null,
        instanceKeeper: InstanceKeeper? = null,
        backPressedDispatcher: BackPressedDispatcher? = null,
    ) : this(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper ?: StateKeeperDispatcher(),
        instanceKeeper = instanceKeeper ?: InstanceKeeperDispatcher().attachTo(lifecycle),
        backPressedDispatcher = backPressedDispatcher ?: BackPressedDispatcher()
    )

    constructor(lifecycle: Lifecycle) : this(
        lifecycle = lifecycle,
        stateKeeper = null,
        instanceKeeper = null,
        backPressedDispatcher = null
    )
}
