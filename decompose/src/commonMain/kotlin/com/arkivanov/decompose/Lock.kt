package com.arkivanov.decompose

import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract

internal expect class Lock() {

    inline fun <T> synchronizedImpl(block: () -> T): T
}

@OptIn(ExperimentalContracts::class)
internal inline fun <T> Lock.synchronized(block: () -> T): T {
    contract { callsInPlace(block, InvocationKind.EXACTLY_ONCE) }

    return synchronizedImpl(block)
}
