package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.stack.StackNavigation.Event

/**
 * Represents [StackNavigator] and [NavigationSource] at the same time.
 */
interface StackNavigation<C : Any> : StackNavigator<C>, NavigationSource<Event<C>> {

    class Event<C : Any>(
        val transformer: (stack: List<C>) -> List<C>,
        val onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit = { _, _ -> },
    )
}

/**
 * Returns a default implementation of [StackNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
fun <C : Any> StackNavigation(): StackNavigation<C> =
    DefaultStackNavigation()
