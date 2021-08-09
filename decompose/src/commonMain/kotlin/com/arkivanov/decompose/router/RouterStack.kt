package com.arkivanov.decompose.router

internal data class RouterStack<out C : Any, out T : Any>(
    val active: RouterEntry.Created<C, T>,
    val backStack: List<RouterEntry<C, T>> = emptyList()
)
