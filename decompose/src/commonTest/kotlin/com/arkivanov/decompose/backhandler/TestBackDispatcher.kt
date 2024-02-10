package com.arkivanov.decompose.backhandler

import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher

internal class TestBackDispatcher(
    private val delegate: BackDispatcher = BackDispatcher()
) : BackDispatcher by delegate {

    var size: Int = 0

    override fun register(callback: BackCallback) {
        delegate.register(callback)
        size++
    }

    override fun unregister(callback: BackCallback) {
        delegate.unregister(callback)
        size--
    }
}
