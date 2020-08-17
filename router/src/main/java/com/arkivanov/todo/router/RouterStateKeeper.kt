package com.arkivanov.todo.router

interface RouterStateKeeper<C> {

    fun consume(): List<C>?

    fun register(supplier: () -> List<C>)

    fun unregister()
}
