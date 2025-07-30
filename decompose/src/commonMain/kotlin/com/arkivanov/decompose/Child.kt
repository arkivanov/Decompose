package com.arkivanov.decompose

sealed class Child<out C : Any, out T : Any> {

    abstract val configuration: C
    abstract val instance: T?
    abstract val key: String

    data class Created<out C : Any, out T : Any> @ExperimentalDecomposeApi constructor(
        override val configuration: C,
        override val instance: T,
        override val key: String,
    ) : Child<C, T>() {
        constructor(configuration: C, instance: T) : this(
            configuration = configuration,
            instance = instance,
            key = configuration.keyHashString(),
        )
    }

    data class Destroyed<out C : Any> @ExperimentalDecomposeApi constructor(
        override val configuration: C,
        override val key: String,
    ) : Child<C, Nothing>() {
        constructor(configuration: C) : this(
            configuration = configuration,
            key = configuration.keyHashString(),
        )

        override val instance: Nothing? = null
    }
}
