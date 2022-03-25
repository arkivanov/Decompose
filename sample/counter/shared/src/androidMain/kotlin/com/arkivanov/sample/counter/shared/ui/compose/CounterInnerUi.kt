package com.arkivanov.sample.counter.shared.ui.compose

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.Children
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.childAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.slide
import com.arkivanov.decompose.extensions.compose.jetpack.subscribeAsState
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInner

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun CounterInnerUi(counterInner: CounterInner) {
    Box(
        modifier = Modifier
            .padding(16.dp)
            .border(BorderStroke(width = 1.dp, color = Color.Black))
    ) {
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(16.dp)
        ) {
            CounterUi(counterInner.counter)

            Spacer(modifier = Modifier.height(16.dp))

            Row {

                Column(
                    modifier = Modifier.clipToBounds(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    val activeChild = counterInner.leftRouterState.subscribeAsState().value.activeChild.instance

                    ChildButtons(
                        isBackEnabled = activeChild.isBackEnabled,
                        onNext = counterInner::onNextLeftChild,
                        onPrev = counterInner::onPrevLeftChild
                    )

                    Children(routerState = counterInner.leftRouterState, animation = childAnimation(slide())) {
                        CounterUi(it.instance.counter)
                    }
                }

                Spacer(modifier = Modifier.width(16.dp))

                Column(
                    modifier = Modifier.clipToBounds(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    val activeChild = counterInner.rightRouterState.subscribeAsState().value.activeChild.instance

                    ChildButtons(
                        isBackEnabled = activeChild.isBackEnabled,
                        onNext = counterInner::onNextRightChild,
                        onPrev = counterInner::onPrevRightChild
                    )

                    Children(routerState = counterInner.rightRouterState, animation = childAnimation(slide())) {
                        CounterUi(it.instance.counter)
                    }
                }
            }
        }
    }
}

@Composable
private fun ChildButtons(
    isBackEnabled: Boolean,
    onNext: () -> Unit,
    onPrev: () -> Unit
) {
    Column {
        Button(onClick = onNext) {
            Text(text = "Next Counter")
        }

        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = onPrev, enabled = isBackEnabled) {
            Text(text = "Prev Counter")
        }

        Spacer(modifier = Modifier.height(16.dp))
    }
}

@Preview(showBackground = true)
@Composable
fun CounterInnerUiPreview() {
    CounterInnerUi(CounterInnerPreview())
}

class CounterInnerPreview : CounterInner {
    override val counter: Counter = CounterPreview()

    override val leftRouterState: Value<RouterState<*, CounterInner.Child>> =
        MutableValue(
            RouterState(
                activeChild = Child.Created(
                    configuration = Unit,
                    instance = CounterInner.Child(
                        counter = CounterPreview(),
                        isBackEnabled = true
                    )
                )
            )
        )

    override val rightRouterState: Value<RouterState<*, CounterInner.Child>> =
        MutableValue(
            RouterState(
                configuration = Unit,
                instance = CounterInner.Child(
                    counter = CounterPreview(),
                    isBackEnabled = false
                )
            )
        )

    override fun onNextLeftChild() {}
    override fun onPrevLeftChild() {}
    override fun onNextRightChild() {}
    override fun onPrevRightChild() {}
}
