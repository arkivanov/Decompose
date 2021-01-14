package com.arkivanov.decompose.router

internal interface StackHolder<C, T> {

    var stack: RouterStack<C, T>
}
