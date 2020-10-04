package com.arkivanov.decompose.backpressed

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.asDecomposeLifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy

fun OnBackPressedDispatcher.toBackPressedDispatched(lifecycle: androidx.lifecycle.Lifecycle): BackPressedDispatcher =
    toBackPressedDispatched(lifecycle.asDecomposeLifecycle())

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
