package com.arkivanov.decompose

internal class SerializedQueue<in T>(
    private val onValue: (T) -> Unit
) {

    init {
        ensureNeverFrozen()
    }

    private val queue = ArrayDeque<T>()

    fun offer(value: T) {
        queue.addLast(value)

        if (queue.size == 1) {
            drain()
        }
    }

    private fun drain() {
        do {
            onValue(queue.first())
            queue.removeFirst()
        } while (queue.isNotEmpty())
    }
}
