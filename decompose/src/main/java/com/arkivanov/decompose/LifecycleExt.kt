package com.arkivanov.decompose

import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner

internal inline fun Lifecycle.doOnDestroy(crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onDestroy(owner: LifecycleOwner) {
                block()
            }
        }
    )
}
