package com.arkivanov.decompose

internal class GettingList<out T>(
    override val size: Int,
    private val get: (Int) -> T,
) : AbstractList<T>() {

    override fun get(index: Int): T =
        get.invoke(index)
}

internal inline fun <T, R> List<T>.mapped(crossinline mapper: (T) -> R): List<R> =
    GettingList(size = size) { mapper(get(it)) }
