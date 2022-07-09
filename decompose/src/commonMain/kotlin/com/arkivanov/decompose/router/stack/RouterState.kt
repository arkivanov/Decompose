package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child

data class RouterState<out C : Any, out T : Any>(
    val active: Child.Created<C, T>,
    val backStack: List<Child<C, T>> = emptyList(),
) {
    constructor(configuration: C, instance: T) : this(
        active = Child.Created(
            configuration = configuration,
            instance = instance
        ),
    )
}
