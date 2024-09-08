package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.panels.PanelsNavigation.Event

internal class DefaultPanelsNavigation<MC : Any, DC : Any, EC : Any> : PanelsNavigation<MC, DC, EC> {

    private val relay = Relay<Event<MC, DC, EC>>()

    override fun subscribe(observer: (Event<MC, DC, EC>) -> Unit): Cancellation =
        relay.subscribe(observer)

    override fun navigate(
        transformer: (Panels<MC, DC, EC>) -> Panels<MC, DC, EC>,
        onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }
}
