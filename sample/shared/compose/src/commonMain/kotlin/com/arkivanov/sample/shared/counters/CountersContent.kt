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
import com.arkivanov.decompose.extensions.compose.stack.ChildStack
import com.arkivanov.decompose.extensions.compose.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
import com.arkivanov.sample.shared.counters.counter.CounterContent
import com.arkivanov.sample.shared.utils.TopAppBar
import com.arkivanov.sample.shared.utils.WebDocumentTitle

@Composable
internal fun CountersContent(component: CountersComponent, modifier: Modifier = Modifier) {
    WebDocumentTitle(title = "Counters")

    Column(modifier = modifier) {
        TopAppBar(title = "Counters")

        ChildStack(
            stack = component.stack,
            modifier = Modifier.fillMaxSize().consumeWindowInsets(WindowInsets.statusBars),
            animation = stackAnimation(
                animator = fade() + scale(),
                predictiveBackParams = {
                    PredictiveBackParams(
                        backHandler = component.backHandler,
                        onBack = component::onBackClicked,
                        animatable = ::materialPredictiveBackAnimatable,
                    )
                },
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
