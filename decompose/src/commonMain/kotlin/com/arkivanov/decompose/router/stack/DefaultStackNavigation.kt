package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.stack.StackNavigation.Event

internal class DefaultStackNavigation<C : Any> : StackNavigation<C> {

    private val relay = Relay<Event<C>>(isMainThreadCheckEnabled = true)

    override fun navigate(transformer: (stack: List<C>) -> List<C>, onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit) {
        relay.accept(Event(transformer, onComplete))
    }

    override fun subscribe(observer: (Event<C>) -> Unit): Cancellation =
        relay.subscribe(observer)
}
