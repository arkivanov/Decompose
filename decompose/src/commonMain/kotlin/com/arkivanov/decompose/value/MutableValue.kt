package com.arkivanov.decompose.value

/**
 * A mutable variant of [Value].
 *
 * Not thread-safe, should be accessed only on the Main thread.
 *
 * @see Value
 */
abstract class MutableValue<T : Any> : Value<T>() {

    /**
     * When read - returns the current value.
     *
     * When assigned - replaces the stored value with the new one, and notifies all registered observers.
     *
     * Not thread-safe, should be accessed only on the Main thread.
     *
     * @see Value.value
     */
    abstract override var value: T
}
