package com.arkivanov.sample.counter.shared

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Box
import androidx.compose.foundation.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.invoke
import com.arkivanov.sample.counter.shared.counter.Counter

@Composable
operator fun Counter.Model.invoke() {
    data { data ->
        Box(border = BorderStroke(width = 1.dp, color = Color.Black), padding = 16.dp) {
            Text(text = data.text)
        }
    }
}
