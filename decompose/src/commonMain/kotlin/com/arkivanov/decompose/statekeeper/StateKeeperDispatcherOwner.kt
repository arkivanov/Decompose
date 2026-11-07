package com.arkivanov.decompose.statekeeper

import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

/**
 * Represents a holder of [StateKeeperDispatcher].
 */
interface StateKeeperDispatcherOwner : StateKeeperOwner {

    override val stateKeeper: StateKeeperDispatcher
}
