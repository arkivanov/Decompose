package com.arkivanov.decompose.backpressed

import com.arkivanov.decompose.ensureNeverFrozen

internal class BackPressedDispatcherImpl : BackPressedDispatcher {

    init {
        ensureNeverFrozen()
    }

    private var handlers = emptySet<() -> Boolean>()

    override fun register(handler: () -> Boolean) {
        this.handlers += handler
    }

    override fun unregister(handler: () -> Boolean) {
        this.handlers -= handler
    }

    override fun onBackPressed(): Boolean = handlers.reversed().any { it() }
}
