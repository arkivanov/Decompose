package com.arkivanov.decompose

import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry

internal inline fun Lifecycle.doOnDestroy(crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onDestroy(owner: LifecycleOwner) {
                block()
            }
        }
    )
}

internal fun LifecycleRegistry.create() {
    if (currentState == Lifecycle.State.INITIALIZED) {
        handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
    }
}

internal fun LifecycleRegistry.start() {
    create()

    if (currentState == Lifecycle.State.CREATED) {
        handleLifecycleEvent(Lifecycle.Event.ON_START)
    }
}

internal fun LifecycleRegistry.resume() {
    start()

    if (currentState == Lifecycle.State.STARTED) {
        handleLifecycleEvent(Lifecycle.Event.ON_RESUME)
    }
}

internal fun LifecycleRegistry.pause() {
    if (currentState == Lifecycle.State.RESUMED) {
        handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)
    }
}

internal fun LifecycleRegistry.stop() {
    pause()

    if (currentState == Lifecycle.State.STARTED) {
        handleLifecycleEvent(Lifecycle.Event.ON_STOP)
    }
}

internal fun LifecycleRegistry.destroy() {
    stop()

    if (currentState == Lifecycle.State.CREATED) {
        handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    }
}
