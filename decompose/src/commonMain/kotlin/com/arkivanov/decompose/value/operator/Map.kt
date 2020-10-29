package com.arkivanov.decompose.value.operator

import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver

fun <T : Any, R : Any> Value<T>.map(mapper: (T) -> R): Value<R> = MappedValue(this, mapper)

private class MappedValue<T : Any, out R : Any>(
    private val upstream: Value<T>,
    private val mapper: (T) -> R
) : Value<R>() {
    private val mutableValue = MutableValue(mapper(upstream.value))
    private var upstreamObserver: ValueObserver<T>? = null
    private val observers = mutableSetOf<ValueObserver<R>>()

    override val value: R get() = mutableValue.value

    override fun subscribe(observer: ValueObserver<R>) {
        if (observers.isEmpty()) {
            upstreamObserver = { mutableValue.value = mapper(it) }
            upstream.subscribe(upstreamObserver!!)
        }

        observers += observer
        mutableValue.subscribe(observer)
    }

    override fun unsubscribe(observer: ValueObserver<R>) {
        mutableValue.unsubscribe(observer)
        observers -= observer

        if (observers.isEmpty()) {
            upstream.unsubscribe(upstreamObserver!!)
            upstreamObserver = null
        }
    }
}
