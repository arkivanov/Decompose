package com.arkivanov.sample.counter.shared.ui.compose

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.Children
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.childAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.slide
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.root.CounterRoot

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun CounterRootUi(counterRoot: CounterRoot) {
    Column(
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier
            .border(BorderStroke(width = 1.dp, color = Color.Black))
            .clipToBounds()
    ) {
        Spacer(modifier = Modifier.height(16.dp))

        CounterUi(counterRoot.counter)

        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = counterRoot::onNextChild) {
            Text(text = "Next Child")
        }

        Children(routerState = counterRoot.routerState, animation = childAnimation(slide())) {
            CounterInnerUi(it.instance.inner)
        }
    }
}

@Preview(showBackground = true)
@Composable
fun CounterRootUiPreview() {
    CounterRootUi(CounterRootPreview())
}

class CounterRootPreview : CounterRoot {
    override val counter: Counter = CounterPreview()

    override val routerState: Value<RouterState<*, CounterRoot.Child>> =
        MutableValue(
            RouterState(
                configuration = Unit,
                instance = CounterRoot.Child(
                    inner = CounterInnerPreview(),
                    isBackEnabled = true
                )
            )
        )

    override fun onNextChild() {}
    override fun onPrevChild() {}
}
