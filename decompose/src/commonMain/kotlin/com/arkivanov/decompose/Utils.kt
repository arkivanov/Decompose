package com.arkivanov.decompose

import com.arkivanov.essenty.lifecycle.Lifecycle

internal expect fun Any.ensureNeverFrozen()

internal val Lifecycle.isDestroyed: Boolean get() = state == Lifecycle.State.DESTROYED
