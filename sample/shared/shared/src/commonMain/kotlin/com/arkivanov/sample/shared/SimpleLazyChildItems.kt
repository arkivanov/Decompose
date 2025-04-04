package com.arkivanov.sample.shared

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.items.ChildItems
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.router.items.ItemsNavigation
import com.arkivanov.decompose.router.items.ItemsNavigator
import com.arkivanov.decompose.router.items.LazyChildItems
import com.arkivanov.decompose.value.MutableValue

@OptIn(ExperimentalDecomposeApi::class)
class SimpleLazyChildItems<C : Any, T : Any>(
    private val items: Map<C, T>,
) : LazyChildItems<C, T>(), ItemsNavigator<C> by ItemsNavigation() {
    private val _value =
        MutableValue(
            ChildItems(
                items = items.keys.toList(),
                activeItems = items.mapValues { (_, instance) -> instance to ActiveLifecycleState.CREATED },
            )
        )

    override val value: ChildItems<C, T> by _value::value

    override fun subscribe(observer: (ChildItems<C, T>) -> Unit): Cancellation =
        _value.subscribe(observer)
}
