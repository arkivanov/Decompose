package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo

inline fun NavigationEventDispatcher.addBackHandler(
    isEnabled: Boolean = true,
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
    crossinline onBackStarted: (NavigationEvent) -> Unit = {},
    crossinline onBackProgressed: (NavigationEvent) -> Unit = {},
    crossinline onBackCancelled: () -> Unit = {},
    crossinline onBackCompleted: () -> Unit = {},
): NavigationEventHandler<NavigationEventInfo> =
    NavigationEventHandler(
        isBackEnabled = isEnabled,
        onBackStarted = onBackStarted,
        onBackProgressed = onBackProgressed,
        onBackCancelled = onBackCancelled,
        onBackCompleted = onBackCompleted,
    ).also { addHandler(handler = it, priority = priority) }

inline fun NavigationEventHandler(
    initialInfo: NavigationEventInfo = NavigationEventInfo.None,
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
    object : NavigationEventHandler<NavigationEventInfo>(
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

fun NavigationEventDispatcher.addDirectInput(
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
): DirectNavigationEventInput =
    DirectNavigationEventInput().also {
        addInput(input = it, priority = priority)
    }
