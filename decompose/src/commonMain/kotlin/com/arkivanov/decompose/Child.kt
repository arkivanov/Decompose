package com.arkivanov.decompose

sealed class Child<out C : Any, out T : Any> {

    abstract val configuration: C
    abstract val instance: T?

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val instance: T,
    ) : Child<C, T>()

    data class Destroyed<out C : Any>(
        override val configuration: C,
    ) : Child<C, Nothing>() {
        override val instance: Nothing? = null
    }
}
