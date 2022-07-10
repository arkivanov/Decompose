package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.value.Value

interface StackRouter<C : Any, out T : Any> : StackNavigator<C> {

    /**
     * Returns the current stack of components, which can also be observed for changes.
     */
    val stack: Value<ChildStack<C, T>>
}
