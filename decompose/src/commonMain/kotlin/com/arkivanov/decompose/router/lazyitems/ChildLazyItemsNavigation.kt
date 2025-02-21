package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation.Event

interface ChildLazyItemsNavigation<C : Any> : ChildLazyItemsNavigator<C>, NavigationSource<Event<C>> {

    class Event<C : Any>(
        val transformer: (LazyItems<C>) -> LazyItems<C>,
        val onComplete: (newItems: LazyItems<C>, oldItems: LazyItems<C>) -> Unit = { _, _ -> },
    )
}

fun <C : Any> ChildLazyItemsNavigation(): ChildLazyItemsNavigation<C> =
    DefaultChildLazyItemsNavigation()
