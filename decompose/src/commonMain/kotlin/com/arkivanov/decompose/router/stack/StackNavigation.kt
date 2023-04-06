package com.arkivanov.decompose.router.stack

/**
 * Represents [StackNavigator] and [StackNavigationSource] at the same time.
 */
interface StackNavigation<C : Any> : StackNavigator<C>, StackNavigationSource<C>

/**
 * Returns a default implementation of [StackNavigation].
 * Broadcasts navigation events to all subscribed observers.
 */
fun <C : Any> StackNavigation(): StackNavigation<C> =
    DefaultStackNavigation()
