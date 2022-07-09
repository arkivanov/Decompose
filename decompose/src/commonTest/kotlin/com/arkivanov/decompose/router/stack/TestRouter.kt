package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.MutableValue

class TestRouter<C : Any>(stack: List<C>) : StackRouter<C, Any> {

    override val stack: MutableValue<ChildStack<C, Any>> = MutableValue(stack.toRouterState())

    var configs: List<C>
        get() = stack.value.items.map { it.configuration }
        set(value) {
            stack.value = value.toRouterState()
        }

    private fun List<C>.toRouterState(): ChildStack<C, Any> =
        ChildStack<C, Any>(
            active = Child.Created(
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

    override fun navigate(transformer: (stack: List<C>) -> List<C>, onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit) {
        val oldConfigs = this.configs
        val newConfigs = transformer(this.configs)
        this.configs = newConfigs
        onComplete(newConfigs, oldConfigs)
    }
}
