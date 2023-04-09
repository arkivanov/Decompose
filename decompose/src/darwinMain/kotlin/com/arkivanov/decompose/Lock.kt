package com.arkivanov.decompose

import platform.Foundation.NSRecursiveLock

internal actual class Lock actual constructor() : NSRecursiveLock() {

    actual inline fun <T> synchronizedImpl(block: () -> T): T {
        lock()
        try {
            return block()
        } finally {
            unlock()
        }
    }
}
