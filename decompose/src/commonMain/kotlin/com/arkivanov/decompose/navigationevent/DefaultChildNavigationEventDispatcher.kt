package com.arkivanov.decompose.navigationevent

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher

internal class DefaultChildNavigationEventDispatcher(
    private val parent: NavigationEventDispatcher,
    isEnabled: Boolean,
    private val priority: NavigationEventPriority,
) : ChildNavigationEventDispatcher {

    private var isStarted = false
    private val parentInput = DirectNavigationEventInput()
    private val forwardingInput = ForwardingNavigationEventInput(isEnabled = isEnabled)
    override var isEnabled: Boolean by forwardingInput::isEnabled

    override val dispatcher: NavigationEventDispatcher =
        NavigationEventDispatcher(
            onBackCompletedFallback = { parentInput.takeIf { isStarted }?.backCompleted() },
            onForwardCompletedFallback = { parentInput.takeIf { isStarted }?.forwardCompleted() },
        )

    init {
        dispatcher.addInput(input = forwardingInput)
    }

    override fun start() {
        if (isStarted) {
            return
        }

        parent.addHandler(handler = forwardingInput.handler, priority = priority.value)
        parent.addInput(input = parentInput)
        isStarted = true
    }

    override fun stop() {
        if (!isStarted) {
            return
        }

        isStarted = false
        parent.removeInput(input = parentInput)
        forwardingInput.handler.remove()
    }

    override fun destroy() {
        stop()
        dispatcher.dispose()
    }
}
