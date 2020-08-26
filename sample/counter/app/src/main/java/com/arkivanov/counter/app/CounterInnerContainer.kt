package com.arkivanov.counter.app

import android.os.Parcelable
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Box
import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Button
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.router
import kotlinx.android.parcel.Parcelize

class CounterInnerContainer(
    componentContext: ComponentContext,
    index: Int
) : Component, ComponentContext by componentContext {


    private val counter = Counter(componentContext, index = index)

    private val leftRouter =
        router(
            initialConfiguration = Configuration.Child(index = 0),
            key = "LeftRouter",
            componentFactory = ::resolveChild
        )

    private val rightRouter =
        router(
            initialConfiguration = Configuration.Child(index = 0),
            key = "RightRouter",
            componentFactory = ::resolveChild
        )

    private fun resolveChild(configuration: Configuration, componentContext: ComponentContext): Component =
        when (configuration) {
            is Configuration.Child -> Counter(componentContext, index = configuration.index)
        }

    @Composable
    override fun content() {
        Box(border = BorderStroke(width = 1.dp, color = Color.Black)) {
            Column(
                verticalArrangement = Arrangement.Center,
                horizontalGravity = Alignment.CenterHorizontally,
                modifier = Modifier.padding(16.dp)
            ) {
                counter.content()

                Spacer(modifier = Modifier.height(16.dp))

                Row {
                    Child(leftRouter)

                    Spacer(modifier = Modifier.width(16.dp))

                    Child(rightRouter)
                }
            }
        }
    }

    @Composable
    private fun Child(router: Router<Configuration.Child>) {
        Column {
            Button(onClick = { router.pushNextChild() }) {
                Text(text = "Next Counter")
            }

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = router::pop, enabled = router.stackSize > 1) {
                Text(text = "Prev Counter")
            }

            Spacer(modifier = Modifier.height(16.dp))

            router.content()
        }
    }

    private fun Router<Configuration.Child>.pushNextChild() {
        push(Configuration.Child(index = stackSize))
    }

    private sealed class Configuration : Parcelable {
        @Parcelize
        data class Child(val index: Int) : Configuration()
    }
}
