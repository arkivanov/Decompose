package com.arkivanov.decompose.sample.app

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.getValue
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.ComposeViewport
import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.router.webhistory.withWebHistory
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.root.DefaultRootComponent
import com.arkivanov.sample.shared.root.RootContent
import org.jetbrains.skiko.wasm.onWasmReady
import web.dom.DocumentVisibilityState
import web.dom.document
import web.events.Event
import web.events.EventType

@OptIn(ExperimentalComposeUiApi::class, ExperimentalDecomposeApi::class)
fun main() {
    var lifecycle: LifecycleRegistry? = null

    val rootValue =
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            lifecycle?.moveToDestroyed()
            lifecycle = LifecycleRegistry()

            DefaultRootComponent(
                componentContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper),
                deepLinkUrl = deepLink?.let(::Url),
            ).also {
                lifecycle.attachToDocument()
            }
        }

    onWasmReady {
        ComposeViewport {
            val root by rootValue.subscribeAsState()
            RootContent(component = root, modifier = Modifier.fillMaxSize())
        }
    }
}

private fun LifecycleRegistry.attachToDocument() {
    fun onVisibilityChanged() {
        if (document.visibilityState == DocumentVisibilityState.visible) {
            moveToResumed()
        } else {
            moveToCreated()
        }
    }

    onVisibilityChanged()

    val eventType: EventType<Event> = EventType("visibilitychange")
    val callback: (Event) -> Unit = { onVisibilityChanged() }

    document.addEventListener(type = eventType, callback = callback)
    doOnDestroy { document.removeEventListener(type = eventType, callback = callback) }
}
