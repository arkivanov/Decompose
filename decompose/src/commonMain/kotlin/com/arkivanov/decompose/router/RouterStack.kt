package com.arkivanov.decompose.router

internal data class RouterStack<out C, out T>(
    val active: RouterEntry.Created<C, T>,
    val backStack: List<RouterEntry<C, T>> = emptyList()
)
