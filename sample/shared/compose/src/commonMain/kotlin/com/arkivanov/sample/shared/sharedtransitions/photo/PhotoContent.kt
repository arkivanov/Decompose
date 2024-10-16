package com.arkivanov.sample.shared.sharedtransitions.photo

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.animation.ExperimentalSharedTransitionApi
import androidx.compose.animation.SharedTransitionLayout
import androidx.compose.animation.SharedTransitionScope
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import com.arkivanov.sample.shared.painterResource
import com.arkivanov.sample.shared.utils.TopAppBar

@OptIn(ExperimentalSharedTransitionApi::class)
@Composable
internal fun SharedTransitionScope.PhotoContent(
    component: PhotoComponent,
    animatedVisibilityScope: AnimatedVisibilityScope,
    modifier: Modifier = Modifier,
) {
    Column(modifier = modifier) {
        TopAppBar(title = "Photo ${component.image.id}", onCloseClick = component::onCloseClicked)

        Image(
            painter = painterResource(component.image.resourceId),
            contentDescription = null,
            modifier = Modifier
                .sharedBounds(
                    sharedContentState = rememberSharedContentState(key = component.image.id),
                    animatedVisibilityScope = animatedVisibilityScope,
                    renderInOverlayDuringTransition = false,
                )
                .fillMaxWidth()
                .weight(1F)
                .background(Color.Black),
            contentScale = ContentScale.Crop,
        )
    }
}

@OptIn(ExperimentalSharedTransitionApi::class)
@Preview
@Composable
internal fun PhotoContentPreview() {
    SharedTransitionLayout {
        AnimatedVisibility(visible = true) {
            PhotoContent(
                component = PreviewPhotoComponent(),
                animatedVisibilityScope = this,
                modifier = Modifier.fillMaxSize(),
            )
        }
    }
}
