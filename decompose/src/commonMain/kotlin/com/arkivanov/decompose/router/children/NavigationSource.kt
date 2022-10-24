package com.arkivanov.decompose.router.children

/**
 * Represents a generic source of navigation events.
 *
 * @see [children]
 */
interface NavigationSource<out T : Any> {

    fun subscribe(observer: (T) -> Unit)

    fun unsubscribe(observer: (T) -> Unit)
}
