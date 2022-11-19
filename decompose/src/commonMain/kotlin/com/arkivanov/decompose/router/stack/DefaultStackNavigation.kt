package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.stack.StackNavigationSource.Event

internal class DefaultStackNavigation<C : Any> : StackNavigation<C> {

    private val relay = Relay<Event<C>>()

    override fun navigate(transformer: (stack: List<C>) -> List<C>, onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit) {
        relay.accept(Event(transformer, onComplete))
    }

    override fun subscribe(observer: (Event<C>) -> Unit) {
        relay.subscribe(observer)
    }

    override fun unsubscribe(observer: (Event<C>) -> Unit) {
        relay.unsubscribe(observer)
    }
}
