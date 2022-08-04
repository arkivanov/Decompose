package com.arkivanov.decompose.backhandler

import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackHandler

internal class DefaultChildBackHandler(
    private val parent: BackHandler,
) : ChildBackHandler {

    private val parentCallback = BackCallback(isEnabled = false, onBack = ::onBack)
    private var set = emptySet<BackCallback>()
    private val enabledChangedListener: (Boolean) -> Unit = { onEnabledChanged() }

    override fun start() {
        parent.register(parentCallback)
    }

    override fun stop() {
        parent.unregister(parentCallback)
    }

    override fun register(callback: BackCallback) {
        check(callback !in set) { "Callback is already registered" }

        this.set += callback
        callback.addEnabledChangedListener(enabledChangedListener)
        onEnabledChanged()
    }

    override fun unregister(callback: BackCallback) {
        check(callback in set) { "Callback is not registered" }

        callback.removeEnabledChangedListener(enabledChangedListener)
        this.set -= callback
        onEnabledChanged()
    }

    private fun onEnabledChanged() {
        parentCallback.isEnabled = set.any(BackCallback::isEnabled)
    }

    private fun onBack() {
        set.lastOrNull(BackCallback::isEnabled)?.also {
            it.onBack()
        }
    }
}
