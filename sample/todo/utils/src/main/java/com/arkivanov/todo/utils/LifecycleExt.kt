package com.arkivanov.todo.utils

import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner

inline fun Lifecycle.doOnDestroy(crossinline onDestroy: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onDestroy(owner: LifecycleOwner) {
                onDestroy.invoke()
            }
        }
    )
}
