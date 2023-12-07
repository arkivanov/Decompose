package com.arkivanov.sample.shared.dynamicfeatures

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature1Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature2Child
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent
import com.arkivanov.sample.shared.dynamicfeatures.feature1.feature1Content
import com.arkivanov.sample.shared.dynamicfeatures.feature2.feature2Content

@Composable
internal fun DynamicFeaturesContent(component: DynamicFeaturesComponent, modifier: Modifier = Modifier) {
    Children(
        stack = component.childStack,
        modifier = modifier,
        animation = stackAnimation(fade()),
    ) {
        when (val child = it.instance) {
            is Feature1Child ->
                DynamicFeatureContent(
                    component = child.feature1,
                    modifier = Modifier.fillMaxSize(),
                    contentSupplier = ::feature1Content,
                )

            is Feature2Child ->
                DynamicFeatureContent(
                    component = child.feature2,
                    modifier = Modifier.fillMaxSize(),
                    contentSupplier = ::feature2Content,
                )
        }.let {}
    }
}
