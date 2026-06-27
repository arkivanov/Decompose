package com.arkivanov.decompose.mainthread

import com.arkivanov.decompose.DecomposeSettings
import platform.Foundation.NSThread

internal actual fun checkMainThread() {
    val settings = DecomposeSettings.settings
    if (settings.mainThreadCheckEnabled && !NSThread.isMainThread()) {
        settings.onDecomposeError(NotOnMainThreadException(currentThreadName = NSThread.currentThread.description()))
    }
}
