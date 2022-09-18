package com.arkivanov.sample.shared.counters

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.slide
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.decompose.value.asRequired
import com.arkivanov.sample.shared.counters.counter.Counter
import com.arkivanov.sample.shared.counters.counter.CounterContent
import com.arkivanov.sample.shared.counters.counter.CounterPreview
import com.arkivanov.sample.shared.utils.Orientation
import com.arkivanov.sample.shared.utils.orientation

@OptIn(ExperimentalDecomposeApi::class)
@Composable
internal fun CountersContent(component: Counters, modifier: Modifier = Modifier) {
    ColumnOrRow(modifier = modifier) {
        Children(
            stack = component.firstChildStack,
            modifier = Modifier.clipToBounds(),
            animation = stackAnimation(slide()),
        ) {
            CounterContent(component = it.instance)
        }

        Children(
            stack = component.secondChildStack,
            modifier = Modifier.clipToBounds(),
            animation = stackAnimation(slide()),
        ) {
            CounterContent(component = it.instance)
        }
    }
}

@Composable
private fun ColumnOrRow(modifier: Modifier, content: @Composable () -> Unit) {
    when (orientation) {
        Orientation.PORTRAIT ->
            Column(
                modifier = modifier,
                verticalArrangement = Arrangement.SpaceEvenly,
                horizontalAlignment = Alignment.CenterHorizontally,
            ) { content() }

        Orientation.LANDSCAPE ->
            Row(
                modifier = modifier,
                horizontalArrangement = Arrangement.SpaceEvenly,
                verticalAlignment = Alignment.CenterVertically,
            ) { content() }
    }
}

@Preview
@Composable
internal fun TabContentPreview() {
    CountersContent(component = CountersPreview())
}

internal class CountersPreview : Counters {
    override val firstChildStack: ReqValue<ChildStack<*, Counter>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CounterPreview(),
            )
        ).asRequired()

    override val secondChildStack: ReqValue<ChildStack<*, Counter>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CounterPreview(),
            )
        ).asRequired()
}
