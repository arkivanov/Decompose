package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.value.Value

abstract class ChildLazyItems<C : Any, out T : Any> {

    abstract val state: Value<LazyItems<C>>

    abstract operator fun get(configuration: C): Child.Created<C, T>

    abstract fun setActiveItems(items: Map<C, ChildNavState.Status>)
}
