package com.arkivanov.decompose.router

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.MutableValue

class TestRouter<C : Any>(stack: List<C>) : Router<C, Any> {

    override val state: MutableValue<RouterState<C, Any>> = MutableValue(stack.toRouterState())

    var stack: List<C>
        get() = state.value.backStack.map(Child<C, *>::configuration) + state.value.activeChild.configuration
        set(value) {
            state.value = value.toRouterState()
        }

    private fun List<C>.toRouterState(): RouterState<C, Any> =
        RouterState<C, Any>(
            activeChild = Child.Created(
                configuration = last(),
                instance = last(),
            ),
            backStack = dropLast(1).map {
                Child.Created(
                    configuration = it,
                    instance = it,
                )
            }
        )

    override fun navigate(transformer: (stack: List<C>) -> List<C>) {
        stack = transformer(stack)
    }
}
