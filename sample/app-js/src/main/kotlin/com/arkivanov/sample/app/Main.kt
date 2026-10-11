package com.arkivanov.sample.app

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.webhistory.withWebHistory
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultFeatureInstaller
import com.arkivanov.sample.shared.root.DefaultRootComponent
import com.arkivanov.sample.shared.root.RootContent
import react.create
import react.dom.client.createRoot
import web.dom.DocumentVisibilityState
import web.dom.document
import web.events.EventType

@OptIn(ExperimentalDecomposeApi::class)
fun main() {
    var lifecycle: LifecycleRegistry? = null

    val root =
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            lifecycle?.destroy()
            lifecycle = LifecycleRegistry()

            DefaultRootComponent(
                componentContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper),
                featureInstaller = DefaultFeatureInstaller,
                deepLinkUrl = deepLink?.let(::Url),
            ).also {
                lifecycle.attachToDocument()
            }
        }.value // TODO: Observe

    createRoot(document.getElementById("app")!!).render(
        RootContent.create {
            component = root
        }
    )
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
