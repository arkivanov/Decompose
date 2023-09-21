package com.arkivanov.decompose.value

import com.arkivanov.decompose.Cancellation

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
    @Deprecated(
        message = "Calling this method from Swift leaks the observer, " +
            "because Kotlin wraps the function passed from Swift every time the method is called. " +
            "Please use the new `observe` method which returns `Disposable`.",
        level = DeprecationLevel.WARNING,
    )
    abstract fun subscribe(observer: (T) -> Unit)

    /**
     * Unsubscribes the provided [observer] from value updates.
     */
    @Deprecated(
        message = "Calling this method from Swift doesn't have any effect, " +
            "because Kotlin wraps the function passed from Swift every time the method is called. " +
            "Please use the new `observe` method which returns `Disposable`.",
        level = DeprecationLevel.WARNING,
    )
    abstract fun unsubscribe(observer: (T) -> Unit)

    /**
     * Subscribes the provided [observer] for value updates. The current value is emitted synchronously on subscription.
     *
     * Note: most likely this method will be renamed to `subscribe` in the next major release, once deprecated methods are removed.
     *
     * @return [Cancellation] token to cancel the subscription.
     */
    @Suppress("DEPRECATION")
    fun observe(observer: (T) -> Unit): Cancellation {
        subscribe(observer)

        return Cancellation { unsubscribe(observer) }
    }
}
