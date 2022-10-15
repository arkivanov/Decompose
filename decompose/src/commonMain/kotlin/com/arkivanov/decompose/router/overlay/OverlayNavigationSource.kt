package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.router.children.NavigationSource

/**
 * Represents a source of navigation events for `Child Overlay`.
 *
 * @see OverlayNavigator
 */
interface OverlayNavigationSource<C : Any> : NavigationSource<OverlayNavigationSource.Event<C>> {

    class Event<C : Any>(
        val transformer: (configuration: C?) -> C?,
        val onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit = { _, _ -> },
    )
}
