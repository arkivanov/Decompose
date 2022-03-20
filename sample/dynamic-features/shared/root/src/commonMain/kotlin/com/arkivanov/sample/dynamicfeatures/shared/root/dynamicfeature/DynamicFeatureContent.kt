package com.arkivanov.sample.dynamicfeatures.shared.root.dynamicfeature

import androidx.compose.foundation.layout.Box
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.childAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.fade
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.plus
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.scale

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun <T : Any> DynamicFeatureContent(
    dynamicFeature: DynamicFeature<T>,
    modifier: Modifier = Modifier,
    content: @Composable (T) -> Unit
) {
    Children(routerState = dynamicFeature.routerState, animation = childAnimation(scale() + fade())) {
        when (val child = it.instance) {
            is DynamicFeature.Child.Loading -> Loading(name = child.name, modifier = modifier)
            is DynamicFeature.Child.Feature -> content(child.feature)
            is DynamicFeature.Child.Error -> Error(name = child.name, modifier = modifier)
        }.let {}
    }
}

@Composable
private fun Loading(name: String, modifier: Modifier) {
    Box(modifier = modifier, contentAlignment = Alignment.Center) {
        Text(text = "Loading $name...")
    }
}

@Composable
private fun Error(name: String, modifier: Modifier) {
    Box(modifier = modifier, contentAlignment = Alignment.Center) {
        Text(text = "Error loading $name...")
    }
}
