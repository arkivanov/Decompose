package com.arkivanov.decompose

import android.os.Looper

private val mainThreadId: Long? by lazy {
    try {
        Looper.getMainLooper().thread.id
    } catch (e: Exception) {
        null
    }
}

internal actual fun assertMainThread() {
    check((mainThreadId == null) || (Thread.currentThread().id == mainThreadId)) {
        "Expected to be called on the main thread, but was ${Thread.currentThread().name}"
    }
}
