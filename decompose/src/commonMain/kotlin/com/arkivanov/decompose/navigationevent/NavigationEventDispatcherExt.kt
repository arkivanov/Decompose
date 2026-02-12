package com.arkivanov.decompose.navigationevent

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import androidx.navigationevent.NavigationEventInput

/**
 * Creates a [NavigationEventHandler] and registers it in this [NavigationEventDispatcher].
 *
 * @param isForwardEnabled see [NavigationEventHandler.isForwardEnabled]. Default value is `false`.
 * @param isBackEnabled see [NavigationEventHandler.isBackEnabled]. Default value is `true`.
 * @param priority see [NavigationEventDispatcher.addHandler]. Default value is [NavigationEventDispatcher.PRIORITY_DEFAULT].
 * @param onForwardStarted see [NavigationEventHandler.onForwardStarted].
 * @param onForwardProgressed see [NavigationEventHandler.onForwardProgressed].
 * @param onForwardCancelled see [NavigationEventHandler.onForwardCancelled].
 * @param onForwardCompleted see [NavigationEventHandler.onForwardCompleted].
 * @param onBackStarted see [NavigationEventHandler.onBackStarted].
 * @param onBackProgressed see [NavigationEventHandler.onBackProgressed].
 * @param onBackCancelled see [NavigationEventHandler.onBackCancelled].
 * @param onBackCompleted see [NavigationEventHandler.onBackCompleted].
 * @return the registered [NavigationEventHandler]. Use [NavigationEventHandler.remove] to unregister it.
 */
inline fun NavigationEventDispatcher.addHandler(
    isForwardEnabled: Boolean = false,
    isBackEnabled: Boolean = true,
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
    crossinline onForwardStarted: (NavigationEvent) -> Unit = {},
    crossinline onForwardProgressed: (NavigationEvent) -> Unit = {},
    crossinline onForwardCancelled: () -> Unit = {},
    crossinline onForwardCompleted: () -> Unit = {},
    crossinline onBackStarted: (NavigationEvent) -> Unit = {},
    crossinline onBackProgressed: (NavigationEvent) -> Unit = {},
    crossinline onBackCancelled: () -> Unit = {},
    crossinline onBackCompleted: () -> Unit = {},
): NavigationEventHandler<NavigationEventInfo> =
    NavigationEventHandler(
        isForwardEnabled = isForwardEnabled,
        isBackEnabled = isBackEnabled,
        onForwardStarted = onForwardStarted,
        onForwardProgressed = onForwardProgressed,
        onForwardCancelled = onForwardCancelled,
        onForwardCompleted = onForwardCompleted,
        onBackStarted = onBackStarted,
        onBackProgressed = onBackProgressed,
        onBackCancelled = onBackCancelled,
        onBackCompleted = onBackCompleted,
    ).also { addHandler(handler = it, priority = priority) }

/**
 * Creates a [NavigationEventHandler] with [NavigationEventInfo.None] as its [NavigationEventHandler.currentInfo].
 *
 * @param isForwardEnabled see [NavigationEventHandler.isForwardEnabled]. Default value is `false`.
 * @param isBackEnabled see [NavigationEventHandler.isBackEnabled]. Default value is `true`.
 * @param onForwardStarted see [NavigationEventHandler.onForwardStarted].
 * @param onForwardProgressed see [NavigationEventHandler.onForwardProgressed].
 * @param onForwardCancelled see [NavigationEventHandler.onForwardCancelled].
 * @param onForwardCompleted see [NavigationEventHandler.onForwardCompleted].
 * @param onBackStarted see [NavigationEventHandler.onBackStarted].
 * @param onBackProgressed see [NavigationEventHandler.onBackProgressed].
 * @param onBackCancelled see [NavigationEventHandler.onBackCancelled].
 * @param onBackCompleted see [NavigationEventHandler.onBackCompleted].
 */
inline fun NavigationEventHandler(
    isForwardEnabled: Boolean = false,
    isBackEnabled: Boolean = true,
    crossinline onForwardStarted: (NavigationEvent) -> Unit = {},
    crossinline onForwardProgressed: (NavigationEvent) -> Unit = {},
    crossinline onForwardCancelled: () -> Unit = {},
    crossinline onForwardCompleted: () -> Unit = {},
    crossinline onBackStarted: (NavigationEvent) -> Unit = {},
    crossinline onBackProgressed: (NavigationEvent) -> Unit = {},
    crossinline onBackCancelled: () -> Unit = {},
    crossinline onBackCompleted: () -> Unit = {},
): NavigationEventHandler<NavigationEventInfo> =
    NavigationEventHandler(
        initialInfo = NavigationEventInfo.None,
        isForwardEnabled = isForwardEnabled,
        isBackEnabled = isBackEnabled,
        onForwardStarted = onForwardStarted,
        onForwardProgressed = onForwardProgressed,
        onForwardCancelled = onForwardCancelled,
        onForwardCompleted = onForwardCompleted,
        onBackStarted = onBackStarted,
        onBackProgressed = onBackProgressed,
        onBackCancelled = onBackCancelled,
        onBackCompleted = onBackCompleted,
    )

