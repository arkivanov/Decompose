package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher

internal class DefaultChildNavigationEventDispatcher(
    private val parent: NavigationEventDispatcher,
    isEnabled: Boolean,
    private val priority: Int,
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
        parent.addHandler(handler = forwardingInput.handler, priority = priority)
        parent.addInput(input = parentInput)
        isStarted = true
    }

    override fun stop() {
        isStarted = false
        parent.removeInput(input = parentInput)
        forwardingInput.handler.remove()
    }

    override fun destroy() {
        stop()
        dispatcher.dispose()
    }
}
