package com.arkivanov.decompose.value

/**
 * A mutable variant of [Value].
 *
 * Not thread-safe, should be accessed only on the Main thread.
 *
 * @see Value
 */
interface MutableValue<T> : Value<T> {

    /**
     * When read - returns the current value.
     *
     * When assigned - replaces the stored value with the new one, and notifies all registered observers.
     *
     * Should be accessed on the Main thread.
     *
     * @see Value.value
     */
    override var value: T
}
