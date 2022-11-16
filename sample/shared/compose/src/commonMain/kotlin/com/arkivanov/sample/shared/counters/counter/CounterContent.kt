package com.arkivanov.sample.shared.counters.counter

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
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
import com.arkivanov.decompose.router.overlay.ChildOverlay
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.arkivanov.sample.shared.dialog.DialogContent

@Composable
internal fun CounterContent(component: CounterComponent, modifier: Modifier = Modifier) {
    val model by component.model.subscribeAsState()

    Column(
        modifier = modifier
            .border(BorderStroke(width = 1.dp, color = Color.Black))
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = model.title,
            style = MaterialTheme.typography.h5,
        )

        Spacer(modifier = Modifier.height(8.dp))

        Text(text = model.text)

        Spacer(modifier = Modifier.height(8.dp))

        Button(onClick = component::onInfoClicked) {
            Text(text = "Info")
        }

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

    val dialogOverlay by component.dialogOverlay.subscribeAsState()
    dialogOverlay.overlay?.instance?.also {
        DialogContent(dialogComponent = it)
    }
}

@Preview
@Composable
internal fun CounterContentPreview() {
    CounterContent(component = PreviewCounterComponent())
}

internal class PreviewCounterComponent : CounterComponent {
    override val model: Value<Model> =
        MutableValue(
            Model(
                title = "Counter 0",
                text = "123",
                isBackEnabled = false,
            )
        )

    override val dialogOverlay: Value<ChildOverlay<*, DialogComponent>> =
        MutableValue(ChildOverlay<Unit, DialogComponent>())

    override fun onNextClicked() {}
    override fun onPrevClicked() {}
    override fun onInfoClicked() {}
}
