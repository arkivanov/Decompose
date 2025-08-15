package com.arkivanov.decompose.sample.app

import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.webhistory.withWebHistory
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry

@OptIn(ExperimentalComposeUiApi::class, ExperimentalDecomposeApi::class)
fun main() {
    val lifecycle = LifecycleRegistry(Lifecycle.State.RESUMED)

    val root =
        withWebHistory { stateKeeper, deepLink ->
            PagesComponent(
                componentContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper),
            )
        }

    CanvasBasedWindow(title = "Decompose Sample") {
        PagesContent(component = root)
    }
}
