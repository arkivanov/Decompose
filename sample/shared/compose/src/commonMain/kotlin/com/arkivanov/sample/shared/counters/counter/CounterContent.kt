@file:Suppress("OPTIONAL_DECLARATION_USAGE_IN_NON_COMMON_SOURCE") // Workaround for KTIJ-22326

package com.arkivanov.sample.shared.counters.counter

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.Typography
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.dialog.DialogContent

@Composable
internal fun CounterContent(component: CounterComponent, modifier: Modifier = Modifier) {
    val model by component.model.subscribeAsState()

    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = model.title,
            modifier = Modifier.testTag("title"),
            style = MaterialTheme.typography.h6,
        )

        Spacer(modifier = Modifier.height(16.dp))

        Text(
            text = model.text,
            modifier = Modifier.testTag("text"),
            style = MaterialTheme.typography.body1,
        )

        Spacer(modifier = Modifier.height(8.dp))

        Button(onClick = component::onInfoClicked) {
            Text(text = "Info")
        }

        Button(
            onClick = component::onNextClicked,
            modifier = Modifier.testTag("next"),
        ) {
            Text(text = "Next")
        }

        Button(
            onClick = component::onPrevClicked,
            modifier = Modifier.testTag("prev"),
            enabled = model.isBackEnabled,
        ) {
            Text(text = "Prev")
        }
    }

    val dialogSlot by component.dialogSlot.subscribeAsState()
    dialogSlot.child?.instance?.also {
        DialogContent(dialogComponent = it)
    }
}

@Preview
@Composable
internal fun CounterContentPreview() {
    CounterContent(component = PreviewCounterComponent())
}