/**
 * Creates a [NavigationEventHandler] with the provided [initialInfo].
 *
 * @param initialInfo the initial value of [NavigationEventHandler.currentInfo].
 * @param isForwardEnabled see [NavigationEventHandler.isForwardEnabled]. Default value is `false`.
 * @param isBackEnabled see [NavigationEventHandler.isBackEnabled]. Default value is `true`.
 * @param onForwardStarted see [NavigationEventHandler.onForwardStarted].
 * @param onForwardProgressed see [NavigationEventHandler.onForwardProgressed].
 * @param onForwardCancelled see [NavigationEventHandler.onForwardCancelled].
 * @param onForwardCompleted see [NavigationEventHandler.onForwardCompleted].
 * @param onBackStarted see [NavigationEventHandler.onBackStarted].
 * @param onBackProgressed see [NavigationEventHandler.onBackProgressed].
 * @param onBackCancelled see [NavigationEventHandler.onBackCancelled].
 * @param onBackCompleted see [NavigationEventHandler.onBackCompleted].
 */
inline fun <T : NavigationEventInfo> NavigationEventHandler(
    initialInfo: T,
    isForwardEnabled: Boolean = false,
    isBackEnabled: Boolean = true,
    crossinline onForwardStarted: (NavigationEvent) -> Unit = {},
    crossinline onForwardProgressed: (NavigationEvent) -> Unit = {},
    crossinline onForwardCancelled: () -> Unit = {},
    crossinline onForwardCompleted: () -> Unit = {},
    crossinline onBackStarted: (NavigationEvent) -> Unit = {},
    crossinline onBackProgressed: (NavigationEvent) -> Unit = {},
    crossinline onBackCancelled: () -> Unit = {},
    crossinline onBackCompleted: () -> Unit = {},
): NavigationEventHandler<T> =
    object : NavigationEventHandler<T>(
        initialInfo = initialInfo,
        isBackEnabled = isBackEnabled,
        isForwardEnabled = isForwardEnabled,
    ) {
        override fun onForwardStarted(event: NavigationEvent) {
            onForwardStarted.invoke(event)
        }

        override fun onForwardProgressed(event: NavigationEvent) {
            onForwardProgressed.invoke(event)
        }

        override fun onForwardCancelled() {
            onForwardCancelled.invoke()
        }

        override fun onForwardCompleted() {
            onForwardCompleted.invoke()
        }

        override fun onBackStarted(event: NavigationEvent) {
            onBackStarted.invoke(event)
        }

        override fun onBackProgressed(event: NavigationEvent) {
            onBackProgressed.invoke(event)
        }

        override fun onBackCancelled() {
            onBackCancelled.invoke()
        }

        override fun onBackCompleted() {
            onBackCompleted.invoke()
        }
    }

/**
 * Creates a [DirectNavigationEventInput], registers it in this [NavigationEventDispatcher], and returns it.
 *
 * The returned input can be used to dispatch navigation events into this dispatcher.
 * Use [NavigationEventDispatcher.removeInput] to unregister it.
 */
fun NavigationEventDispatcher.addDirectInput(): DirectNavigationEventInput =
    DirectNavigationEventInput().also(this::addInput)

/**
 * Creates a [NavigationEventInput] that observes whether this [NavigationEventDispatcher] has enabled handlers,
 * registers it, and returns it.
 *
 * @param onHasEnabledForwardHandlersChanged called when the presence of enabled forward handlers changes.
 * @param onHasEnabledBackHandlersChanged called when the presence of enabled back handlers changes.
 * @param onHasEnabledHandlersChanged called when the presence of any enabled handlers changes.
 * @return the registered input. Use [NavigationEventDispatcher.removeInput] to unregister it.
 */
fun NavigationEventDispatcher.addOnHasEnabledHandlersChangedInput(
    onHasEnabledForwardHandlersChanged: (hasEnabledForwardHandlers: Boolean) -> Unit = {},
    onHasEnabledBackHandlersChanged: (hasEnabledBackHandlers: Boolean) -> Unit = {},
    onHasEnabledHandlersChanged: (hasEnabledHandlers: Boolean) -> Unit = {},
): NavigationEventInput =
    object : NavigationEventInput() {
        override fun onHasEnabledForwardHandlersChanged(hasEnabledForwardHandlers: Boolean) {
            onHasEnabledForwardHandlersChanged.invoke(hasEnabledForwardHandlers)
        }

        override fun onHasEnabledBackHandlersChanged(hasEnabledBackHandlers: Boolean) {
            onHasEnabledBackHandlersChanged.invoke(hasEnabledBackHandlers)
        }

        override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
            onHasEnabledHandlersChanged.invoke(hasEnabledHandlers)
        }
    }.also(this::addInput)
