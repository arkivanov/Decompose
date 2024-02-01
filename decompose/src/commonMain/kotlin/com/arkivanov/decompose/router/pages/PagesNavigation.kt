package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.pages.PagesNavigation.Event

/**
 * Represents [PagesNavigator] and [PagesNavigationSource] at the same time.
 */
@ExperimentalDecomposeApi
interface PagesNavigation<C : Any> : PagesNavigator<C>, NavigationSource<Event<C>> {

    class Event<C : Any>(
        val transformer: (Pages<C>) -> Pages<C>,
        val onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> },
    )
}

/**
 * Returns a default implementation of [PagesNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
@ExperimentalDecomposeApi
fun <C : Any> PagesNavigation(): PagesNavigation<C> =
    DefaultPagesNavigation()
