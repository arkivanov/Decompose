package com.arkivanov.decompose.backhandler

import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

internal interface ChildBackHandler : BackHandler {

    fun start()

    fun stop()
}

internal fun BackHandler.child(lifecycle: Lifecycle?): BackHandler {
    val handler = DefaultChildBackHandler(parent = this)

    if (lifecycle == null) {
        handler.start()
    } else if (lifecycle.state != Lifecycle.State.DESTROYED) {
        handler.start()
        lifecycle.doOnDestroy(handler::stop)
    }

    return handler
}

internal fun BackHandler.child(): ChildBackHandler = DefaultChildBackHandler(parent = this)
