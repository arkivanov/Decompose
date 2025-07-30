package com.arkivanov.decompose

sealed class Child<out C : Any, out T : Any> {

    abstract val configuration: C
    abstract val instance: T?
    abstract val key: String

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val instance: T,
        override val key: String,
    ) : Child<C, T>()

    data class Destroyed<out C : Any>(
        override val configuration: C,
        override val key: String,
    ) : Child<C, Nothing>() {
        override val instance: Nothing? = null
    }
}

@Suppress("UNCHECKED_CAST")
inline fun <C : Any, T : Any, reified R : T> Child<C, T>.asCreatedOf(): Child.Created<C, R>? =
    if (instance is R) this as Child.Created<C, R> else null
