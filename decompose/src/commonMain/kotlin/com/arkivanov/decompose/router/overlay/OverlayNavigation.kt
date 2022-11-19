package com.arkivanov.decompose.router.overlay

/**
 * Represents [OverlayNavigator] and [OverlayNavigationSource] at the same time.
 */
interface OverlayNavigation<C : Any> : OverlayNavigator<C>, OverlayNavigationSource<C>

/**
 * Returns a default implementation of [OverlayNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
@Suppress("FunctionName") // Factory function
fun <C : Any> OverlayNavigation(): OverlayNavigation<C> =
    DefaultOverlayNavigation()
