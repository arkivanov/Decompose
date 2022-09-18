package com.arkivanov.decompose.value

/**
 * An observable value holder. Used in Decompose to avoid the direct dependency on coroutines/Reaktive.
 *
 * Since [Value] is an interface with a generic type parameter, it can't be used in ObjC/Swift.
 * For this case, [Value] should be converted to [ReqValue] or [OptValue].
 *
 * Not thread-safe, should be accessed only on the Main thread.
 *
 * @see [ReqValue]
 * @see [OptValue]
 */
interface Value<out T> {

    /**
     * Returns the current value.
     *
     * Should be accessed on the Main thread.
     */
    val value: T

    /**
     * Subscribes the provided [observer] for value updates. The current value is emitted synchronously on subscription.
     *
     * Should be accessed on the Main thread.
     */
    fun subscribe(observer: (T) -> Unit)

    /**
     * Unsubscribes the provided [observer] from value updates.
     *
     * Should be accessed on the Main thread.
     */
    fun unsubscribe(observer: (T) -> Unit)
}
