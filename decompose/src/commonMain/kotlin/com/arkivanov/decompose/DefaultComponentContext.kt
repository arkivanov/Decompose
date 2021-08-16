package com.arkivanov.decompose

import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.backpressed.BackPressedHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

class DefaultComponentContext private constructor(
    override val lifecycle: Lifecycle,
    override val stateKeeper: StateKeeper,
    override val instanceKeeper: InstanceKeeper,
    override val backPressedHandler: BackPressedHandler,
    routerFactory: RouterFactory = DefaultRouterFactory(lifecycle, stateKeeper, instanceKeeper, backPressedHandler)
) : ComponentContext, RouterFactory by routerFactory {

    override val backPressedDispatcher: BackPressedDispatcher by lazy {
        BackPressedDispatcher().also { dispatcher ->
            backPressedHandler.register(dispatcher::onBackPressed)
        }
    }

    constructor(
        lifecycle: Lifecycle,
        stateKeeper: StateKeeper? = null,
        instanceKeeper: InstanceKeeper? = null,
        backPressedHandler: BackPressedHandler? = null
    ) : this(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper ?: StateKeeperDispatcher(),
        instanceKeeper = instanceKeeper ?: InstanceKeeperDispatcher().attachTo(lifecycle),
        backPressedHandler = backPressedHandler ?: BackPressedDispatcher()
    )

    constructor(lifecycle: Lifecycle) : this(
        lifecycle = lifecycle,
        stateKeeper = null,
        instanceKeeper = null,
        backPressedHandler = null
    )
}
