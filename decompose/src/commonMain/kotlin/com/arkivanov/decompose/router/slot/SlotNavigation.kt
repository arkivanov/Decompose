package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.slot.SlotNavigation.Event

/**
 * Represents [SlotNavigator] and [NavigationSource] at the same time.
 */
interface SlotNavigation<C : Any> : SlotNavigator<C>, NavigationSource<Event<C>> {

    class Event<C : Any>(
        val transformer: (configuration: C?) -> C?,
        val onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit = { _, _ -> },
    )
}

/**
 * Returns a default implementation of [SlotNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
fun <C : Any> SlotNavigation(): SlotNavigation<C> =
    DefaultSlotNavigation()
