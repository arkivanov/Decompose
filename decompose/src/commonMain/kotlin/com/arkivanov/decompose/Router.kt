package com.arkivanov.decompose

import com.arkivanov.decompose.value.Value

interface Router<C : Any, out T : Any> {

    /**
     * Returns the current stack of components, which can also be observed for changes
     */
    val state: Value<RouterState<C, T>>

    /**
     * Transforms the current stack of configurations into a new one.
     * The stack is represented as [List], where the last element is the top of the stack,
     * and the first element is the bottom of the stack. The returned stack must not be empty.
     *
     * The [Router] compares the current stack with new one returned by the [transformer] function.
     * New components are created for all new configurations in the stack, and all components
     * that are no longer in the stack are destroyed. The amount and  order of components in the
     * resulting stack matches the amount and order of configurations returned by the [transformer].
     */
    fun navigate(transformer: (stack: List<C>) -> List<C>)
}
