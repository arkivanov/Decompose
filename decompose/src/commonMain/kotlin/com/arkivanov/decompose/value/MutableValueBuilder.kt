package com.arkivanov.decompose.value

import com.arkivanov.decompose.ensureNeverFrozen
import kotlin.properties.Delegates

/**
 * Returns a new instance of [MutableValue] initialized with the provided [initialValue].
 */
@Suppress("FunctionName") // Factory function
fun <T : Any> MutableValue(initialValue: T): MutableValue<T> = MutableValueImpl(initialValue)

private class MutableValueImpl<T : Any>(initialValue: T) : MutableValue<T>() {

    init {
        ensureNeverFrozen()
    }

    private var observers = emptySet<(T) -> Unit>()

    override var value: T by Delegates.observable(initialValue) { _, _, value ->
        observers.forEach { it(value) }
    }

    override fun subscribe(observer: (T) -> Unit) {
        observers = observers + observer
        observer(value)
    }

    override fun unsubscribe(observer: (T) -> Unit) {
        observers = observers - observer
    }
}
