package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.router.stack.ChildStack

internal fun <C : Any> ChildStack<C, *>.configurations(): List<C> =
    items.map { it.configuration }
