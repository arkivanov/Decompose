package com.arkivanov.decompose

fun <C : Any> Navigator<C>.push(configuration: C) {
    navigate { it + configuration }
}

fun <C : Any> Navigator<C>.pop() {
    navigate { it.dropLast(1) }
}
