package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.items.ItemsNavigation.Event

internal class DefaultItemsNavigation<C : Any> : ItemsNavigation<C> {

    private val relay = Relay<Event<C>>()

    override fun subscribe(observer: (Event<C>) -> Unit): Cancellation =
        relay.subscribe(observer)

    override fun navigate(
        transformer: (Items<C>) -> Items<C>,
        onComplete: (newItems: Items<C>, oldItems: Items<C>) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }
}
