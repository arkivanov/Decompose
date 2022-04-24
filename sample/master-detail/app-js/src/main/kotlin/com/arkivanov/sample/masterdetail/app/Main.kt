package com.arkivanov.sample.masterdetail.app

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.sample.masterdetail.shared.root.RootComponent
import kotlinx.browser.document
import org.w3c.dom.Document
import react.create
import react.dom.client.createRoot

fun main() {
    val lifecycle = LifecycleRegistry()

    val root =
        RootComponent(
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
        )

    lifecycle.attachToDocument()

    createRoot(document.getElementById("app")!!).render(
        RootR.create {
            component = root
        }
    )
}

private fun LifecycleRegistry.attachToDocument() {
    fun onVisibilityChanged() {
        if (document.visibilityState == "visible") {
            resume()
        } else {
            stop()
        }
    }

    onVisibilityChanged()

    document.addEventListener(type = "visibilitychange", callback = { onVisibilityChanged() })
}

private val Document.visibilityState: String get() = asDynamic().visibilityState.unsafeCast<String>()

