package com.arkivanov.decompose.backhandler

import com.arkivanov.decompose.ensureNeverFrozen
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher

internal class TestBackDispatcher : BackDispatcher {

    init {
        ensureNeverFrozen()
    }

    private var set = emptySet<BackCallback>()
    val size: Int get() = set.size

    override val isEnabled: Boolean get() = set.any(BackCallback::isEnabled)

    override fun register(callback: BackCallback) {
        check(callback !in set) { "Callback is already registered" }

        this.set += callback
    }

    override fun unregister(callback: BackCallback) {
        check(callback in set) { "Callback is not registered" }

        this.set -= callback
    }

    override fun back(): Boolean {
        set.lastOrNull(BackCallback::isEnabled)?.also {
            it.onBack()
            return true
        }

        return false
    }
}
