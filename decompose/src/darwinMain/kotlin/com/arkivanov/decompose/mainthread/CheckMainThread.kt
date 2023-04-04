package com.arkivanov.decompose.mainthread

import com.arkivanov.decompose.errorhandler.onDecomposeError
import platform.Foundation.NSThread

internal actual fun checkMainThread() {
    if (!NSThread.isMainThread()) {
        onDecomposeError(NotOnMainThreadException(currentThreadName = NSThread.currentThread.description()))
    }
}
