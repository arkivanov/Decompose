package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Relay

/**
 * A simple implementation of the [NavigationSource] interface.
 * Broadcasts navigation events to every subscribed observer.
 */
class SimpleNavigation<T : Any> : NavigationSource<T> {

    private val relay = Relay<T>()

    override fun subscribe(observer: (T) -> Unit) {
        relay.subscribe(observer)
    }

    override fun unsubscribe(observer: (T) -> Unit) {
        relay.unsubscribe(observer)
    }

    fun navigate(event: T) {
        relay.accept(event)
    }
}
