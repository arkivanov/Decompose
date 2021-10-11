package com.arkivanov.decompose.router

import com.arkivanov.decompose.Child

data class RouterState<out C : Any, out T : Any>(
    val activeChild: Child.Created<C, T>,
    val backStack: List<Child<C, T>> = emptyList()
) {
    constructor(configuration: C, instance: T) : this(
        activeChild = Child.Created(
            configuration = configuration,
            instance = instance
        )
    )
}
