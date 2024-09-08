package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.panels.PanelsNavigation.Event

/**
 * Represents [PanelsNavigator] and [NavigationSource] at the same time.
 */
@ExperimentalDecomposeApi
interface PanelsNavigation<MC : Any, DC : Any, EC : Any> : PanelsNavigator<MC, DC, EC>, NavigationSource<Event<MC, DC, EC>> {

    class Event<MC : Any, DC : Any, EC : Any>(
        val transformer: (Panels<MC, DC, EC>) -> Panels<MC, DC, EC>,
        val onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
    )
}

/**
 * Returns a default implementation of [PanelsNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigation(): PanelsNavigation<MC, DC, EC> =
    DefaultPanelsNavigation()
