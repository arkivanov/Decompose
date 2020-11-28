package com.arkivanov.sample.counter.shared.ui.compose

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.jetpack.Children
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer

@Composable
operator fun CounterInnerContainer.Model.invoke() {
    Box(modifier = Modifier.border(BorderStroke(width = 1.dp, color = Color.Black))) {
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(16.dp)
        ) {
            counter()

            Spacer(modifier = Modifier.height(16.dp))

            Row {
                Children(leftChild) { child, _ ->
                    child(onNext = ::onNextLeftChild, onPrev = ::onPrevLeftChild)
                }

                Spacer(modifier = Modifier.width(16.dp))

                Children(rightChild) { child, _ ->
                    child(onNext = ::onNextRightChild, onPrev = ::onPrevRightChild)
                }
            }
        }
    }
}

@Composable
private operator fun CounterInnerContainer.Child.invoke(onNext: () -> Unit, onPrev: () -> Unit) {
    Column {
        Button(onClick = onNext) {
            Text(text = "Next Counter")
        }

        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = onPrev, enabled = isBackEnabled) {
            Text(text = "Prev Counter")
        }

        Spacer(modifier = Modifier.height(16.dp))

        counter()
    }
}
