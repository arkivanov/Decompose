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
annotation class ExperimentalDecomposeApi

/**
 * Marks delicate API in Decompose. A delicate API requires special care when used.
 * Please read the documentation about the API before using it.
 */
@RequiresOptIn(level = RequiresOptIn.Level.WARNING)
@Retention(AnnotationRetention.BINARY)
annotation class DelicateDecomposeApi
