package com.arkivanov.decompose.router.stack

internal val <C : Any> RouterStack<C, *>.configurationBackStack: List<C>
    get() =
        object : AbstractList<C>() {
            override val size: Int get() = backStack.size

            override fun get(index: Int): C = backStack[index].configuration
        }

internal val <C : Any> RouterStack<C, *>.configurationStack: List<C>
    get() =
        object : AbstractList<C>() {
            override val size: Int get() = backStack.size + 1

            override fun get(index: Int): C = (backStack.getOrNull(index) ?: active).configuration
        }
