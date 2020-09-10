package com.arkivanov.decompose.value

import kotlin.properties.Delegates

@Suppress("FunctionName") // Factory function
fun <T : Any> MutableValue(initialValue: T): MutableValue<T> = MutableValueImpl(initialValue)

private class MutableValueImpl<T : Any>(initialValue: T) : MutableValue<T>() {
    private var observers = emptySet<ValueObserver<T>>()

    override var value: T by Delegates.observable(initialValue) { _, _, value ->
        observers.forEach { it(value) }
    }

    override fun subscribe(observer: ValueObserver<T>) {
        observers = observers + observer
    }

    override fun unsubscribe(observer: ValueObserver<T>) {
        observers = observers - observer
    }
}
