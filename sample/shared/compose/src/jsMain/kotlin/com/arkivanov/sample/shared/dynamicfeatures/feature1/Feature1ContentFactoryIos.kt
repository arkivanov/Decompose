package com.arkivanov.sample.shared.dynamicfeatures.feature1

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatureContent

internal actual fun feature1Content(): DynamicFeatureContent<Feature1> =
    object : DynamicFeatureContent<Feature1> {
        @Composable
        override fun invoke(component: Feature1, modifier: Modifier) {
            Text(text = "Not implemented", modifier = modifier)
        }
    }
