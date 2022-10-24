package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.router.children.NavigationSource

/**
 * Represents a source of navigation events for `Child Stack`.
 *
 * @see StackNavigator
 */
interface StackNavigationSource<C : Any> : NavigationSource<StackNavigationSource.Event<C>> {

    class Event<C : Any>(
        val transformer: (stack: List<C>) -> List<C>,
        val onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit = { _, _ -> },
    )
}
