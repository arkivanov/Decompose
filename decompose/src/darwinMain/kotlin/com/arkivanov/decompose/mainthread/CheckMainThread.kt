package com.arkivanov.decompose.mainthread

import com.arkivanov.decompose.DecomposeSettings
import com.arkivanov.decompose.errorhandler.onDecomposeError
import platform.Foundation.NSThread

internal actual fun checkMainThread() {
    if (DecomposeSettings.settings.mainThreadCheckEnabled && !NSThread.isMainThread()) {
        onDecomposeError(NotOnMainThreadException(currentThreadName = NSThread.currentThread.description()))
    }
}
