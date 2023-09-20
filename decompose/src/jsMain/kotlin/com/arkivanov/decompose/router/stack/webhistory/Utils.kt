package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.router.stack.ChildStack

internal fun <C : Any> ChildStack<C, *>.configurations(): List<C> =
    items.map { it.configuration }

// Just Object#hashCode is not stable between page reloads
internal fun Any.key(): String =
    "${this::class.simpleName}_${JSON.stringify(this).hashCode().toString(radix = 36)}"
