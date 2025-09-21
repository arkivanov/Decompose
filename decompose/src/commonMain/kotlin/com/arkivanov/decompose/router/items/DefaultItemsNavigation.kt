package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.items.ItemsNavigation.Event

internal class DefaultItemsNavigation<K : Any, C : ChildConfiguration<K>> : ItemsNavigation<K, C> {

    private val relay = Relay<Event<K, C>>()

    override fun subscribe(observer: (Event<K, C>) -> Unit): Cancellation =
        relay.subscribe(observer)

    override fun navigate(
        transformer: (Items<K, C>) -> Items<K, C>,
        onComplete: (newItems: Items<K, C>, oldItems: Items<K, C>) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }
}
