package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.NavigationSource

/**
 * Represents a source of navigation events for Child Pages.
 *
 * @see PagesNavigator
 */
@ExperimentalDecomposeApi
interface PagesNavigationSource<C : Any> : NavigationSource<PagesNavigationSource.Event<C>> {

    class Event<C : Any>(
        val transformer: (Pages<C>) -> Pages<C>,
        val onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> },
    )
}
