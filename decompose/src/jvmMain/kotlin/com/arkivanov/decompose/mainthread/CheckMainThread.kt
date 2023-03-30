package com.arkivanov.decompose.mainthread

import com.arkivanov.decompose.errorhandler.onDecomposeError

internal actual fun checkMainThread() {
    if (mainThreadChecker?.isMainThread() == false) {
        onDecomposeError(NotOnMainThreadException(currentThreadName = Thread.currentThread().name))
    }
}
