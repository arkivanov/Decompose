package com.arkivanov.decompose

import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

class DefaultComponentContext(
    override val lifecycle: Lifecycle,
    stateKeeper: StateKeeper? = null,
    instanceKeeper: InstanceKeeper? = null,
    backHandler: BackHandler? = null,
) : ComponentContext {

    override val stateKeeper: StateKeeper = stateKeeper ?: StateKeeperDispatcher()
    override val instanceKeeper: InstanceKeeper = instanceKeeper ?: InstanceKeeperDispatcher().attachTo(lifecycle)
    override val backHandler: BackHandler = backHandler ?: BackDispatcher()

    constructor(lifecycle: Lifecycle) : this(
        lifecycle = lifecycle,
        stateKeeper = null,
        instanceKeeper = null,
        backHandler = null,
    )
}
