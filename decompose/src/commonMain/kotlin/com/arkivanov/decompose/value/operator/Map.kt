package com.arkivanov.decompose.value.operator

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Lock
import com.arkivanov.decompose.synchronized
import com.arkivanov.decompose.value.Value

fun <T : Any, R : Any> Value<T>.map(mapper: (T) -> R): Value<R> =
    MappedValue(this, mapper)

private class MappedValue<T : Any, out R : Any>(
    private val upstream: Value<T>,
    private val mapper: (T) -> R,
) : Value<R>() {
    private val lock = Lock()
    private var lastUpstreamValue: T = upstream.value
    private var lastMappedValue: R = mapper(lastUpstreamValue)

    override val value: R get() = mapCached(upstream.value)

    private fun mapCached(value: T): R =
        lock.synchronized {
            if (value !== lastUpstreamValue) {
                lastUpstreamValue = value
                lastMappedValue = mapper(value)
            }

            lastMappedValue
        }

    override fun subscribe(observer: (R) -> Unit): Cancellation =
        upstream.subscribe { observer(mapCached(it)) }
}
