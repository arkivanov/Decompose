package com.arkivanov.decompose.router

internal interface StackSaver<C> {

    fun register(key: String, supplier: () -> RouterStack<C, *>)

    fun unregister(key: String)

    fun restore(key: String): RestoredStack<C>?

    class RestoredStack<out C>(
        val active: RouterEntry.Destroyed<C>,
        val backStack: List<RouterEntry.Destroyed<C>>
    )
}
