package com.arkivanov.decompose

/**
 * A holder class for child [configuration], [instance] and [key].
 */
sealed class Child<out C : Any, out T : Any> {

    /**
     * A configuration object the child was originally created with.
     */
    abstract val configuration: C

    /**
     * The actual child instance.
     */
    abstract val instance: T?

    /**
     * A key of the child, unique within the navigation model managing the child.
     */
    abstract val key: String

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val instance: T,
        override val key: String,
    ) : Child<C, T>() {
        // TODO: Annotate with @VisibleForTesting in version 4.0
        constructor(configuration: C, instance: T) : this(
            configuration = configuration,
            instance = instance,
            key = configuration.hashString(),
        )

        @Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
        fun copy(configuration: @UnsafeVariance C, instance: @UnsafeVariance T): Child<C, T> =
            copy(configuration = configuration, instance = instance)

        @Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
        fun copy(configuration: @UnsafeVariance C, instance: @UnsafeVariance T, key: Any): Created<C, T> =
            copy(configuration = configuration, instance = instance, key = key.toString())
    }

    data class Destroyed<out C : Any> @ExperimentalDecomposeApi constructor(
        override val configuration: C,
        override val key: String,
    ) : Child<C, Nothing>() {
        // TODO: Annotate with @VisibleForTesting in version 4.0
        constructor(configuration: C) : this(
            configuration = configuration,
            key = configuration.hashString(),
        )

        override val instance: Nothing? = null

        @Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
        fun copy(configuration: @UnsafeVariance C): Child<C, Nothing> =
            copy(configuration = configuration)

        @Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
        fun copy(configuration: @UnsafeVariance C, key: Any): Destroyed<C> =
            copy(configuration = configuration, key = key.toString())
    }
}
