package com.arkivanov.sample.shared.dynamicfeatures

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.childAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.fade
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatures.Child.Feature1Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatures.Child.Feature2Child
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent
import com.arkivanov.sample.shared.dynamicfeatures.feature1.feature1Content
import com.arkivanov.sample.shared.dynamicfeatures.feature2.feature2Content

@OptIn(ExperimentalDecomposeApi::class)
@Composable
internal fun DynamicFeaturesContent(component: DynamicFeatures, modifier: Modifier = Modifier) {
    Children(
        routerState = component.routerState,
        modifier = modifier,
        animation = childAnimation(fade()),
    ) {
        when (val child = it.instance) {
            is Feature1Child ->
                DynamicFeatureContent(
                    dynamicFeature = child.feature1,
                    modifier = Modifier.fillMaxSize(),
                    contentSupplier = ::feature1Content,
                )

            is Feature2Child ->
                DynamicFeatureContent(
                    dynamicFeature = child.feature2,
                    modifier = Modifier.fillMaxSize(),
                    contentSupplier = ::feature2Content,
                )
        }.let {}
    }
}
