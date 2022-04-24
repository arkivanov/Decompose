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
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.essenty.lifecycle.essentyLifecycle
import com.arkivanov.sample.counter.shared.root.CounterRoot
import com.arkivanov.sample.counter.shared.root.CounterRootComponent
import com.arkivanov.sample.counter.uiandroid.CounterRootView
import com.arkivanov.sample.counter.uicompose.CounterRootUi

class MainActivity : AppCompatActivity() {

    private val mode = Mode.COMPOSE

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root = CounterRootComponent(defaultComponentContext())

        when (mode) {
            Mode.COMPOSE -> drawViaCompose(root)
            Mode.VIEWS -> drawViaViews(root)
        }.let {}
    }

    private fun drawViaCompose(root: CounterRoot) {
        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        CounterRootUi(root)
                    }
                }
            }
        }
    }

    @OptIn(ExperimentalDecomposeApi::class)
    private fun drawViaViews(root: CounterRoot) {
        setContentView(R.layout.main_activity)

        val viewContext =
            DefaultViewContext(
                parent = findViewById(R.id.content),
                lifecycle = essentyLifecycle()
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
