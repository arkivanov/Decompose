package com.arkivanov.dynamicfeatures.app

import androidx.compose.desktop.DesktopTheme
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.extensions.compose.jetbrains.lifecycle.LifecycleController
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.sample.dynamicfeatures.shared.root.RootComponent
import com.arkivanov.sample.dynamicfeatures.shared.root.RootContent
import com.arkivanov.sample.dynamicfeatures.shared.root.featureinstaller.DefaultFeatureInstaller

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    val lifecycle = LifecycleRegistry()
    val root =
        RootComponent(
            componentContext = DefaultComponentContext(lifecycle),
            featureInstaller = DefaultFeatureInstaller(),
        )

    application {
        val windowState = rememberWindowState()

        LifecycleController(lifecycle, windowState)

        Window(
            onCloseRequest = ::exitApplication,
            state = windowState,
            title = "Decompose Dynamic Features"
        ) {
            Surface(modifier = Modifier.fillMaxSize()) {
                MaterialTheme {
                    DesktopTheme {
                        RootContent(root = root, modifier = Modifier.fillMaxSize())
                    }
                }
            }
        }
    }
}
