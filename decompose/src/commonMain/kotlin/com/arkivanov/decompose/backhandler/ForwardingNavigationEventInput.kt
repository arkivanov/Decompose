package com.arkivanov.decompose.backhandler

import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import androidx.navigationevent.NavigationEventInput
import kotlin.properties.Delegates.observable

internal class ForwardingNavigationEventInput(
    isEnabled: Boolean = true,
) : NavigationEventInput() {
    val handler: NavigationEventHandler<*> = Handler()
    var isEnabled: Boolean by observable(isEnabled) { _, _, _ -> updateHandlerEnabledState() }

    override fun onHasEnabledBackHandlersChanged(hasEnabledBackHandlers: Boolean) {
        updateHandlerEnabledState()
    }

    override fun onHasEnabledForwardHandlersChanged(hasEnabledForwardHandlers: Boolean) {
        updateHandlerEnabledState()
    }

    private fun updateHandlerEnabledState() {
        handler.isBackEnabled = isEnabled && hasEnabledBackHandlers
        handler.isForwardEnabled = isEnabled && hasEnabledForwardHandlers
    }

    private inner class Handler : NavigationEventHandler<NavigationEventInfo>(
        initialInfo = NavigationEventInfo.None,
        isBackEnabled = false,
        isForwardEnabled = false,
    ) {
        override fun onBackStarted(event: NavigationEvent) {
            dispatchOnBackStarted(event)
        }

        override fun onBackProgressed(event: NavigationEvent) {
            dispatchOnBackProgressed(event)
        }

        override fun onBackCompleted() {
            dispatchOnBackCompleted()
        }

        override fun onBackCancelled() {
            dispatchOnBackCancelled()
        }

        override fun onForwardStarted(event: NavigationEvent) {
            dispatchOnBackStarted(event)
        }

        override fun onForwardProgressed(event: NavigationEvent) {
            dispatchOnForwardProgressed(event)
        }

        override fun onForwardCompleted() {
            dispatchOnForwardCompleted()
        }

        override fun onForwardCancelled() {
            dispatchOnForwardCancelled()
        }
    }
}
