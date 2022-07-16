package com.arkivanov.decompose.router.stack

/**
 * Represents a source of navigation events.
 *
 * @see StackNavigator
 */
interface StackNavigationSource<C : Any> {

    fun subscribe(observer: (Event<C>) -> Unit)

    fun unsubscribe(observer: (Event<C>) -> Unit)

    class Event<C : Any>(
        val transformer: (stack: List<C>) -> List<C>,
        val onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit = { _, _ -> },
    )
}
