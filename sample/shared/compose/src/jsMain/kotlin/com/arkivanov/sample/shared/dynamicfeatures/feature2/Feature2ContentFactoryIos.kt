package com.arkivanov.sample.shared.dynamicfeatures.feature2

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatureContent

internal actual fun feature2Content(): DynamicFeatureContent<Feature2> =
    object : DynamicFeatureContent<Feature2> {
        @Composable
        override fun invoke(component: Feature2, modifier: Modifier) {
            Text(text = "Not implemented", modifier = modifier)
        }
    }
