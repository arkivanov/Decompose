package com.arkivanov.decompose.router

internal interface StackHolder<C : Any, T : Any> {

    var stack: RouterStack<C, T>
}
