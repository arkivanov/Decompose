package com.arkivanov.sample.dynamicfeatures.shared.feature2

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

class Feature2ContentImpl : Feature2Content {

    @Composable
    override fun Content(feature2: Feature2, modifier: Modifier) {
        val model by feature2.models

        Column(
            modifier = modifier,
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(text = model.text)

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = feature2::onCloseClicked) {
                Text("Close")
            }
        }
    }
}
