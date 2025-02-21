package com.arkivanov.decompose.extensions.compose.lazyitems

import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListScope
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.router.lazyitems.ChildLazyItems
import com.arkivanov.decompose.router.lazyitems.LazyItems.ActiveLifecycleState

@Composable
fun <C : Any, T : Any> ChildLazyItems(
    list: ChildLazyItems<C, T>,
    modifier: Modifier = Modifier,
    lazyList: LazyItemsRenderer = defaultLazyColumn(),
    key: ((C) -> Any)? = null,
    content: @Composable (C, T) -> Unit,
) {
    val listState by list.state.subscribeAsState()
    val state = rememberLazyListState()

    lazyList(modifier, state) {
        items(items = listState.items, key = key) { item ->
            content(item, list[item])
        }
    }

    val visibleItemsInfo = state.layoutInfo.visibleItemsInfo
    val items = listState.items

    val visibleItems: Map<C, ActiveLifecycleState> =
        remember(visibleItemsInfo, items) {
            if (visibleItemsInfo.isEmpty()) {
                return@remember emptyMap()
            }

            val firstIndex = visibleItemsInfo.first().index
            val lastIndex = visibleItemsInfo.last().index

            buildMap {
                for (i in firstIndex - 3..lastIndex + 3) {
                    val cfg = items.getOrNull(i) ?: continue
                    put(cfg, if (i in firstIndex..lastIndex) ActiveLifecycleState.RESUMED else ActiveLifecycleState.CREATED)
                }
            }
        }

    DisposableEffect(visibleItems) {
        list.setActiveItems(visibleItems)
        onDispose {}
    }
}

fun defaultLazyColumn(): LazyItemsRenderer =
    { modifier, state, content ->
        LazyColumn(
            modifier = modifier,
            state = state,
            content = content,
        )
    }

fun defaultLazyRow(): LazyItemsRenderer =
    { modifier, state, content ->
        LazyRow(
            modifier = modifier,
            state = state,
            content = content,
        )
    }

private typealias LazyItemsRenderer =
    @Composable (
        Modifier,
        LazyListState,
        content: LazyListScope.() -> Unit,
    ) -> Unit
