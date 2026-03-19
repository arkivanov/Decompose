package com.arkivanov.sample.shared.root

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
import com.arkivanov.sample.shared.customnavigation.CustomNavigationContent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesContent
import com.arkivanov.sample.shared.pages.PagesContent
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.SharedTransitionsChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsContent
import com.arkivanov.sample.shared.tabs.TabsContent

@Composable
fun RootContent(component: RootComponent, modifier: Modifier = Modifier) {
    MaterialTheme {
        Children(
            component = component,
            modifier = modifier,
        )
    }
}

@OptIn(ExperimentalDecomposeApi::class)
@Composable
private fun Children(component: RootComponent, modifier: Modifier = Modifier) {
    ChildStack(
        stack = component.stack,
        modifier = Modifier.fillMaxSize().background(Color.Black),
        animation = stackAnimation(
            animator = fade() + scale(),
            predictiveBackParams = {
                PredictiveBackParams(
                    backHandler = component.backHandler,
                    onBack = component::onBackClicked,
                    animatable = ::materialPredictiveBackAnimatable,
                )
            },
        ),
    ) {
        Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
            when (val child = it.instance) {
                is TabsChild -> TabsContent(component = child.component, modifier = Modifier.fillMaxSize())
                is DynamicFeaturesChild -> DynamicFeaturesContent(component = child.component, modifier = Modifier.fillMaxSize())
                is CustomNavigationChild -> CustomNavigationContent(component = child.component, modifier = Modifier.fillMaxSize())
                is PagesChild -> PagesContent(component = child.component, modifier = Modifier.fillMaxSize())
                is SharedTransitionsChild -> SharedTransitionsContent(component = child.component, modifier = Modifier.fillMaxSize())
            }
        }
    }
}

@Preview
@Composable
internal fun RootContentPreview() {
    RootContent(PreviewRootComponent())
}
