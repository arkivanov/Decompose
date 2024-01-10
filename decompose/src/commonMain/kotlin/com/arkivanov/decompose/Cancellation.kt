package com.arkivanov.decompose

/** A cancellation handle, returned by various functions where cancellation is required. */
@JsExportCompat
fun interface Cancellation {

    fun cancel()
}
