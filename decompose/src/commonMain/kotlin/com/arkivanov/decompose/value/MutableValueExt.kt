package com.arkivanov.decompose.value

inline fun <T : Any> MutableValue<T>.reduce(reducer: (T) -> T) {
    value = reducer(value)
}
