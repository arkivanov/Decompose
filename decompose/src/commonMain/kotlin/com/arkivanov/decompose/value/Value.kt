package com.arkivanov.decompose.value

/**
 * An observable value holder. Used in Decompose to avoid the direct dependency on coroutines/Reaktive.
 * Also, since [Value] is a class (not an interface), it is useful to expose state streams to Swift.
 *
 * Not thread safe, should be accessed only on the Main thread.
 */
abstract class Value<out T : Any> {

    /**
     * Returns the current value.
     *
     * Should be accessed on the Main thread.
     */
    abstract val value: T

    /**
     * Subscribes the provided [observer] for value updates. The current value is emitted synchronously on subscription.
     *
     * Should be accessed on the Main thread.
     */
    abstract fun subscribe(observer: ValueObserver<T>)

    /**
     * Unsubscribes the provided [observer] from value updates.
     *
     * Should be accessed on the Main thread.
     */
    abstract fun unsubscribe(observer: ValueObserver<T>)
}
