package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.slot.SlotNavigation.Event

internal class DefaultSlotNavigation<C : Any> : SlotNavigation<C> {

    private val relay = Relay<Event<C>>()

    override fun navigate(
        transformer: (configuration: C?) -> C?,
        onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }

    override fun subscribe(observer: (Event<C>) -> Unit): Cancellation =
        relay.subscribe(observer)
}
