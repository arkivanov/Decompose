package com.arkivanov.sample.app

import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.HostComponentContext
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.router.webhistory.withWebHistory
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.root.DefaultRootComponent
import com.arkivanov.sample.shared.root.RootContent
import react.create
import react.dom.client.createRoot
import web.dom.DocumentVisibilityState
import web.dom.document
import web.events.Event
import web.events.EventType

@OptIn(ExperimentalDecomposeApi::class)
fun main() {
    val root =
        withWebHistory(
            schemaVersion = "1",
            createComponentContext = { savedState -> HostComponentContext(savedState = savedState) },
            destroyComponentContext = HostComponentContext::destroy,
        ) { ctx, deepLink ->
            DefaultRootComponent(
                componentContext = ctx,
                deepLinkUrl = deepLink?.let(::Url),
            ).also {
                ctx.lifecycle.attachToDocument()
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
