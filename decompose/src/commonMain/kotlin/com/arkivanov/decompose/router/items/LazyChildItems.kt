package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.value.Value

/**
 * Represents an observable [Value] of [ChildItems] and [ItemsNavigator] at the same time.
 * Allows lazy instantiation of the child components.
 */
@ExperimentalDecomposeApi
abstract class LazyChildItems<K : Any, C : ChildConfiguration<K>, out T : Any> : Value<Items<K, C>>(), ItemsNavigator<K, C> {

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
    abstract operator fun get(configuration: C): T

    abstract override fun navigate(transformer: (Items<K, C>) -> Items<K, C>, onComplete: (Items<K, C>, Items<K, C>) -> Unit)
}
