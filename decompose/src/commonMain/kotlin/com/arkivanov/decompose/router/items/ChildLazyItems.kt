package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.value.Value

abstract class ChildLazyItems<C : Any, out T : Any> : Value<ChildLazyItems.Items<C>>() {

    abstract operator fun get(configuration: C): T

    abstract fun setActiveItems(configurations: Set<C>)

    data class Items<out C : Any>(
        val items: List<C> = emptyList(),
    )
}
