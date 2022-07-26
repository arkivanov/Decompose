package com.arkivanov.decompose.backhandler

import com.arkivanov.decompose.ensureNeverFrozen
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackHandler

internal class TestBackHandler : BackHandler {

    init {
        ensureNeverFrozen()
    }

    private var set = emptySet<BackCallback>()
    val size: Int get() = set.size
    val isEnabled: Boolean get() = set.any(BackCallback::isEnabled)

    override fun register(callback: BackCallback) {
        check(callback !in set) { "Callback is already registered" }

        this.set += callback
    }

    override fun unregister(callback: BackCallback) {
        check(callback in set) { "Callback is not registered" }

        this.set -= callback
    }
}
