package com.arkivanov.decompose.mainthread

import android.os.Looper
import com.arkivanov.decompose.errorhandler.onDecomposeError

private val mainThreadId: Long? by lazy {
    try {
        Looper.getMainLooper().thread.id
    } catch (e: Exception) {
        null
    }
}

internal actual fun checkMainThread() {
    if ((mainThreadId != null) && (Thread.currentThread().id != mainThreadId)) {
        onDecomposeError(NotOnMainThreadException(currentThreadName = Thread.currentThread().name))
    }
}
