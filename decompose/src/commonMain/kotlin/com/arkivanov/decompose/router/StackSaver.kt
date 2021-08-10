package com.arkivanov.decompose.router

internal interface StackSaver<C : Any> {

    fun register(key: String, supplier: () -> RouterStack<C, *>)

    fun unregister(key: String)

    fun restore(key: String): RestoredStack<C>?

    class RestoredStack<out C : Any>(
        val active: RouterEntry.Destroyed<C>,
        val backStack: List<RouterEntry.Destroyed<C>>
    )
}
