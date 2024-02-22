package com.arkivanov.decompose

internal class Relay<T> {

    private val lock = Lock()
    private val queue = ArrayDeque<T>()
    private var isDraining = false
    private var observers = emptySet<(T) -> Unit>()

    fun accept(value: T) {
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

    fun subscribe(observer: (T) -> Unit): Cancellation {
        lock.synchronized { observers += observer }

        return Cancellation {
            lock.synchronized { observers -= observer }
        }
    }
}
