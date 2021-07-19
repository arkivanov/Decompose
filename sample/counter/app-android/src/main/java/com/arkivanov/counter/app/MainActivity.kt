package com.arkivanov.counter.app

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.arkivanov.counter.app.ui.ComposeAppTheme
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.decompose.extensions.compose.jetpack.rememberRootComponent
import com.arkivanov.essenty.backpressed.backPressedDispatcher
import com.arkivanov.essenty.instancekeeper.instanceKeeper
import com.arkivanov.essenty.lifecycle.essentyLifecycle
import com.arkivanov.essenty.statekeeper.stateKeeper
import com.arkivanov.sample.counter.shared.root.CounterRootComponent
import com.arkivanov.sample.counter.shared.ui.android.CounterRootView
import com.arkivanov.sample.counter.shared.ui.compose.CounterRootUi

class MainActivity : AppCompatActivity() {

    private val mode = Mode.COMPOSE

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        when (mode) {
            Mode.COMPOSE -> drawViaCompose()
            Mode.VIEWS -> drawViaViews()
        }.let {}
    }

    private fun drawViaCompose() {
        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        val component = rememberRootComponent(::CounterRootComponent)
                        CounterRootUi(component)
                    }
                }
            }
        }
    }

    @OptIn(ExperimentalDecomposeApi::class)
    private fun drawViaViews() {
        setContentView(R.layout.main_activity)

        val lifecycle = essentyLifecycle()

        val componentContext =
            DefaultComponentContext(
                lifecycle = lifecycle,
                stateKeeper = stateKeeper(),
                instanceKeeper = instanceKeeper(),
                backPressedDispatcher = backPressedDispatcher()
            )

        val root = CounterRootComponent(componentContext)

        val viewContext =
            DefaultViewContext(
                parent = findViewById(R.id.content),
                lifecycle = lifecycle
            )

        viewContext.apply {
            child(parent) {
                CounterRootView(root)
            }
        }
    }

    private enum class Mode {
        COMPOSE, VIEWS
    }
}
