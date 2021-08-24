package com.arkivanov.sample.dynamicfeatures.shared.feature1

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.value.getValue

class Feature1ContentImpl : Feature1Content {

    @Composable
    override fun Content(feature1: Feature1, modifier: Modifier) {
        val model by feature1.models

        Column(
            modifier = modifier,
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(text = model.title)

            Spacer(modifier = Modifier.height(16.dp))

            Text(text = model.text)

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = feature1::onFeature2Clicked) {
                Text("Go to Feature2")
            }

            Spacer(modifier = Modifier.height(8.dp))

            Button(onClick = feature1::onCloseClicked) {
                Text("Close")
            }
        }
    }
}
