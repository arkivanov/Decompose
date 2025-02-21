package com.arkivanov.decompose.router.lazyitems

fun <C : Any> ChildLazyItemsNavigator<C>.navigate(transformer: (LazyItems<C>) -> LazyItems<C>) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}
