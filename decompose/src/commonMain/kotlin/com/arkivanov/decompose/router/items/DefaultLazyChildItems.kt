package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState

internal class DefaultLazyChildItems<C : Any, T : Any>(
    private val controller: ItemsController<C, T>,
) : LazyChildItems<C, T>(), ItemsNavigator<C> by controller {
    override val value: ChildItems<C, T> get() = controller.state.value

    override fun subscribe(observer: (ChildItems<C, T>) -> Unit): Cancellation =
        controller.state.subscribe(observer)

    override fun get(configuration: C): T {
        var item = value.activeItems[configuration]
        if (item == null) {
            setActiveItems { it + (configuration to ActiveLifecycleState.CREATED) }
            item = value.activeItems[configuration]
        }

        checkNotNull(item) {
            "Component was not created for $configuration. " +
                "Make sure you are not calling get(...) when navigation is already in progress (e.g. recursively). " +
                "Also make sure you are not removing/destroying the component during its instantiation."
        }

        return item.first
    }
}
