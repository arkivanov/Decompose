package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation.Event

internal class DefaultChildLazyItemsNavigation<C : Any> : ChildLazyItemsNavigation<C> {

    private val relay = Relay<Event<C>>()

    override fun subscribe(observer: (Event<C>) -> Unit): Cancellation =
        relay.subscribe(observer)

    override fun navigate(
        transformer: (LazyItems<C>) -> LazyItems<C>,
        onComplete: (newItems: LazyItems<C>, oldItems: LazyItems<C>) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }
}
