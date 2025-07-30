package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value

class TestStackRouter<C : TestStackRouter.Keyed>(stack: List<C>) : TestStackNavigator<C>(stack) {

    private val _stack = MutableValue(stack.toRouterState())
    val stack: Value<ChildStack<C, Any>> = _stack

    override fun onConfigurationsChanged(configurations: List<C>) {
        super.onConfigurationsChanged(configurations)

        _stack.value = configurations.toRouterState()
    }

    private fun List<C>.toRouterState(): ChildStack<C, Any> =
        ChildStack<C, Any>(
            active = Child.Created(
                configuration = last(),
                instance = last(),
                key = last().key,
            ),
            backStack = dropLast(1).map {
                Child.Created(
                    configuration = it,
                    instance = it,
                    key = it.key,
                )
            }
        )

    interface Keyed {
        val key: String
    }
}
