package com.arkivanov.decompose.extensions.compose.experimental

import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackHandler

internal class BroadcastBackHandler(
    private val delegate: BackHandler,
) : BackCallback(), BackHandler {
    private var callbacks = emptyList<BackCallback>()

    override fun onBackStarted(backEvent: BackEvent) {
        callbacks.forEach { it.onBackStarted(backEvent) }
    }

    override fun onBackProgressed(backEvent: BackEvent) {
        callbacks.forEach { it.onBackProgressed(backEvent) }
    }

    override fun onBackCancelled() {
        callbacks.forEach(BackCallback::onBackCancelled)
    }

    override fun onBack() {
        callbacks.forEach(BackCallback::onBack)
    }

    override fun isRegistered(callback: BackCallback): Boolean =
        callback in callbacks

    override fun register(callback: BackCallback) {
        check(callback !in callbacks)
        callbacks += callback
        callbacks = callbacks.sortedByDescending(BackCallback::priority)
        priority = callback.priority

        if (callbacks.size == 1) {
            delegate.register(this)
        }
    }

    override fun unregister(callback: BackCallback) {
        check(callback in callbacks)
        callbacks -= callback

        if (callbacks.isEmpty()) {
            delegate.unregister(this)
        }
    }
}
