package com.arkivanov.decompose.backpressed

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.asDecomposeLifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy

fun OnBackPressedDispatcher.toBackPressedDispatcher(): BackPressedDispatcher = DelegatedBackPressedDispatcher(this)

@Deprecated(message = "Use toBackPressedDispatcher()", replaceWith = ReplaceWith("toBackPressedDispatcher()"))
fun OnBackPressedDispatcher.toBackPressedDispatched(lifecycle: androidx.lifecycle.Lifecycle): BackPressedDispatcher =
    toBackPressedDispatched(lifecycle.asDecomposeLifecycle())

@Deprecated(message = "Use toBackPressedDispatcher()", replaceWith = ReplaceWith("toBackPressedDispatcher()"))
fun OnBackPressedDispatcher.toBackPressedDispatched(lifecycle: Lifecycle): BackPressedDispatcher {
    val decomposeBackPressedDispatcher = BackPressedDispatcher()
    setupBackPressedCallback(lifecycle, this, decomposeBackPressedDispatcher)

    return decomposeBackPressedDispatcher
}

private fun setupBackPressedCallback(
    lifecycle: Lifecycle,
    androidBackPressedDispatcher: OnBackPressedDispatcher,
    decomposeBackPressedDispatcher: BackPressedDispatcher
) {
    var isBackPressed = false

    val callback =
        object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                isBackPressed = true
                if (!decomposeBackPressedDispatcher.onBackPressed()) {
                    isEnabled = false
                    androidBackPressedDispatcher.onBackPressed()
                    isEnabled = true
                }
                isBackPressed = false
            }
        }

    decomposeBackPressedDispatcher.register {
        if (isBackPressed) {
            false
        } else {
            callback.isEnabled = false
            androidBackPressedDispatcher.onBackPressed()
            callback.isEnabled = true
            true
        }
    }

    androidBackPressedDispatcher.addCallback(callback)

    lifecycle.doOnDestroy(callback::remove)
}

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
                handlers.any { it() }
        }

    override fun register(handler: () -> Boolean) {
        val isFirstHandler = handlers.isEmpty()
        this.handlers += handler

        if (isFirstHandler) {
            delegate.addCallback(callback)
        }
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
