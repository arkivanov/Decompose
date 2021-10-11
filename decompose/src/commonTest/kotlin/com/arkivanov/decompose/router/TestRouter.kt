package com.arkivanov.decompose.router

import com.arkivanov.decompose.value.Value

class TestRouter<C : Any>(
    var stack: List<C> = emptyList()
) : Router<C, Nothing> {

    override val state: Value<RouterState<C, Nothing>> get() = TODO("Not yet implemented")

    override fun navigate(transformer: (stack: List<C>) -> List<C>) {
        stack = stack.let(transformer)
    }
}
