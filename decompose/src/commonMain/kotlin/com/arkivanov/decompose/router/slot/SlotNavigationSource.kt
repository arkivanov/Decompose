package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.router.children.NavigationSource

/**
 * Represents a source of navigation events for `Child Slot`.
 *
 * @see SlotNavigator
 */
interface SlotNavigationSource<C : Any> : NavigationSource<SlotNavigationSource.Event<C>> {

    class Event<C : Any>(
        val transformer: (configuration: C?) -> C?,
        val onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit = { _, _ -> },
    )
}
