package com.arkivanov.decompose.value

/**
 * Updates the value using the [reducer] function.
 *
 * Not thread-safe, should be accessed only on the Main thread.
 */
inline fun <T> MutableValue<T>.reduce(reducer: (T) -> T) {
    value = reducer(value)
}
