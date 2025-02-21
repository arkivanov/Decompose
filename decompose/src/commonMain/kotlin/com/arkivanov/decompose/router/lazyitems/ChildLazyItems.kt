package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.value.Value

abstract class ChildLazyItems<C : Any, out T : Any> internal constructor() {

    abstract val state: Value<LazyItems<C>>

    abstract operator fun get(configuration: C): T

    abstract fun setActiveItems(items: Map<C, LazyItems.ActiveLifecycleState>)
}
