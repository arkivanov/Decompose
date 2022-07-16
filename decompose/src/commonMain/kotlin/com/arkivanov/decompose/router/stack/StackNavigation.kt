package com.arkivanov.decompose.router.stack

/**
 * Represents [StackNavigator] and [StackNavigationSource] at the same time.
 */
interface StackNavigation<C : Any> : StackNavigator<C>, StackNavigationSource<C>
