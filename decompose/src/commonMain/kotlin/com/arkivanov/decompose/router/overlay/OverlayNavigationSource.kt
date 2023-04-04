package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.router.children.NavigationSource

/**
 * Represents a source of navigation events for `Child Overlay`.
 *
 * @see OverlayNavigator
 */
@Deprecated(
    message = "Please use Child Slot API",
    replaceWith = ReplaceWith(
        expression = "SlotNavigationSource",
        "com.arkivanov.decompose.router.slot.SlotNavigationSource",
    ),
)
interface OverlayNavigationSource<C : Any> : NavigationSource<OverlayNavigationSource.Event<C>> {

    class Event<C : Any>(
        val transformer: (configuration: C?) -> C?,
        val onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit = { _, _ -> },
    )
}
