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
    private var upstreamObserver: ValueObserver<T>? = null

    override fun subscribe(observer: ValueObserver<R>) {
        this.observers += observer

        if (upstreamObserver == null) {
            upstreamObserver =
                {
                    val value = mapper(it)
                    observers.forEach { it(value) }
                }
        }

        upstream.subscribe(upstreamObserver!!)
    }

    override fun unsubscribe(observer: ValueObserver<R>) {
        this.observers -= observer

        if (observers.isEmpty() && (upstreamObserver != null)) {
            upstream.unsubscribe(upstreamObserver!!)
            upstreamObserver = null
        }
    }
}
