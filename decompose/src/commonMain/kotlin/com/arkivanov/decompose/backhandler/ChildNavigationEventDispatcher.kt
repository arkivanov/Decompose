package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import androidx.navigationevent.NavigationEventInput
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe

internal fun NavigationEventDispatcher.child(
    lifecycle: Lifecycle? = null,
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
): NavigationEventDispatcher {
    val dispatcher = childNavigationEventDispatcher(priority = priority)

    if (lifecycle != null) {
        dispatcher.isEnabled = false

        lifecycle.subscribe(
            onStart = { dispatcher.isEnabled = true },
            onStop = { dispatcher.isEnabled = false },
            onDestroy = { dispatcher.dispose() },
        )
    }

    return dispatcher
}

private fun NavigationEventDispatcher.childNavigationEventDispatcher(
    priority: Int,
): NavigationEventDispatcher {
    val parentInput = DirectNavigationEventInput()
    addInput(parentInput)

    val dispatcher =
        NavigationEventDispatcher(
            onBackCompletedFallback = parentInput::backCompleted,
            onForwardCompletedFallback = parentInput::forwardCompleted,
        )

    val handler = ChildHandler()
    dispatcher.addInput(input = handler.defaultInput, priority = NavigationEventDispatcher.PRIORITY_DEFAULT)
    dispatcher.addInput(input = handler.overlayInput, priority = NavigationEventDispatcher.PRIORITY_DEFAULT)
    addHandler(handler = handler, priority = priority)

//    val navigationEventInput = DelegateNavigationEventInput(onRemoved = { removeInput(parentInput) })
//    dispatcher.addInput(input = navigationEventInput, priority = priority)
//    addHandler(handler = navigationEventInput.handler, priority = priority)

    return dispatcher
}

private class ChildHandler : NavigationEventHandler<NavigationEventInfo>(
    initialInfo = NavigationEventInfo.None,
    isBackEnabled = true
) {
    var hasDefaultEnabledHandlers = false
    var hasOverlayEnabledHandlers = false

    private val _defaultInput =
        object : NavigationEventInput() {
            override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
                hasDefaultEnabledHandlers = hasEnabledHandlers
                isBackEnabled = hasDefaultEnabledHandlers || hasOverlayEnabledHandlers
            }

            override fun onRemoved() {
            }

            fun onBackStarted(event: NavigationEvent) {
                dispatchOnBackStarted(event)
            }

            fun onBackProgressed(event: NavigationEvent) {
                dispatchOnBackProgressed(event)
            }

            fun onBackCompleted() {
                dispatchOnBackCompleted()
            }

            fun onBackCancelled() {
                dispatchOnBackCancelled()
            }
        }

    val defaultInput: NavigationEventInput by ::_defaultInput

    val overlayInput: NavigationEventInput =
        object : NavigationEventInput() {
            override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
                hasDefaultEnabledHandlers = hasEnabledHandlers
                isBackEnabled = hasDefaultEnabledHandlers || hasOverlayEnabledHandlers
            }

            override fun onRemoved() {
            }
        }

    override fun onBackStarted(event: NavigationEvent) {
        _defaultInput.onBackStarted(event)
    }

    override fun onBackProgressed(event: NavigationEvent) {
        _defaultInput.onBackProgressed(event)
    }

    override fun onBackCompleted() {
        _defaultInput.onBackCompleted()
    }

    override fun onBackCancelled() {
        _defaultInput.onBackCancelled()
    }
}
