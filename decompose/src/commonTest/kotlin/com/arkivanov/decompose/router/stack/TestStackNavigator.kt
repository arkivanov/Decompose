package com.arkivanov.decompose.router.stack

import kotlin.properties.Delegates

open class TestStackNavigator<C : Any>(
    configurations: List<C>,
) : StackNavigator<C> {

    var configurations: List<C> by Delegates.observable(configurations) { _, _, newValue ->
        onConfigurationsChanged(newValue)
    }

    protected open fun onConfigurationsChanged(configurations: List<C>) {
    }

    override fun navigate(
        transformer: (stack: List<C>) -> List<C>,
        onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit
    ) {
        val oldStack = configurations
        val newStack = transformer(configurations)
        configurations = newStack
        onComplete(newStack, oldStack)
    }
}
