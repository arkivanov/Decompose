package com.arkivanov.decompose.router.slot

/**
 * Represents [SlotNavigator] and [SlotNavigationSource] at the same time.
 */
interface SlotNavigation<C : Any> : SlotNavigator<C>, SlotNavigationSource<C>

/**
 * Returns a default implementation of [SlotNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
fun <C : Any> SlotNavigation(): SlotNavigation<C> =
    DefaultSlotNavigation()
