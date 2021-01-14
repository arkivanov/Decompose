package com.arkivanov.decompose.router

internal interface StackNavigator<C, T> {

    fun navigate(oldStack: RouterStack<C, T>, transformer: (stack: List<C>) -> List<C>): RouterStack<C, T>
}
