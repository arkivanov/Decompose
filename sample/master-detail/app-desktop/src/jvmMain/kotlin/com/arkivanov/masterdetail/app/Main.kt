package com.arkivanov.masterdetail.app

import androidx.compose.desktop.DesktopTheme
import androidx.compose.desktop.Window
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.extensions.compose.jetbrains.rememberRootComponent
import com.arkivanov.sample.masterdetail.composeui.root.RootUi
import com.arkivanov.sample.masterdetail.shared.root.RootComponent

fun main() {
    Window("Decompose Master-Detail") {
        Surface(modifier = Modifier.fillMaxSize()) {
            MaterialTheme {
                DesktopTheme {
                    val root = rememberRootComponent(factory = ::RootComponent)
                    RootUi(root)
                }
            }
        }
    }
}
