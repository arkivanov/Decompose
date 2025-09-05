package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.GettingList

/**
 * A state holder for `Child Stack`.
 *
 * @param active the currently active (top) child of the stack.
 * @param backStack the back stack (inactive children), can be empty.
 */
data class ChildStack<out C : Any, out T : Any>(
    val active: Child.Created<C, T>,
    val backStack: List<Child.Created<C, T>> = emptyList(),
) {

    /**
     * Creates [ChildStack] with only one child with the specified [configuration] and [instance].
     */
    constructor(configuration: C, instance: T) : this(
        active = Child.Created(
            configuration = configuration,
            instance = instance
        ),
    )

    /**
     * Returns the full stack of component configurations, ordered from tail to head.
     */
    val items: List<Child.Created<C, T>> =
        GettingList(size = backStack.size + 1) { index ->
            backStack.getOrNull(index) ?: active
        }
}
