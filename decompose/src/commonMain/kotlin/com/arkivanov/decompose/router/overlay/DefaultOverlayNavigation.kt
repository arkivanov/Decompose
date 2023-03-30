package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.overlay.OverlayNavigationSource.Event

internal class DefaultOverlayNavigation<C : Any> : OverlayNavigation<C> {

    private val relay = Relay<Event<C>>(isMainThreadCheckEnabled = true)

    override fun navigate(
        transformer: (configuration: C?) -> C?,
        onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }

    override fun subscribe(observer: (Event<C>) -> Unit) {
        relay.subscribe(observer)
    }

    override fun unsubscribe(observer: (Event<C>) -> Unit) {
        relay.unsubscribe(observer)
    }
}
