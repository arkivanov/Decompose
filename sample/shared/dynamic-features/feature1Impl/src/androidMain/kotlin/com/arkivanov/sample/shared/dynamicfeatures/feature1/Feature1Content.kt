package com.arkivanov.sample.shared.dynamicfeatures.feature1

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatureContent

class Feature1Content : DynamicFeatureContent<Feature1> {

    @Suppress("ComposableNaming")
    @Composable
    override fun invoke(component: Feature1, modifier: Modifier) {
        val model by component.models.subscribeAsState()

        Column(
            modifier = modifier,
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(text = model.title)

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = component::onFeature2Clicked) {
                Text("Go to Feature2")
            }
        }
    }
}
