package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.stack.RouterState

internal fun <C : Any> RouterState<C, *>.configurations(): List<C> =
    backStack.map(Child<C, *>::configuration) + active.configuration
