package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child

/**
 * A state holder for `Child Stack`.
 */
data class ChildStack<out C : Any, out T : Any>(
    val active: Child.Created<C, T>,
    val backStack: List<Child<C, T>> = emptyList(),
) {

    constructor(configuration: C, instance: T) : this(
        active = Child.Created(
            configuration = configuration,
            instance = instance
        ),
    )

    /**
     * Returns the full stack of component configurations, ordered from tail to head.
     */
    val items: List<Child<C, T>> = Items(active = active, backStack = backStack)

    private class Items<out C : Any, out T : Any>(
        private val active: Child.Created<C, T>,
        private val backStack: List<Child<C, T>> = emptyList(),
    ) : AbstractList<Child<C, T>>() {
        override val size: Int get() = backStack.size + 1

        override fun get(index: Int): Child<C, T> =
            when {
                (index < 0) || (index >= size) -> throw IndexOutOfBoundsException("Index is out of bounds: index=$index, size=$size")
                index < backStack.size -> backStack[index]
                else -> active
            }
    }
}
