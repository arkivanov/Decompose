package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState

/**
 * A convenience method for [ItemsNavigator.navigate].
 */
@ExperimentalDecomposeApi
fun <C : Any> ItemsNavigator<C>.navigate(transformer: (Items<C>) -> Items<C>) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

/**
 * Replaces the items with the provided list.
 *
 * @param items a transformer function from the current item list to a new one.
 * See [Items.items].
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
inline fun <C : Any> ItemsNavigator<C>.setItems(
    crossinline items: (List<C>) -> List<C>,
    crossinline onComplete: (newItems: Items<C>, oldItems: Items<C>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { oldItems ->
            val newItems = items(oldItems.items)
            oldItems.copy(
                items = newItems,
                activeItems = oldItems.activeItems.toMutableMap().apply { keys.retainAll(newItems.toSet()) },
            )
        },
        onComplete = { newItems, oldItems -> onComplete(newItems, oldItems) },
    )
}

/**
 * Replaces the items with the provided list.
 *
 * @param items a transformer function from the current item list to a new one.
 * See [Items.items].
 */
@ExperimentalDecomposeApi
fun <C : Any> ItemsNavigator<C>.setItems(items: (List<C>) -> List<C>) {
    setItems(items = items, onComplete = { _, _ -> })
}

/**
 * Sets the currently instantiated (active) items with the provided lifecycle states.
 * See [ActiveLifecycleState].
 *
 * @param activeItems a transformer function from the currently active items map to a new one.
 * See [Items.activeItems].
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
inline fun <C : Any> ItemsNavigator<C>.setActiveItems(
    crossinline activeItems: (Map<C, ActiveLifecycleState>) -> Map<C, ActiveLifecycleState>,
    crossinline onComplete: (newItems: Items<C>, oldItems: Items<C>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(activeItems = activeItems(it.activeItems)) },
        onComplete = { newItems, oldItems -> onComplete(newItems, oldItems) },
    )
}

/**
 * Sets the currently instantiated (active) items with the provided lifecycle states.
 * See [ActiveLifecycleState].
 *
 * @param activeItems a transformer function from the currently active items map to a new one.
 * See [Items.activeItems].
 */
@ExperimentalDecomposeApi
inline fun <C : Any> ItemsNavigator<C>.setActiveItems(
    crossinline activeItems: (Map<C, ActiveLifecycleState>) -> Map<C, ActiveLifecycleState>,
) {
    setActiveItems(activeItems = activeItems, onComplete = { _, _ -> })
}
