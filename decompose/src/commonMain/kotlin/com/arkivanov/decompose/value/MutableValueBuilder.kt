package com.arkivanov.decompose.value

import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.ensureNeverFrozen
import kotlin.properties.Delegates

/**
 * Returns a new instance of [MutableValue] initialized with the provided [initialValue].
 */
@Suppress("FunctionName") // Factory function
fun <T> MutableValue(initialValue: T): MutableValue<T> = MutableValueImpl(initialValue)

private class MutableValueImpl<T>(initialValue: T) : MutableValue<T> {

    init {
        ensureNeverFrozen()
    }

    private val relay = Relay<T>()
    override var value: T by Delegates.observable(initialValue) { _, _, value -> relay.accept(value) }

    override fun subscribe(observer: (T) -> Unit) {
        relay.subscribe(observer)
        observer(value)
    }

    override fun unsubscribe(observer: (T) -> Unit) {
        relay.unsubscribe(observer)
    }
}
