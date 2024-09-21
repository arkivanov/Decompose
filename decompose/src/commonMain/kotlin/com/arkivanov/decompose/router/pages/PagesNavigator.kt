package com.arkivanov.decompose.router.pages

interface PagesNavigator<C : Any> {

    /**
     * Transforms the current [Pages] state to a new one.
     *
     * During the navigation process, the Child Pages navigation model compares the new [Pages] state
     * with the previous one. The navigation model ensures that all removed components are destroyed,
     * and updates lifecycles of the existing components to match the new state.
     *
     * The navigation is usually performed synchronously, which means that by the time
     * the `navigate` method returns, the navigation is finished and all component lifecycles are
     * moved into required states. However, the navigation is performed asynchronously in case of
     * recursive invocations - e.g. `selectNext` is called from `onResume` lifecycle callback of a
     * component being shown. All recursive invocations are queued and performed one by one once
     * the current navigation is finished.
     *
     * Should be called on the main thread.
     *
     * @param transformer transforms the current [Pages] state to a new one.
     * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
     */
    fun navigate(
        transformer: (Pages<C>) -> Pages<C>,
        onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit,
    )
}
