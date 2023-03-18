package com.arkivanov.decompose.value

/**
 * Atomically updates the value using the provided [function].
 *
 * @param function a function transforming the current value to a new one.
 * May be called multiple times if the value is being updated concurrently.
 */
// Not inlined due to https://youtrack.jetbrains.com/issue/KT-57412
fun <T : Any> MutableValue<T>.update(function: (T) -> T) {
    updateAndGet(function)
}

/**
 * Atomically updates the value using the provided [function] and returns
 * the new value.
 *
 * @param function a function transforming the current value to a new one.
 * May be called multiple times if the value is being updated concurrently.
 */
// Not inlined due to https://youtrack.jetbrains.com/issue/KT-57412
fun <T : Any> MutableValue<T>.updateAndGet(function: (T) -> T): T {
    while (true) {
        val prevValue = value
        val nextValue = function(prevValue)

        if (compareAndSet(prevValue, nextValue)) {
            return nextValue
        }
    }
}

/**
 * Atomically updates the value using the provided [function] and returns
 * the previous value.
 *
 * @param function a function transforming the current value to a new one.
 * May be called multiple times if the value is being updated concurrently.
 */
// Not inlined due to https://youtrack.jetbrains.com/issue/KT-57412
fun <T : Any> MutableValue<T>.getAndUpdate(function: (T) -> T): T {
    while (true) {
        val prevValue = value
        val nextValue = function(prevValue)

        if (compareAndSet(prevValue, nextValue)) {
            return prevValue
        }
    }
}
