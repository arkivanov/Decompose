package com.arkivanov.decompose

internal expect fun Any.ensureNeverFrozen()

internal fun Collection<Any?>.isUnique(): Boolean = toSet().size == size
