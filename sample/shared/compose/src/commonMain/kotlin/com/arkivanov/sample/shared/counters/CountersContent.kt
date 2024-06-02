package com.arkivanov.sample.shared.counters

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.statusBars
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.predictiveBackAnimation
import com.arkivanov.decompose.extensions.compose.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
import com.arkivanov.sample.shared.counters.counter.CounterContent
import com.arkivanov.sample.shared.utils.TopAppBar

@OptIn(ExperimentalDecomposeApi::class)
@Composable
internal fun CountersContent(component: CountersComponent, modifier: Modifier = Modifier) {
    Column(modifier = modifier) {
        TopAppBar(title = "Counters")

        Children(
            stack = component.stack,
            modifier = Modifier.fillMaxSize().consumeWindowInsets(WindowInsets.statusBars),
            animation = predictiveBackAnimation(
                backHandler = component.backHandler,
                fallbackAnimation = stackAnimation(fade() + scale()),
                onBack = component::onBackClicked,
            ),
        ) {
            CounterContent(
                component = it.instance,
                modifier = Modifier.fillMaxSize().background(MaterialTheme.colors.background),
            )
        }
    }
}

@Preview
@Composable
internal fun CountersPreview() {
    CountersContent(component = PreviewCountersComponent())
}
