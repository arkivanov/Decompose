package com.arkivanov.decompose

import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlin.reflect.KClass

@InternalDecomposeApi
fun Any.hashString(): String =
    "${this::class.uniqueName ?: this::class.simpleName}_${hashCode().toString(radix = 36)}"

@InternalDecomposeApi
fun Child<*, *>.keyHashString(): String =
    "${configuration::class.uniqueName ?: configuration::class.simpleName}_${key.hashCode().toString(radix = 36)}"

internal expect val KClass<*>.uniqueName: String?

internal val Lifecycle.isDestroyed: Boolean get() = state == Lifecycle.State.DESTROYED

internal fun <T : Any, C : Any> List<T>.keyed(configuration: (T) -> C): Map<ItemKey, T> {
    val indices = HashMap<C, Int>()

    return associateBy { item ->
        val config = configuration(item)
        val index = indices[config]?.plus(1) ?: 0
        indices[config] = index
        ItemKey(config, index)
    }
}

internal data class ItemKey(
    private val value: Any,
    private val index: Int,
)

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
