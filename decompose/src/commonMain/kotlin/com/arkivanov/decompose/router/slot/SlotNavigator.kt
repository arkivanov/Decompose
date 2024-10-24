package com.arkivanov.decompose.router.slot

interface SlotNavigator<C : Any> {

    /**
     * Transforms the current configuration to a new one. Configuration `null` means that the
     * component is not shown.
     *
     * During the navigation process, the `Child Slot` compares the new configuration with
     * the previous one. The `Child Slot` ensures that the current component is resumed, and a
     * dismissed component is destroyed.
     *
     * The navigation is usually performed synchronously, which means that by the time
     * the `navigate` method returns, the navigation is finished and all component lifecycles are
     * moved into required states. However, the navigation is performed asynchronously in case of
     * recursive invocations - e.g. `dismiss` is called from `onResume` lifecycle callback of a
     * component being shown. All recursive invocations are queued and performed one by one once
     * the current navigation is finished.
     *
     * Should be called on the main thread.
     *
     * @param transformer transforms the current configuration to a new one, `null` means that the
     * component is not shown.
     * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
     */
    fun navigate(
        transformer: (configuration: C?) -> C?,
        onComplete: (newConfiguration: C?, oldConfiguration: C?) -> Unit,
    )
}
