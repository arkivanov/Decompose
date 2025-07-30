package com.arkivanov.decompose

import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlin.reflect.KClass

@InternalDecomposeApi
fun Any.keyHashString(): String =
    "${this::class.uniqueName ?: this::class.simpleName}_${hashCode().toString(radix = 36)}"

internal expect val KClass<*>.uniqueName: String?

internal val Lifecycle.isDestroyed: Boolean get() = state == Lifecycle.State.DESTROYED

internal fun <T : Any> Iterable<T>.findFirstDuplicate(set: Set<T>): Pair<Int, T>? {
    val iter1 = iterator()
    val iter2 = set.iterator()
    var index = 0

    while (iter1.hasNext()) {
        val item = iter1.next()
        if (!iter2.hasNext() || (iter2.next() != item)) {
            return index to item
        }
        index++
    }

    return null
}
