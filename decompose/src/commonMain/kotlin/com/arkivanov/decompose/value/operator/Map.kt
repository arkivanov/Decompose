package com.arkivanov.decompose.value.operator

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
    private var observers = HashMap<(R) -> Unit, (T) -> Unit>()

    override val value: R get() = mapCached(upstream.value)

    private fun mapCached(value: T): R =
        lock.synchronized {
            if (value !== lastUpstreamValue) {
                lastUpstreamValue = value
                lastMappedValue = mapper(value)
            }

            lastMappedValue
        }

    @Deprecated(
        "Calling this method from Swift leaks the observer, " +
            "because Kotlin wraps the function passed from Swift every time the method is called. " +
            "Please use the new `observe` method which returns `Disposable`.",
        level = DeprecationLevel.WARNING,
    )
    override fun subscribe(observer: (R) -> Unit) {
        val upstreamObserver: (T) -> Unit = { value -> observer(mapCached(value)) }

        lock.synchronized {
            if (observer in observers) {
                return
            }

            observers[observer] = upstreamObserver
        }

        @Suppress("DEPRECATION")
        upstream.subscribe(upstreamObserver)
    }

    @Deprecated(
        "Calling this method from Swift doesn't have any effect, " +
            "because Kotlin wraps the function passed from Swift every time the method is called. " +
            "Please use the new `observe` method which returns `Disposable`.",
        level = DeprecationLevel.WARNING,
    )
    override fun unsubscribe(observer: (R) -> Unit) {
        val upstreamObserver = lock.synchronized { observers.remove(observer) } ?: return

        @Suppress("DEPRECATION")
        upstream.unsubscribe(upstreamObserver)
    }
}
