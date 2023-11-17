@file:Suppress("OPTIONAL_DECLARATION_USAGE_IN_NON_COMMON_SOURCE") // Workaround for KTIJ-22326

package com.arkivanov.sample.shared.counters

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.predictiveBackAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation
import com.arkivanov.sample.shared.counters.counter.CounterContent

@Composable
internal fun CountersContent(component: CountersComponent, modifier: Modifier = Modifier) {
    Children(
        stack = component.childStack,
        modifier = modifier,
        animation = predictiveBackAnimation(
            backHandler = component.backHandler,
            // Workaround for https://issuetracker.google.com/issues/270656235
            animation = stackAnimation(fade() + scale()),
//            animation = stackAnimation { _, _, direction ->
//                if (direction.isFront) {
//                    slide() + fade()
//                } else {
//                    scale(frontFactor = 1F, backFactor = 0.7F) + fade()
//                }
//            },
            onBack = component::onBackClicked,
        ),
    ) {
        CounterContent(
            component = it.instance,
            modifier = Modifier.fillMaxSize().background(MaterialTheme.colors.background),
        )
    }
}

@Preview
@Composable
internal fun CountersPreview() {
    CountersContent(component = PreviewCountersComponent())
}
