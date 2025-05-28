package com.arkivanov.sample.shared.sharedtransitions.gallery

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.animation.ExperimentalSharedTransitionApi
import androidx.compose.animation.SharedTransitionLayout
import androidx.compose.animation.SharedTransitionScope
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.lazyitems.ChildItemsLifecycleController
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.sharedtransitions.thumbnail.ThumbnailContent
import com.arkivanov.sample.shared.utils.TopAppBar
import com.arkivanov.sample.shared.utils.WebDocumentTitle

@OptIn(ExperimentalSharedTransitionApi::class, ExperimentalDecomposeApi::class)
@Composable
internal fun SharedTransitionScope.GalleryContent(
    component: GalleryComponent,
    animatedVisibilityScope: AnimatedVisibilityScope,
    modifier: Modifier = Modifier,
) {
    val childItems by component.items.subscribeAsState()
    val lazyGridState = rememberLazyGridState()

    WebDocumentTitle(title = "Shared Transitions Gallery")

    Column(modifier = modifier) {
        TopAppBar(title = "Photo Gallery", onCloseClick = component::onCloseClicked)

        LazyVerticalGrid(
            columns = GridCells.Adaptive(minSize = 128.dp),
            modifier = Modifier.fillMaxWidth().weight(1F),
            state = lazyGridState,
        ) {
            items(items = childItems.items, key = { it.id }) { image ->
                ThumbnailContent(
                    component = component.items[image],
                    animatedVisibilityScope = animatedVisibilityScope,
                )
            }
        }
    }

    ChildItemsLifecycleController(
        items = component.items,
        lazyGridState = lazyGridState,
        forwardPreloadCount = lazyGridState.layoutInfo.maxSpan,
        backwardPreloadCount = lazyGridState.layoutInfo.maxSpan,
        itemIndexConverter = { it },
    )
}

@OptIn(ExperimentalSharedTransitionApi::class)
@Preview
@Composable
internal fun GalleryContentPreview() {
    SharedTransitionLayout {
        AnimatedVisibility(visible = true) {
            GalleryContent(
                component = PreviewGalleryComponent(),
                animatedVisibilityScope = this,
                modifier = Modifier.fillMaxSize(),
            )
        }
    }
}
