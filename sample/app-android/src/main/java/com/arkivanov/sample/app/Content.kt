@file:OptIn(ExperimentalSharedTransitionApi::class)

package com.arkivanov.sample.app

import androidx.compose.animation.ExperimentalSharedTransitionApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation

@Composable
fun GalleryContent(
    component: GalleryComponent,
) {
    LazyVerticalGrid(
        columns = GridCells.Adaptive(minSize = 128.dp),
        modifier = Modifier.fillMaxSize(),
    ) {
        items(items = component.images) { image ->
            AsyncImage(
                model = image.url,
                contentDescription = null,
                modifier = Modifier
                    .fillMaxWidth()
                    .aspectRatio(1F)
                    .clickable { component.onImageClicked(image) },
                contentScale = ContentScale.Crop,
            )
        }
    }
}

@Composable
fun ImageContent(
    component: ImageComponent,
) {
    AsyncImage(
        model = component.image.url,
        contentDescription = null,
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black),
        contentScale = ContentScale.Fit,
    )
}

@Composable
fun RootContent(
    component: RootComponent,
) {
    Children(
        stack = component.stack,
        modifier = Modifier.fillMaxSize(),
        animation = stackAnimation(fade() + scale()),
    ) {
        when (val child = it.instance) {
            is RootComponent.Child.Gallery -> GalleryContent(child.component)
            is RootComponent.Child.Image -> ImageContent(child.component)
        }
    }
}
