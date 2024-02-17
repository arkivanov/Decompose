package com.arkivanov.decompose.sample.app

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.CanvasBasedWindow
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.webhistory.DefaultWebHistoryController
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultFeatureInstaller
import com.arkivanov.sample.shared.root.DefaultRootComponent
import com.arkivanov.sample.shared.root.RootContent
import kotlinx.browser.window
import org.jetbrains.skiko.wasm.onWasmReady
import web.dom.DocumentVisibilityState
import web.dom.document
import web.events.EventType

@OptIn(ExperimentalDecomposeApi::class, ExperimentalComposeUiApi::class)
fun main() {
    val lifecycle = LifecycleRegistry()

    val root =
        DefaultRootComponent(
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
            featureInstaller = DefaultFeatureInstaller,
            deepLink = DefaultRootComponent.DeepLink.Web(path = window.location.pathname),
            webHistoryController = DefaultWebHistoryController(),
        )

    lifecycle.attachToDocument()

    onWasmReady {
        CanvasBasedWindow(title = "Decompose Sample") {
            RootContent(component = root, modifier = Modifier.fillMaxSize())
        }
    }
}

private fun LifecycleRegistry.attachToDocument() {
    fun onVisibilityChanged() {
        if (document.visibilityState == DocumentVisibilityState.visible) {
            resume()
        } else {
            stop()
        }
    }

    onVisibilityChanged()

    document.addEventListener(type = EventType("visibilitychange"), callback = { onVisibilityChanged() })
}

