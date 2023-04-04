package com.arkivanov.decompose

import platform.Foundation.NSLock

internal actual class Lock actual constructor() : NSLock() {

    actual inline fun <T> synchronizedImpl(block: () -> T): T {
        lock()
        try {
            return block()
        } finally {
            unlock()
        }
    }
}
