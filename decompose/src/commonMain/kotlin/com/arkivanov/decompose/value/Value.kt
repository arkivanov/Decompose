package com.arkivanov.decompose.value

/**
 * An observable value holder. Used in Decompose to avoid the direct dependency on coroutines/Reaktive.
 * Also, since [Value] is a class (not an interface) with a generic type parameter, it is useful to
 * expose state streams to ObjC/Swift.
 */
abstract class Value<out T : Any> {

    /**
     * Returns the current value.
     */
    abstract val value: T

    /**
     * Subscribes the provided [observer] for value updates. The current value is emitted synchronously on subscription.
     */
    abstract fun subscribe(observer: (T) -> Unit)

    /**
     * Unsubscribes the provided [observer] from value updates.
     */
    abstract fun unsubscribe(observer: (T) -> Unit)
}
