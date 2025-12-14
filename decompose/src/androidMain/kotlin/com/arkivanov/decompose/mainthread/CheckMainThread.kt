package com.arkivanov.decompose.mainthread

import android.os.Looper
import com.arkivanov.decompose.DecomposeSettings
import com.arkivanov.decompose.errorhandler.onDecomposeError

private val mainThreadId: Long? by lazy {
    try {
        Looper.getMainLooper().thread.id
    } catch (_: Exception) {
        null
    }
}

internal actual fun checkMainThread() {
    if (DecomposeSettings.settings.mainThreadCheckEnabled && (mainThreadId != null) && (Thread.currentThread().id != mainThreadId)) {
        onDecomposeError(NotOnMainThreadException(currentThreadName = Thread.currentThread().name))
    }
}
