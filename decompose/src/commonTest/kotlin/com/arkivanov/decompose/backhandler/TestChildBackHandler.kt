package com.arkivanov.decompose.backhandler

import com.arkivanov.decompose.ensureNeverFrozen
import com.arkivanov.essenty.backhandler.BackCallback

class TestChildBackHandler(
    var isStarted: Boolean = false,
    override var isEnabled: Boolean = false,
) : ChildBackHandler {

    init {
        ensureNeverFrozen()
    }

    override fun start() {
        check(!isStarted)
        isStarted = true
    }

    override fun stop() {
        check(isStarted)
        isStarted = false
    }

    override fun register(callback: BackCallback) {
        TODO("Not yet implemented")
    }

    override fun unregister(callback: BackCallback) {
        TODO("Not yet implemented")
    }
}
