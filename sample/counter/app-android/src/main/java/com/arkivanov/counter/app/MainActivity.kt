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
import com.arkivanov.decompose.backpressed.toBackPressedDispatcher
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.decompose.extensions.compose.jetpack.rememberRootComponent
import com.arkivanov.decompose.instancekeeper.toInstanceKeeper
import com.arkivanov.decompose.lifecycle.asDecomposeLifecycle
import com.arkivanov.decompose.statekeeper.toStateKeeper
import com.arkivanov.sample.counter.shared.root.CounterRootContainer
import com.arkivanov.sample.counter.shared.ui.android.CounterRootView
import com.arkivanov.sample.counter.shared.ui.compose.invoke

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
                        rememberRootComponent(::CounterRootContainer).model()
                    }
                }
            }
        }
    }

    @OptIn(ExperimentalDecomposeApi::class)
    private fun drawViaViews() {
        setContentView(R.layout.main_activity)

        val lifecycle = lifecycle.asDecomposeLifecycle()

        val componentContext =
            DefaultComponentContext(
                lifecycle = lifecycle,
                stateKeeper = savedStateRegistry.toStateKeeper(),
                instanceKeeper = viewModelStore.toInstanceKeeper(),
                backPressedDispatcher = onBackPressedDispatcher.toBackPressedDispatcher()
            )

        val root = CounterRootContainer(componentContext)

        val viewContext =
            DefaultViewContext(
                parent = findViewById(R.id.content),
                lifecycle = lifecycle
            )

        viewContext.apply {
            child(parent) {
                CounterRootView(root.model)
            }
        }
    }

    private enum class Mode {
        COMPOSE, VIEWS
    }
}
