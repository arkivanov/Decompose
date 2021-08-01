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
