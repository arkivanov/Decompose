package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.JsExportCompat

/**
 * A state holder for `Child Slot`.
 */
@JsExportCompat
data class ChildSlot<out C : Any, out T : Any>(
    val child: Child.Created<C, T>? = null,
)
