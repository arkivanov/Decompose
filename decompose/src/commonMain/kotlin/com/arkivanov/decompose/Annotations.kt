package com.arkivanov.decompose

/**
 * Marks internal declarations in Decompose. Internal declarations must not be used outside the library.
 * There are no backward compatibility guarantees between different versions of Decompose.
 */
@RequiresOptIn(level = RequiresOptIn.Level.ERROR)
@Retention(AnnotationRetention.BINARY)
annotation class InternalDecomposeApi

/**
 * Marks experimental API in Decompose. An experimental API can be changed or removed at any time.
 */
@RequiresOptIn(level = RequiresOptIn.Level.WARNING)
@Retention(AnnotationRetention.BINARY)
@Target(
    AnnotationTarget.CLASS,
    AnnotationTarget.PROPERTY,
    AnnotationTarget.FIELD,
    AnnotationTarget.LOCAL_VARIABLE,
    AnnotationTarget.VALUE_PARAMETER,
    AnnotationTarget.CONSTRUCTOR,
    AnnotationTarget.FUNCTION,
    AnnotationTarget.PROPERTY_GETTER,
    AnnotationTarget.PROPERTY_SETTER,
    AnnotationTarget.TYPEALIAS,
)
annotation class ExperimentalDecomposeApi

/**
 * Marks Decompose API, the implementation of which may contain bugs or known to contain bugs.
 * See the docs of the annotated API for more information.
 */
@RequiresOptIn(level = RequiresOptIn.Level.WARNING)
@Retention(AnnotationRetention.BINARY)
annotation class FaultyDecomposeApi

/**
 * Marks delicate Decompose API that requires special attention when used.
 * See the docs of the annotated API for more information.
 */
@RequiresOptIn(level = RequiresOptIn.Level.WARNING)
@Retention(AnnotationRetention.BINARY)
annotation class DelicateDecomposeApi
