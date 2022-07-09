package com.arkivanov.decompose.router.stack

internal interface StackNavigator<C : Any, T : Any> {

    fun navigate(oldStack: RouterStack<C, T>, transformer: (stack: List<C>) -> List<C>): RouterStack<C, T>
}
