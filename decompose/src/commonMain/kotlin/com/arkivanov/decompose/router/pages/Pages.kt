package com.arkivanov.decompose.router.pages

import kotlinx.serialization.Serializable

/**
 * Represents a state of Child Pages navigation model.
 *
 * @param items a list of child configurations, can be empty. Must be unique
 * unless duplicate configurations were enabled, see
 * [com.arkivanov.decompose.DecomposeSettings.duplicateConfigurationsEnabled].
 * @param selectedIndex an index of the selected child configuration.
 * Must be within the range of [items] indices if [items] is not empty, otherwise can be any number.
 */
@Serializable
data class Pages<out C : Any>(
    val items: List<C>,
    val selectedIndex: Int,
) {

    /**
     * Creates empty [Pages].
     */
    constructor() : this(items = emptyList(), selectedIndex = -1)

    init {
        if (items.isNotEmpty()) {
            require(selectedIndex in items.indices) {
                "The selectedIndex argument must be with the range: ${items.indices}. Actual: $selectedIndex."
            }
        }
    }
}
