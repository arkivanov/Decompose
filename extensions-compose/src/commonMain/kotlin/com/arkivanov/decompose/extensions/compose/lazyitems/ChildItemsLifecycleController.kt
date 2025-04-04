package com.arkivanov.decompose.extensions.compose.lazyitems

import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.grid.LazyGridState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.router.items.LazyChildItems
import com.arkivanov.decompose.router.items.setActiveItems


/**
 * Controls the lifecycle states of child items (components) in a lazy list
 * (e.g. `LazyColumn` or `LazyRow`).
 * The items within the viewport are moved to `RESUMED` state.
 * The items outside the viewport but within the preloading delta are moved to `CREATED` state.
 * The items outside the viewport and outside the preloading delta are destroyed.
 *
 * @param C A type of configuration associated with each child item (component).
 * @param items A lazy collection of items, see [LazyChildItems].
 * @param lazyListState The state of the lazy list, used to determine visible items. See [LazyListState].
 * @param itemIndexConverter A function to map screen indices to indices in the [items] collection.
 * Usually it should return the input value minus the number of header items (if there are any).
 * @param forwardPreloadCount The number of items to preload ahead of the viewport.
 * @param backwardPreloadCount The number of items to preload before the viewport.
 */
@ExperimentalDecomposeApi
@Composable
fun <C : Any> ChildItemsLifecycleController(
    items: LazyChildItems<C, *>,
    lazyListState: LazyListState,
    itemIndexConverter: (Int) -> Int,
    forwardPreloadCount: Int = 0,
    backwardPreloadCount: Int = 0,
) {
    val firstIndex by remember(lazyListState) {
        derivedStateOf {
            lazyListState.layoutInfo.visibleItemsInfo.firstOrNull()?.index ?: -1
        }
    }

    val lastIndex by remember(lazyListState) {
        derivedStateOf {
            lazyListState.layoutInfo.visibleItemsInfo.lastOrNull()?.index ?: -1
        }
    }

    ChildItemsLifecycleController(
        items = items,
        backwardPreloadCount = backwardPreloadCount,
        forwardPreloadCount = forwardPreloadCount,
        itemIndexConverter = itemIndexConverter,
        firstIndex = firstIndex,
        lastIndex = lastIndex,
    )
}

/**
 * Controls the lifecycle states of child items (components) in a lazy grid
 * (e.g. `LazyVerticalGrid` or `LazyHorizontalGrid`).
 * The items within the viewport are moved to `RESUMED` state.
 * The items outside the viewport but within the preloading delta are moved to `CREATED` state.
 * The items outside the viewport and outside the preloading delta are destroyed.
 *
 * @param C A type of configuration associated with each child item (component).
 * @param items A lazy collection of items, see [LazyChildItems].
 * @param lazyGridState The state of the lazy grid, used to determine visible items. See [LazyGridState].
 * @param itemIndexConverter A function to map screen indices to indices in the [items] collection.
 * Usually it should return the input value minus the number of header items (if there are any).
 * @param forwardPreloadCount The number of items to preload ahead of the viewport.
 * @param backwardPreloadCount The number of items to preload before the viewport.
 */
@ExperimentalDecomposeApi
@Composable
fun <C : Any> ChildItemsLifecycleController(
    items: LazyChildItems<C, *>,
    lazyGridState: LazyGridState,
    itemIndexConverter: (Int) -> Int,
    forwardPreloadCount: Int = 0,
    backwardPreloadCount: Int = 0,
) {
    val firstIndex by remember(lazyGridState) {
        derivedStateOf {
            lazyGridState.layoutInfo.visibleItemsInfo.firstOrNull()?.index ?: -1
        }
    }

    val lastIndex by remember(lazyGridState) {
        derivedStateOf {
            lazyGridState.layoutInfo.visibleItemsInfo.lastOrNull()?.index ?: -1
        }
    }

    ChildItemsLifecycleController(
        items = items,
        backwardPreloadCount = backwardPreloadCount,
        forwardPreloadCount = forwardPreloadCount,
        itemIndexConverter = itemIndexConverter,
        firstIndex = firstIndex,
        lastIndex = lastIndex,
    )
}

@ExperimentalDecomposeApi
@Composable
private fun <C : Any> ChildItemsLifecycleController(
    items: LazyChildItems<C, *>,
    backwardPreloadCount: Int,
    forwardPreloadCount: Int,
    itemIndexConverter: (Int) -> Int,
    firstIndex: Int,
    lastIndex: Int
) {
    val childItems by items.subscribeAsState()
    val configurations = childItems.items
    val itemIndexConverterRef by rememberUpdatedState(itemIndexConverter)

    DisposableEffect(items, configurations, backwardPreloadCount, backwardPreloadCount, firstIndex, lastIndex) {
        items.setActiveItems(
            buildMap {
                if ((firstIndex >= 0) && (lastIndex >= 0)) {
                    for (i in firstIndex - backwardPreloadCount.coerceAtLeast(0)..lastIndex + forwardPreloadCount.coerceAtLeast(0)) {
                        put(
                            configurations.getOrNull(itemIndexConverterRef(i)) ?: continue,
                            if (i in firstIndex..lastIndex) ActiveLifecycleState.RESUMED else ActiveLifecycleState.CREATED,
                        )
                    }
                }
            },
        )

        onDispose {}
    }
}
