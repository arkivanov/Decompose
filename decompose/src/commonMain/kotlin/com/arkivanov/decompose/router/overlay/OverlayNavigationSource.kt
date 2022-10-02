package com.arkivanov.decompose.router.overlay

/**
 * Represents a source of navigation events for `Child Overlay`.
 *
 * @see OverlayNavigator
 */
interface OverlayNavigationSource<C : Any> {

    fun subscribe(observer: (Event<C>) -> Unit)

    fun unsubscribe(observer: (Event<C>) -> Unit)

    class Event<C : Any>(
        val transformer: (configuration: C?) -> C?,
        val onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit = { _, _ -> },
    )
}
