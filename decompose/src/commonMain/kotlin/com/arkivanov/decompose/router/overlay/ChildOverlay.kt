package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Child

/**
 * A state holder for `Child Overlay`.
 */
data class ChildOverlay<out C : Any, out T : Any>(
    val overlay: Child.Created<C, T>? = null,
)
