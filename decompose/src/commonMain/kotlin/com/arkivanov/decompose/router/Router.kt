package com.arkivanov.decompose.router

import com.arkivanov.decompose.value.Value

/**
 * Deprecated. Please use Child Stack instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 */
@Deprecated(message = "Use Child Stack instead")
interface Router<C : Any, out T : Any> {

    /**
     * Returns the current stack of components, which can also be observed for changes
     */
    val state: Value<RouterState<C, T>>

    /**
     * Transforms the current stack of configurations into a new one.
     * The stack is represented as [List], where the last element is the top of the stack,
     * and the first element is the bottom of the stack. The returned stack must not be empty.
     *
     * During the navigation process, the `Router` compares the new stack of configurations with
     * the previous one. The `Router` ensures that all removed components are destroyed, and that
     * there is only one component resumed at a time - the top one. All components in the back stack
     * are always either stopped or destroyed.
     *
     * The `Router` usually performs the navigation synchronously, which means that by the time
     * the `navigate` method returns, the navigation is finished and all component lifecycles are
     * moved into required states. However the navigation is performed asynchronously in case of
     * recursive invocations - e.g. `pop` is called from `onResume` lifecycle callback of a
     * component being pushed. All recursive invocations are queued and performed one by one once
     * the current navigation is finished.
     *
     * @param transformer transforms the current configuration stack to a new one.
     * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
     */
    fun navigate(transformer: (stack: List<C>) -> List<C>, onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit)
}
