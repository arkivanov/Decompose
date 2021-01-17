package com.arkivanov.decompose.backpressed

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher

fun OnBackPressedDispatcher.toBackPressedDispatcher(): BackPressedDispatcher = DelegatedBackPressedDispatcher(this)

private class DelegatedBackPressedDispatcher(
    private val delegate: OnBackPressedDispatcher
) : BackPressedDispatcher {

    private var isProcessingDelegateBackPressed = false
    private var handlers = emptySet<() -> Boolean>()

    private val callback =
        object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                isProcessingDelegateBackPressed = true
                if (!handleBackPressed()) {
                    isEnabled = false
                    delegate.onBackPressed()
                    isEnabled = true
                }
                isProcessingDelegateBackPressed = false
            }

            private fun handleBackPressed(): Boolean =
                handlers.reversed().any { it() }
        }

    override fun register(handler: () -> Boolean) {
        if (handlers.isEmpty()) {
            delegate.addCallback(callback)
        }

        this.handlers += handler
    }

    override fun unregister(handler: () -> Boolean) {
        this.handlers -= handler

        if (handlers.isEmpty()) {
            callback.remove()
        }
    }

    override fun onBackPressed(): Boolean {
        if (!isProcessingDelegateBackPressed) {
            delegate.onBackPressed()
        }

        return true
    }
}
