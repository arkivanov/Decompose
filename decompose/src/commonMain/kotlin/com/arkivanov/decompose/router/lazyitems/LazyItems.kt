package com.arkivanov.decompose.router.lazyitems

import kotlinx.serialization.Serializable

@Serializable
data class LazyItems<C : Any>(
    val items: List<C> = emptyList(),
    val activeItems: Map<C, ActiveLifecycleState> = emptyMap(), // TODO: Maybe use indices instead of C?
) {
    enum class ActiveLifecycleState {
        CREATED,
        STARTED,
        RESUMED,
    }
}
