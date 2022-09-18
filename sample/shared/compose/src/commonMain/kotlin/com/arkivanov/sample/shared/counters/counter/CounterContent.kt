package com.arkivanov.sample.shared.counters.counter

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.decompose.value.asRequired
import com.arkivanov.sample.shared.counters.counter.Counter.Model

@Composable
internal fun CounterContent(component: Counter, modifier: Modifier = Modifier) {
    val model by component.model.subscribeAsState()

    Column(
        modifier = modifier
            .border(BorderStroke(width = 1.dp, color = Color.Black))
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = model.title,
            style = MaterialTheme.typography.h6,
        )

        Text(text = model.text)

        Button(onClick = component::onNextClicked) {
            Text(text = "Next")
        }

        Button(
            onClick = component::onPrevClicked,
            enabled = model.isBackEnabled,
        ) {
            Text(text = "Prev")
        }
    }
}

@Preview
@Composable
internal fun CounterContentPreview() {
    CounterContent(component = CounterPreview())
}

internal class CounterPreview : Counter {
    override val model: ReqValue<Model> =
        MutableValue(
            Model(
                title = "Counter 0",
                text = "123",
                isBackEnabled = false,
            )
        ).asRequired()

    override fun onNextClicked() {}
    override fun onPrevClicked() {}
}
