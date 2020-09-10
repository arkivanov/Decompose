package com.arkivanov.decompose.lifecycle

fun LifecycleRegistry.create() {
    if (state == Lifecycle.State.INITIALIZED) {
        onCreate()
    }
}

fun LifecycleRegistry.start() {
    create()

    if (state == Lifecycle.State.CREATED) {
        onStart()
    }
}

fun LifecycleRegistry.resume() {
    start()

    if (state == Lifecycle.State.STARTED) {
        onResume()
    }
}

fun LifecycleRegistry.pause() {
    if (state == Lifecycle.State.RESUMED) {
        onPause()
    }
}

fun LifecycleRegistry.stop() {
    pause()

    if (state == Lifecycle.State.STARTED) {
        onStop()
    }
}

fun LifecycleRegistry.destroy() {
    stop()

    if (state == Lifecycle.State.CREATED) {
        onDestroy()
    }
}
