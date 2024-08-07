package com.arkivanov.decompose.extensions.compose.experimental.stack

import com.arkivanov.decompose.router.stack.ChildStack

internal fun <C : Any, T : Any> ChildStack<C, T>.dropLast(): ChildStack<C, T> =
    ChildStack(active = backStack.last(), backStack = backStack.dropLast(1))

internal val ChildStack<*, *>.size: Int get() = items.size
