package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
interface ItemsNavigator<C : Any> {

    /**
     * Transforms the current [Items] state to a new one.
     *
     * During the navigation process, the Child Items navigation model compares the new [Items] state
     * with the previous one. The navigation model ensures that all deactivated components are destroyed,
     * and updates lifecycles of the active components to match the new state.
     *
     * The navigation is usually performed synchronously, which means that by the time
     * the `navigate` method returns, the navigation is finished and all component lifecycles are
     * moved into required states. However, the navigation is performed asynchronously in case of
     * recursive invocations - e.g. `setActiveItems` is called from `onCreate` lifecycle callback of a
     * component being activated. All recursive invocations are queued and performed one by one once
     * the current navigation is finished.
     *
     * Should be called on the main thread.
     *
     * @param transformer transforms the current [Items] state to a new one.
     * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
     */
    fun navigate(
        transformer: (Items<C>) -> Items<C>,
        onComplete: (newItems: Items<C>, oldItems: Items<C>) -> Unit,
    )
}
