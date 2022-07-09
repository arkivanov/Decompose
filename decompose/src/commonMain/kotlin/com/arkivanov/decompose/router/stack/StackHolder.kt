package com.arkivanov.decompose.router.stack

internal interface StackHolder<C : Any, T : Any> {

    var stack: RouterStack<C, T>
}
