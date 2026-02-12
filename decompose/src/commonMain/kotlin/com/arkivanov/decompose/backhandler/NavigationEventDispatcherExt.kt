package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo

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

fun NavigationEventDispatcher.addDirectInput(): DirectNavigationEventInput =
    DirectNavigationEventInput().also {
        addInput(input = it)
    }
