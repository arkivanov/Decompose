package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Relay

/**
 * A simple implementation of the [NavigationSource] interface.
 * Broadcasts navigation events to every subscribed observer.
 */
class SimpleNavigation<T : Any> : NavigationSource<T> {

    private val relay = Relay<T>(isMainThreadCheckEnabled = true)

    override fun subscribe(observer: (T) -> Unit) {
        relay.subscribe(observer)
    }

    override fun unsubscribe(observer: (T) -> Unit) {
        relay.unsubscribe(observer)
    }

    /**
     * Broadcasts the navigation event to every subscribed observer.
     *
     * Should be called on the main thread.
     */
    fun navigate(event: T) {
        relay.accept(event)
    }
}
