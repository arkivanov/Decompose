package com.arkivanov.decompose.value

/**
 * Represents an optional [Value], designed for interop with ObjC/Swift.
 */
abstract class OptValue<out T : Any> : Value<T?> {

    abstract override val value: T?

    abstract override fun subscribe(observer: (T?) -> Unit)

    abstract override fun unsubscribe(observer: (T?) -> Unit)
}

/**
 * Represents [Value] as [OptValue] for interop with ObjC/Swift.
 */
fun <T : Any> Value<T?>.asOptional(): OptValue<T> =
    object : OptValue<T>(), Value<T?> by this {}
