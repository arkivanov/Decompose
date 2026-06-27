package com.arkivanov.decompose.mainthread

import android.os.Looper
import com.arkivanov.decompose.DecomposeSettings

private val mainThreadId: Long? by lazy {
    try {
        Looper.getMainLooper().thread.id
    } catch (_: Exception) {
        null
    }
}

internal actual fun checkMainThread() {
    val settings = DecomposeSettings.settings
    if (settings.mainThreadCheckEnabled && (mainThreadId != null) && (Thread.currentThread().id != mainThreadId)) {
        settings.onDecomposeError(NotOnMainThreadException(currentThreadName = Thread.currentThread().name))
    }
}
