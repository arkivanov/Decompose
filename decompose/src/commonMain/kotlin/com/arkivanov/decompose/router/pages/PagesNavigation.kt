package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Represents [PagesNavigator] and [PagesNavigationSource] at the same time.
 */
@ExperimentalDecomposeApi
interface PagesNavigation<C : Any> : PagesNavigator<C>, PagesNavigationSource<C>

/**
 * Returns a default implementation of [PagesNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
@ExperimentalDecomposeApi
fun <C : Any> PagesNavigation(): PagesNavigation<C> =
    DefaultPagesNavigation()
