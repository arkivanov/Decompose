package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.ExportedDecomposeApi
import com.arkivanov.decompose.GettingList
import com.arkivanov.decompose.JsExportCompat
import kotlin.js.JsName

/**
 * A state holder for `Child Stack`.
 *
 * @param active the currently active (top) child of the stack.
 * @param backStack the back stack (inactive children), can be empty.
 */
@JsExportCompat
data class ChildStack<out C : Any, out T : Any>(
    val active: Child.Created<C, T>,
    val backStack: List<Child.Created<C, T>> = emptyList(),
) {

    @ExperimentalDecomposeApi
    @ExportedDecomposeApi
    val backStackArray: Array<out Child.Created<C, T>> by lazy { backStack.toTypedArray() }

    /**
     * Creates [ChildStack] with only one child with the specified [configuration] and [instance].
     */
    @JsName("create")
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

    @ExperimentalDecomposeApi
    @ExportedDecomposeApi
    val itemsArray: Array<out Child.Created<C, T>> by lazy { items.toTypedArray() }
}
