package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.router.children.ChildNavState
import kotlinx.serialization.Serializable

@Serializable
data class LazyItems<C : Any>(
    val items: List<C> = emptyList(),
    val activeItems: Map<C, ChildNavState.Status> = emptyMap(),
)
