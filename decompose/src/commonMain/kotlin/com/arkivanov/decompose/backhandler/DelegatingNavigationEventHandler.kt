package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo

internal class DelegatingNavigationEventHandler<T : NavigationEventInfo>(
    private val input: DirectNavigationEventInput,
    initialInfo: T,
    isBackEnabled: Boolean = false,
    isForwardEnabled: Boolean = false,
) : NavigationEventHandler<T>(
    initialInfo = initialInfo,
    isBackEnabled = isBackEnabled,
    isForwardEnabled = isForwardEnabled,
) {

    override fun onBackStarted(event: NavigationEvent) {
        input.backStarted(event)
    }

    override fun onBackProgressed(event: NavigationEvent) {
        input.backProgressed(event)
    }

    override fun onBackCancelled() {
        input.backCancelled()
    }

    override fun onBackCompleted() {
        input.backCompleted()
    }

    override fun onForwardStarted(event: NavigationEvent) {
        input.forwardStarted(event)
    }

    override fun onForwardProgressed(event: NavigationEvent) {
        input.forwardProgressed(event)
    }

    override fun onForwardCancelled() {
        input.forwardCancelled()
    }

    override fun onForwardCompleted() {
        input.forwardCompleted()
    }
}
