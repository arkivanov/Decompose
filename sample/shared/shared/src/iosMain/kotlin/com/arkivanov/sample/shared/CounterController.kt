package com.arkivanov.sample.shared

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.ComposeUIViewController
import com.arkivanov.sample.shared.counters.counter.CounterComponent

fun CounterController(
    component: CounterComponent
) = ComposeUIViewController {
    Row(modifier = Modifier.fillMaxSize(), verticalAlignment = Alignment.CenterVertically) {
        Button({ component.onNextClicked() }) {
            Text("Next")
        }
        Button({ component.onPrevClicked() }) {
            Text("Prev")
        }
    }
}
