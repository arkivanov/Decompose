package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.value.Value

/**
 * Represents an observable [Value] of [ChildItems] and [ItemsNavigator] at the same time.
 * Allows lazy instantiation of the child components.
 */
@ExperimentalDecomposeApi
abstract class LazyChildItems<C : Any, out T : Any> : Value<ChildItems<C, T>>(), ItemsNavigator<C> {

    abstract override fun navigate(transformer: (Items<C>) -> Items<C>, onComplete: (Items<C>, Items<C>) -> Unit)
}

/**
 * Returns an instance of the child component corresponding to the provided [configuration],
 * creating it if needed.
 *
 * Please note that this function must not be called recursively during navigation, i.e., when
 * a child component is being instantiated. Additionally, the component being created must not
 * remove itself from the list during the navigation process. An [IllegalStateException] will
 * be thrown if the component couldn't be created.
 *
 * Should be called on the main thread.
 */
@ExperimentalDecomposeApi
operator fun <C : Any, T : Any> LazyChildItems<C, T>.get(configuration: C): T {
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
