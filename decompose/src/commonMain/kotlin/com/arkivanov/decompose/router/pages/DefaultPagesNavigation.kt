package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.pages.PagesNavigationSource.Event

internal class DefaultPagesNavigation<C : Any> : PagesNavigation<C> {

    private val relay = Relay<Event<C>>()

    override fun subscribe(observer: (Event<C>) -> Unit) {
        relay.subscribe(observer)
    }

    override fun unsubscribe(observer: (Event<C>) -> Unit) {
        relay.unsubscribe(observer)
    }

    override fun navigate(transformer: (Pages<C>) -> Pages<C>, onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit) {
        relay.accept(Event(transformer, onComplete))
    }
}
