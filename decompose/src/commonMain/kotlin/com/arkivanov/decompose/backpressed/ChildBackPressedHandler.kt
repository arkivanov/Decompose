package com.arkivanov.decompose.backpressed

import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.backpressed.BackPressedHandler
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

internal fun BackPressedHandler.child(lifecycle: Lifecycle?): BackPressedHandler {
    val child = BackPressedDispatcher()
    val handler: () -> Boolean = child::onBackPressed
    register(handler)
    lifecycle?.doOnDestroy { unregister(handler) }

    return child
}
