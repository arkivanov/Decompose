package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Cancellation

/**
 * Represents a generic source of navigation events.
 *
 * @see [children]
 */
interface NavigationSource<out T : Any> {

    fun subscribe(observer: (T) -> Unit): Cancellation
}
