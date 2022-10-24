package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.GettingList

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
    val items: List<Child<C, T>> =
        GettingList(size = backStack.size + 1) { index ->
            backStack.getOrNull(index) ?: active
        }
}
