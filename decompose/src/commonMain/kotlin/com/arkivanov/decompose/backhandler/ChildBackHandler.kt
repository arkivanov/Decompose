package com.arkivanov.decompose.backhandler

import com.arkivanov.decompose.isDestroyed
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe

internal interface ChildBackHandler : BackHandler {

    var isEnabled: Boolean

    fun start()

    fun stop()
}

internal fun BackHandler.child(lifecycle: Lifecycle? = null): BackHandler {
    val handler = childBackHandler(isEnabled = false)

    if (lifecycle == null) {
        handler.isEnabled = true
        handler.start()
    } else if (!lifecycle.isDestroyed) {
        handler.isEnabled = lifecycle.state >= Lifecycle.State.STARTED
        handler.start()

        lifecycle.subscribe(
            onStart = { handler.isEnabled = true },
            onStop = { handler.isEnabled = false },
            onDestroy = handler::stop,
        )
    }

    return handler
}

internal fun BackHandler.childBackHandler(isEnabled: Boolean = true): ChildBackHandler =
    DefaultChildBackHandler(
        parent = this,
        isEnabled = isEnabled,
    )
