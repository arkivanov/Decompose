package com.arkivanov.decompose.statekeeper

import kotlin.js.JsName

interface StateKeeperDispatcher : StateKeeper {

    fun save(): ParcelableContainer
}

@JsName("stateKeeperDispatcher")
@Suppress("FunctionName") // Factory function
fun StateKeeperDispatcher(savedState: ParcelableContainer? = null): StateKeeperDispatcher = StateKeeperDispatcherImpl(savedState)
