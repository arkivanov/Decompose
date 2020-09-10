package com.arkivanov.decompose.backpressed

internal class BackPressedDispatcherImpl : BackPressedDispatcher {

    private var handlers = emptySet<() -> Boolean>()

    override fun register(handler: () -> Boolean) {
        this.handlers += handler
    }

    override fun unregister(handler: () -> Boolean) {
        this.handlers -= handler
    }

    override fun onBackPressed(): Boolean = handlers.reversed().any { it() }
}
