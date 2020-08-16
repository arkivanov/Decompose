package com.arkivanov.todo.router

interface Router<in C> {

    fun push(configuration: C)

    fun pop()
}
