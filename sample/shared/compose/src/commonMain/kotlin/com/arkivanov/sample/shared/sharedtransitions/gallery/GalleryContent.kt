package com.arkivanov.sample.shared.sharedtransitions.gallery

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.animation.ExperimentalSharedTransitionApi
import androidx.compose.animation.SharedTransitionLayout
import androidx.compose.animation.SharedTransitionScope
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import com.arkivanov.sample.shared.painterResource
import com.arkivanov.sample.shared.utils.TopAppBar
import com.arkivanov.sample.shared.utils.WebDocumentTitle

@OptIn(ExperimentalSharedTransitionApi::class)
@Composable
internal fun SharedTransitionScope.GalleryContent(
    component: GalleryComponent,
    animatedVisibilityScope: AnimatedVisibilityScope,
    modifier: Modifier = Modifier,
) {
    WebDocumentTitle(title = "Shared Transitions Gallery")

    Column(modifier = modifier) {
        TopAppBar(title = "Photo Gallery", onCloseClick = component::onCloseClicked)

        LazyVerticalGrid(
            columns = GridCells.Adaptive(minSize = 128.dp),
            modifier = Modifier.fillMaxWidth().weight(1F),
        ) {
            itemsIndexed(items = component.images) { index, image ->
                Image(
                    painter = painterResource(image.resourceId),
                    contentDescription = null,
                    modifier = Modifier
                        .aspectRatio(1F)
                        .sharedBounds(
                            sharedContentState = rememberSharedContentState(key = image.id),
                            animatedVisibilityScope = animatedVisibilityScope,
                        )
                        .clickable { component.onImageClicked(index = index) },
                    contentScale = ContentScale.Crop,
                )
            }
        }
    }
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
