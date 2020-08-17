package com.arkivanov.decompose

import com.arkivanov.decompose.BackStack.Entry

internal fun <C> BackStack<C>.push(entry: Entry.Created<C>): BackStack<C> =
    BackStack(
        top = entry,
        stack = if (top == null) stack else stack + top
    )

internal inline fun <C> BackStack<C>.pop(factory: (C) -> Entry.Created<C>): BackStack<C> {
    require(top != null) { "Back stack is empty" }

    return when (val lastFromStack = stack.lastOrNull()) {
        is Entry.Created -> BackStack(top = lastFromStack, stack = stack.dropLast(1))
        is Entry.Destroyed -> BackStack(top = factory(lastFromStack.configuration), stack = stack.dropLast(1))
        null -> BackStack(top = null, stack = emptyList())
    }
}
