package com.arkivanov.decompose

internal class Relay<T> {

    init {
        ensureNeverFrozen()
    }

    private var observers = emptySet<(T) -> Unit>()

    private val queue =
        SerializedQueue<T> { value ->
            observers.forEach { it(value) }
        }

    fun subscribe(observer: (T) -> Unit) {
        this.observers += observer
    }

    fun unsubscribe(observer: (T) -> Unit) {
        this.observers -= observer
    }

    fun accept(value: T) {
        queue.offer(value)
    }
}
