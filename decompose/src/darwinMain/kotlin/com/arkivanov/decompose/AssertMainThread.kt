package com.arkivanov.decompose

import platform.Foundation.NSThread

internal actual fun assertMainThread() {
    check(NSThread.isMainThread) {
        "Expected to be called on the main thread, but was ${NSThread.currentThread.description()}"
    }
}
