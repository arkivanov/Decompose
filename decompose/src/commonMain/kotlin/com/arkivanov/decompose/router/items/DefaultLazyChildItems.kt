package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState

internal class DefaultLazyChildItems<K : Any, C : ChildConfiguration<K>, T : Any>(
    private val controller: ItemsController<K, C, T>,
) : LazyChildItems<K, C, T>(), ItemsNavigator<K, C> by controller {
    override val value: Items<K, C> get() = controller.state.value

    override fun subscribe(observer: (Items<K, C>) -> Unit): Cancellation =
        controller.state.subscribe(observer)

    override fun get(configuration: C): T {
        var item = value.activeItems[key]
        if (item == null) {
            setActiveItems { it + (key to ActiveLifecycleState.CREATED) }
            item = value.activeItems[key]
        }

        checkNotNull(item) {
            "Component was not created for $key. " +
                "Make sure you are not calling get(...) when navigation is already in progress (e.g. recursively). " +
                "Also make sure you are not removing/destroying the component during its instantiation."
        }

        return item.first
    }
}
