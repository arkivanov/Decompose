package com.arkivanov.decompose.router

import com.arkivanov.decompose.Navigator

class TestNavigator<C : Any>(
    var stack: List<C> = emptyList()
) : Navigator<C> {

    override fun navigate(transformer: (stack: List<C>) -> List<C>) {
        stack = stack.let(transformer)
    }
}
