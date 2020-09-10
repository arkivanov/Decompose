package com.arkivanov.sample.counter.shared

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Box
import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.invoke
import com.arkivanov.sample.counter.shared.root.CounterRootContainer

@Composable
operator fun CounterRootContainer.Model.invoke() {
    Box(border = BorderStroke(width = 1.dp, color = Color.Black)) {
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalGravity = Alignment.CenterHorizontally,
            modifier = Modifier.padding(16.dp)
        ) {
            counter()

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = ::onNextChild) {
                Text(text = "Next Child")
            }

            Spacer(modifier = Modifier.height(16.dp))

            child { child ->
                child.inner()
            }
        }
    }
}
