package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import kotlinx.serialization.Serializable

/**
 * Represents a state of Child Items navigation model.
 *
 * @param items a list of child configurations, can be empty. Must be unique.
 * @param activeItems a map of lifecycle states of the instantiated (active) components.
 * Child components whose configurations are not present in this map are destroyed.
 * Configurations in the map should also be present in the [items] list,
 * otherwise the behavior is undefined.
 * See [ActiveLifecycleState].
 */
@ExperimentalDecomposeApi
@Serializable
data class Items<C : Any>(
    val items: List<C> = emptyList(),
    val activeItems: Map<C, ActiveLifecycleState> = emptyMap(),
) {
    enum class ActiveLifecycleState {
        CREATED,
        STARTED,
        RESUMED,
    }
}
