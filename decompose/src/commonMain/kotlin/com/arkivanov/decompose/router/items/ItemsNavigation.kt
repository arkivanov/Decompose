package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.ItemsNavigation.Event

/**
 * Represents [ItemsNavigator] and [NavigationSource] at the same time.
 */
@ExperimentalDecomposeApi
interface ItemsNavigation<K : Any, C : ChildConfiguration<K>> : ItemsNavigator<K, C>, NavigationSource<Event<K, C>> {

    class Event<K : Any, C : ChildConfiguration<K>>(
        val transformer: (Items<K, C>) -> Items<K, C>,
        val onComplete: (newItems: Items<K, C>, oldItems: Items<K, C>) -> Unit = { _, _ -> },
    )
}

/**
 * Returns a default implementation of [ItemsNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
@ExperimentalDecomposeApi
fun <K : Any, C : ChildConfiguration<K>> ItemsNavigation(): ItemsNavigation<K, C> =
    DefaultItemsNavigation()
