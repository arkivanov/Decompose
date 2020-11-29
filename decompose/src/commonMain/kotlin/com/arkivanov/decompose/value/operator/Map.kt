package com.arkivanov.decompose.value.operator

import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver

fun <T : Any, R : Any> Value<T>.map(mapper: (T) -> R): Value<R> = MappedValue(this, mapper)

private class MappedValue<T : Any, out R : Any>(
    private val upstream: Value<T>,
    private val mapper: (T) -> R
) : Value<R>() {
    private var lastUpstreamValue: T = upstream.value
    private var lastDownstreamValue: R = mapper(lastUpstreamValue)

    override val value: R
        get() {
            val upstreamValue = upstream.value
            if (upstreamValue !== lastUpstreamValue) {
                lastUpstreamValue = upstreamValue
                lastDownstreamValue = mapper(upstreamValue)
            }

            return lastDownstreamValue
        }

    private var observers = emptySet<ValueObserver<R>>()
    private val upstreamObserver: (T) -> Unit = ::onUpstreamValue

    private fun onUpstreamValue(value: T) {
        lastUpstreamValue = value
        val mappedValue = mapper(value)
        lastDownstreamValue = mappedValue
        observers.forEach { it(mappedValue) }
    }

    override fun subscribe(observer: ValueObserver<R>) {
        if (observers.isEmpty()) {
            upstream.subscribe(upstreamObserver)
        }

        this.observers += observer
        observer(value)
    }

    override fun unsubscribe(observer: ValueObserver<R>) {
        this.observers -= observer

        if (observers.isEmpty()) {
            upstream.unsubscribe(upstreamObserver)
        }
    }
}
