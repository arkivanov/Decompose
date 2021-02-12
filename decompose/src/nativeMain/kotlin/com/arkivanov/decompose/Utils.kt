package com.arkivanov.decompose

import kotlin.native.concurrent.ensureNeverFrozen as ensureNeverFrozenNative

actual fun Any.ensureNeverFrozen() {
    ensureNeverFrozenNative()
}
