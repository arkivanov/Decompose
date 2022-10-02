package com.arkivanov.decompose.router.overlay

/**
 * Represents [OverlayNavigator] and [OverlayNavigationSource] at the same time.
 */
interface OverlayNavigation<C : Any> : OverlayNavigator<C>, OverlayNavigationSource<C>
