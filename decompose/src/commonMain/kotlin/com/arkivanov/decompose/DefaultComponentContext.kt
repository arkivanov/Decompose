package com.arkivanov.decompose

import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.backpressed.BackPressedHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

class DefaultComponentContext(
    override val lifecycle: Lifecycle,
    stateKeeper: StateKeeper? = null,
    instanceKeeper: InstanceKeeper? = null,
    backPressedHandler: BackPressedHandler? = null,
) : ComponentContext {

    override val stateKeeper: StateKeeper = stateKeeper ?: StateKeeperDispatcher()
    override val instanceKeeper: InstanceKeeper = instanceKeeper ?: InstanceKeeperDispatcher().attachTo(lifecycle)
    override val backPressedHandler: BackPressedHandler = backPressedHandler ?: BackPressedDispatcher()

    override val backPressedDispatcher: BackPressedDispatcher by lazy {
        BackPressedDispatcher().also { dispatcher ->
            this.backPressedHandler.register(dispatcher::onBackPressed)
        }
    }

    constructor(lifecycle: Lifecycle) : this(
        lifecycle = lifecycle,
        stateKeeper = null,
        instanceKeeper = null,
        backPressedHandler = null
    )
}
