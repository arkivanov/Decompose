package com.arkivanov.sample.shared.sharedtransitions

import androidx.compose.animation.ExperimentalSharedTransitionApi
import androidx.compose.animation.SharedTransitionLayout
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child.GalleryChild
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child.PhotoChild
import com.arkivanov.sample.shared.sharedtransitions.gallery.GalleryContent
import com.arkivanov.sample.shared.sharedtransitions.photo.PhotoContent

@OptIn(ExperimentalSharedTransitionApi::class)
@Composable
internal fun SharedTransitionsContent(
    component: SharedTransitionsComponent,
    modifier: Modifier = Modifier,
) {
    val stack by component.stack.subscribeAsState()

    SharedTransitionLayout(modifier = modifier) {
        Children(
            stack = component.stack,
            modifier = Modifier.fillMaxSize().background(Color.Black),
            animation = stackAnimation(fade() + scale()),
        ) {
            when (val child = it.instance) {
                is GalleryChild ->
                    GalleryContent(
                        component = child.component,
                        isVisible = stack.active.instance is GalleryChild,
                        modifier = Modifier.fillMaxSize(),
                    )

                is PhotoChild ->
                    PhotoContent(
                        component = child.component,
                        isVisible = stack.active.instance is PhotoChild,
                        modifier = Modifier.fillMaxSize(),
                    )
            }
        }
    }
}
