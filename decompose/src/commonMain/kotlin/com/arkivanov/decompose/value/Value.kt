package com.arkivanov.decompose.value

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.JsExportCompat

/**
 * An observable value holder. Used in Decompose to avoid the direct dependency on coroutines/Reaktive.
 * Also, since [Value] is a class (not an interface) with a generic type parameter, it is useful to
 * expose state streams to ObjC/Swift.
 */
@JsExportCompat
abstract class Value<out T : Any> {

    /**
     * Returns the current value.
     */
    abstract val value: T

    /**
     * Subscribes the provided [observer] for value updates. The current value is emitted synchronously on subscription.
     *
     * @return [Cancellation] token to cancel the subscription.
     */
    abstract fun subscribe(observer: (T) -> Unit): Cancellation
}
