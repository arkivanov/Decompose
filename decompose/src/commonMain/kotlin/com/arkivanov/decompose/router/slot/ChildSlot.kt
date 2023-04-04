package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Child

/**
 * A state holder for `Child Slot`.
 */
data class ChildSlot<out C : Any, out T : Any>(
    val child: Child.Created<C, T>? = null,
)
