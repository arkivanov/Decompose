package com.arkivanov.decompose.router.lazyitems

interface ChildLazyItemsNavigator<C : Any> {

    fun navigate(
        transformer: (LazyItems<C>) -> LazyItems<C>,
        onComplete: (newItems: LazyItems<C>, oldItems: LazyItems<C>) -> Unit,
    )
}
