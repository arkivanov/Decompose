package com.arkivanov.decompose.value

/**
 * A mutable variant of [Value].
 *
 * @see Value
 */
abstract class MutableValue<T : Any> : Value<T>() {

    /**
     * When read - returns the current value.
     *
     * When assigned - replaces the stored value with the new one, and notifies all registered observers.
     *
     * @see Value.value
     */
    abstract override var value: T

    /**
     * Atomically compares the current value with [expected] and replaces it with the [new] value if successful.
     * The comparison is preformed by reference. Returns `true` if the value was updated, `false` otherwise.
     */
    abstract fun compareAndSet(expected: T, new: T): Boolean
}
