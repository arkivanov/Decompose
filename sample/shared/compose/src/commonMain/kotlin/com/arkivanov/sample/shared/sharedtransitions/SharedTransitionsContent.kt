package com.arkivanov.sample.shared.sharedtransitions

import androidx.compose.animation.ExperimentalSharedTransitionApi
import androidx.compose.animation.SharedTransitionLayout
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.arkivanov.decompose.extensions.compose.stack.ChildStack
import com.arkivanov.decompose.extensions.compose.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
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
    SharedTransitionLayout(modifier = modifier) {
        ChildStack(
            stack = component.stack,
            modifier = Modifier.fillMaxSize().background(Color.Black),
            animation = stackAnimation(
                animator = fade() + scale(),
                predictiveBackParams = {
                    PredictiveBackParams(
                        backHandler = component.backHandler,
                        onBack = component::onBack,
                        animatable = ::materialPredictiveBackAnimatable,
                    )
                },
            ),
        ) {
            when (val child = it.instance) {
                is GalleryChild ->
                    GalleryContent(
                        component = child.component,
                        animatedVisibilityScope = this,
                        modifier = Modifier.fillMaxSize(),
                    )

                is PhotoChild -> {
                    PhotoContent(
                        component = child.component,
                        animatedVisibilityScope = this,
                        modifier = Modifier.fillMaxSize(),
                    )
                }
            }
        }
    }
}
