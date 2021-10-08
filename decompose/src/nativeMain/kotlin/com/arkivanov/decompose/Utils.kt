package com.arkivanov.decompose

import kotlin.native.concurrent.ensureNeverFrozen as ensureNeverFrozenNative

internal actual fun Any.ensureNeverFrozen() {
    ensureNeverFrozenNative()
}
