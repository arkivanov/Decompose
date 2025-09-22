package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.ItemsNavigation.Event

/**
 * Represents [ItemsNavigator] and [NavigationSource] at the same time.
 */
@ExperimentalDecomposeApi
interface ItemsNavigation<C : Any> : ItemsNavigator<C>, NavigationSource<Event<C>> {

    class Event<C : Any>(
        val transformer: (List<C>) -> List<C>,
        val onComplete: (newItems: List<C>, oldItems: List<C>) -> Unit = { _, _ -> },
    )
}

/**
 * Returns a default implementation of [ItemsNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
@ExperimentalDecomposeApi
fun <C : Any> ItemsNavigation(): ItemsNavigation<C> =
    DefaultItemsNavigation()
