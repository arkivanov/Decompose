package com.arkivanov.decompose

import com.arkivanov.decompose.mainthread.checkMainThread

internal class Relay<T>(
    private val isMainThreadCheckEnabled: Boolean = false,
) {

    private val lock = Lock()
    private val queue = ArrayDeque<T>()
    private var isDraining = false
    private var observers = emptySet<(T) -> Unit>()

    fun accept(value: T) {
        if (isMainThreadCheckEnabled) {
            checkMainThread()
        }

        lock.synchronized {
            queue.addLast(value)

            if (isDraining) {
                return
            }

            isDraining = true
        }

        drainLoop()
    }

    private fun drainLoop() {
        while (true) {
            val value: T
            val observersCopy: Set<(T) -> Unit>

            lock.synchronized {
                if (queue.isEmpty()) {
                    isDraining = false
                    return
                }

                value = queue.removeFirst()
                observersCopy = observers
            }

            observersCopy.forEach { observer ->
                observer(value)
            }
        }
    }

    fun subscribe(observer: (T) -> Unit) {
        lock.synchronized { observers += observer }
    }

    fun unsubscribe(observer: (T) -> Unit) {
        lock.synchronized { observers -= observer }
    }
}
