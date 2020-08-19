package com.arkivanov.decompose

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.lifecycle.Lifecycle

@Composable
fun Component(factory: (Lifecycle) -> Component) {
    val lifecycle = lifecycle()
    val component = remember { factory(lifecycle) }
    component.content()
}
