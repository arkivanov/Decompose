package com.arkivanov.decompose

import kotlin.js.JsName

@JsExportCompat
sealed class Child<out C : Any, out T : Any> {

    abstract val configuration: C
    abstract val instance: T?

    @ExperimentalDecomposeApi
    abstract val key: Any

    data class Created<out C : Any, out T : Any> @ExperimentalDecomposeApi constructor(
        override val configuration: C,
        override val instance: T,

        @property:ExperimentalDecomposeApi
        override val key: Any,
    ) : Child<C, T>() {
        @JsName("create")
        constructor(configuration: C, instance: T) : this(
            configuration = configuration,
            instance = instance,
            key = configuration,
        )

        @JsName("copyDeprecated1")
        @Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
        fun copy(configuration: @UnsafeVariance C, instance: @UnsafeVariance T): Child<C, T> =
            copy(configuration = configuration, instance = instance)
    }

    data class Destroyed<out C : Any> @ExperimentalDecomposeApi constructor(
        override val configuration: C,

        @property:ExperimentalDecomposeApi
        override val key: Any,
    ) : Child<C, Nothing>() {
        @JsName("create")
        constructor(configuration: C) : this(
            configuration = configuration,
            key = configuration,
        )

        override val instance: Nothing? = null

        @JsName("copyDeprecated1")
        @Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
        fun copy(configuration: @UnsafeVariance C): Child<C, Nothing> =
            copy(configuration = configuration)
    }
}
