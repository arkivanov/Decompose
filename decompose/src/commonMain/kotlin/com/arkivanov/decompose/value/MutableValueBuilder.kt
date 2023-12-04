package com.arkivanov.decompose.value

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Lock
import com.arkivanov.decompose.synchronized

/**
 * Returns a new instance of [MutableValue] initialized with the provided [initialValue].
 */
fun <T : Any> MutableValue(initialValue: T): MutableValue<T> = MutableValueImpl(initialValue)

private class MutableValueImpl<T : Any>(initialValue: T) : MutableValue<T>() {

    private val lock = Lock()
    private var _value: T = initialValue
    private var isEmitting = false
    private var observers: Map<(T) -> Unit, Boolean> = emptyMap()

    override var value: T
        get() = lock.synchronized { _value }
        set(value) {
            setValue(value)
        }

    override fun compareAndSet(expected: T, new: T): Boolean =
        setValue(new) { it === expected }

    private inline fun setValue(value: T, predicate: (T) -> Boolean = { true }): Boolean {
        lock.synchronized {
            if (!predicate(_value)) {
                return false
            }

            _value = value

            if (isEmitting) {
                return true
            }

            isEmitting = true
        }

        emit()

        return true
    }

    private fun emit() {
        while (true) {
            val value: T
            val observersCopy: Map<(T) -> Unit, Boolean>

            lock.synchronized {
                value = _value
                observersCopy = observers
            }

            observersCopy.forEach { (observer, isEnabled) ->
                if (isEnabled) {
                    observer(value)
                }
            }

            lock.synchronized {
                if (value === _value) {
                    isEmitting = false
                    return
                }
            }
        }
    }

    override fun subscribe(observer: (T) -> Unit): Cancellation {
        subscribeObserver(observer)

        return Cancellation { unsubscribeObserver(observer) }
    }

    private fun subscribeObserver(observer: (T) -> Unit) {
        lock.synchronized {
            if (observer in observers) {
                return
            }

            observers += observer to false
        }

        while (true) {
            val value = lock.synchronized { _value }

            observer(value)

            lock.synchronized {
                if (observer !in observers) {
                    return
                }

                if (value === _value) {
                    observers += observer to true
                    return
                }
            }
        }
    }

    private fun unsubscribeObserver(observer: (T) -> Unit) {
        lock.synchronized { observers -= observer }
    }
}
