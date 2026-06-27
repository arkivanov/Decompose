package com.arkivanov.decompose.mainthread

import com.arkivanov.decompose.DecomposeSettings

internal actual fun checkMainThread() {
    val settings = DecomposeSettings.settings
    if (settings.mainThreadCheckEnabled && mainThreadChecker?.isMainThread() == false) {
        settings.onDecomposeError(NotOnMainThreadException(currentThreadName = Thread.currentThread().name))
    }
}
