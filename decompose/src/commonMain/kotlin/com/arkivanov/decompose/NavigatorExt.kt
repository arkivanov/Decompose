package com.arkivanov.decompose

fun <C : Any> Navigator<C>.push(configuration: C) {
    navigate { it + configuration }
}

fun <C : Any> Navigator<C>.pop() {
    navigate { it.dropLast(1) }
}

inline fun <C : Any> Navigator<C>.popWhile(crossinline predicate: (C) -> Boolean) {
    navigate { it.dropLastWhile(predicate) }
}

fun <C : Any> Navigator<C>.replaceCurrent(configuration: C) {
    navigate { it.dropLast(1) + configuration }
}

/**
 * Removes all components with configurations of [configuration]'s class, and adds the provided [configuration] to the top of the stack.
 * The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.
 */
fun <C : Any> Navigator<C>.bringToFront(configuration: C) {
    navigate { stack ->
        stack.filterNot { it::class == configuration::class } + configuration
    }
}
