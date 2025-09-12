package com.arkivanov.decompose

/** A cancellation handle, returned by various functions where cancellation is required. */
fun interface Cancellation {

    fun cancel()
}

internal fun Cancellation.doOnCancel(block: () -> Unit): Cancellation =
    Cancellation {
        cancel()
        block()
    }
