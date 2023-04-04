package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Child

/**
 * A state holder for `Child Overlay`.
 */
@Deprecated(
    message = "Please use Child Slot API",
    replaceWith = ReplaceWith(
        expression = "ChildSlot<C, T>",
        "com.arkivanov.decompose.router.slot.ChildSlot",
    ),
)
data class ChildOverlay<out C : Any, out T : Any>(
    val overlay: Child.Created<C, T>? = null,
)
