package com.arkivanov.masterdetail.app

import androidx.compose.desktop.DesktopTheme
import androidx.compose.desktop.Window
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.DisposableEffect
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.sample.masterdetail.composeui.root.RootUi
import com.arkivanov.sample.masterdetail.shared.root.RootComponent

fun main() {
    val lifecycle = LifecycleRegistry()
    val root = RootComponent(DefaultComponentContext(lifecycle))

    Window(title = "Decompose Master-Detail") {
        DisposableEffect(lifecycle) {
            lifecycle.resume()
            onDispose { lifecycle.destroy() }
        }

        Surface(modifier = Modifier.fillMaxSize()) {
            MaterialTheme {
                DesktopTheme {
                    RootUi(root)
                }
            }
        }
    }
}
