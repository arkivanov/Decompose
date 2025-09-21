package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState

/**
 * A state holder for Child Items.
 *
 * @param items a list of child configurations, can be empty.
 * @param activeItems a map of instantiated child components and their lifecycle states.
 * See [ActiveLifecycleState].
 */
@ExperimentalDecomposeApi
data class ChildItems<out C : Any, out T : Any>(
    val items: List<C> = emptyList(),
)

interface ChildConfiguration<out K> {

    val childKey: K
}
