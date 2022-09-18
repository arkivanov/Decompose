package com.arkivanov.decompose.value

/**
 * Represents an required [Value], designed for interop with ObjC/Swift.
 */
abstract class ReqValue<out T : Any> : Value<T> {

    abstract override val value: T

    abstract override fun subscribe(observer: (T) -> Unit)

    abstract override fun unsubscribe(observer: (T) -> Unit)
}

/**
 * Represents [Value] as [ReqValue] for interop with ObjC/Swift.
 */
fun <T : Any> Value<T>.asRequired(): ReqValue<T> =
    object : ReqValue<T>(), Value<T> by this {}
