package com.arkivanov.counter.app

import android.os.Parcelable
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Box
import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router
import kotlinx.android.parcel.Parcelize

class CounterRootContainer(
    componentContext: ComponentContext
) : Component, ComponentContext by componentContext {

    private val counter = Counter(componentContext, index = 0)

    private val router =
        router(
            initialConfiguration = Configuration.Child(index = 0),
            handleBackButton = true,
            componentFactory = ::resolveChild
        )

    private fun resolveChild(configuration: Configuration, componentContext: ComponentContext): Component =
        when (configuration) {
            is Configuration.Child -> CounterInnerContainer(componentContext, index = configuration.index)
        }

    @Composable
    override fun content() {
        Box(border = BorderStroke(width = 1.dp, color = Color.Black)) {
            Column(
                verticalArrangement = Arrangement.Center,
                horizontalGravity = Alignment.CenterHorizontally,
                modifier = Modifier.padding(16.dp)
            ) {
                val routerState = router.state.value

                counter.content()

                Spacer(modifier = Modifier.height(16.dp))

                Button(onClick = { nextChild(index = routerState.stack.size) }) {
                    Text(text = "Next Counter")
                }

                Spacer(modifier = Modifier.height(16.dp))

                routerState.activeComponent.content()
            }
        }
    }

    private fun nextChild(index: Int) {
        router.push(Configuration.Child(index = index))
    }

    private sealed class Configuration : Parcelable {
        @Parcelize
        data class Child(val index: Int) : Configuration()
    }
}
