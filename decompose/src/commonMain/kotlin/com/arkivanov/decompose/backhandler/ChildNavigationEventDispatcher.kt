package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcher.Companion.PRIORITY_DEFAULT
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import androidx.navigationevent.NavigationEventInput
import com.arkivanov.decompose.isDestroyed
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe
import kotlin.properties.Delegates.observable

internal interface ChildNavigationEventDispatcher {

    val dispatcher: NavigationEventDispatcher
    var isEnabled: Boolean

    fun start()
    fun stop()
}

internal class DefaultChildNavigationEventDispatcher(
    private val parent: NavigationEventDispatcher,
    isEnabled: Boolean,
    private val priority: Int,
) : ChildNavigationEventDispatcher {

    private var isStarted = false

    private val parentInput = DirectNavigationEventInput()

    override val dispatcher: NavigationEventDispatcher =
        NavigationEventDispatcher(
            onBackCompletedFallback = { parentInput.takeIf { isStarted }?.backCompleted() },
            onForwardCompletedFallback = { parentInput.takeIf { isStarted }?.forwardCompleted() },
        )

    private val input =
        object : NavigationEventInput() {
            var hasEnabledHandlers = false

            override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
                this.hasEnabledHandlers = hasEnabledHandlers
                updateParentCallbackEnabledState()
            }

            fun onBackStarted(event: NavigationEvent) {
                dispatchOnBackStarted(event)
            }

            fun onBackProgressed(event: NavigationEvent) {
                dispatchOnBackProgressed(event)
            }

            fun onBackCancelled() {
                dispatchOnBackCancelled()
            }

            fun onBackCompleted() {
                dispatchOnBackCompleted()
            }
        }

    private val parentHandler =
        object : NavigationEventHandler<NavigationEventInfo>(initialInfo = NavigationEventInfo.None, isBackEnabled = false) {
            override fun onBackStarted(event: NavigationEvent) {
                input.onBackStarted(event)
            }

            override fun onBackProgressed(event: NavigationEvent) {
                input.onBackProgressed(event)
            }

            override fun onBackCancelled() {
                input.onBackCancelled()
            }

            override fun onBackCompleted() {
                input.onBackCompleted()
            }
        }

    override var isEnabled: Boolean by observable(isEnabled) { _, _, _ -> updateParentCallbackEnabledState() }

    init {
        dispatcher.addInput(input = input)
    }

    override fun start() {
        isStarted = true
        parent.addHandler(handler = parentHandler, priority = priority)
        parent.addInput(input = parentInput)
    }

    override fun stop() {
        parent.removeInput(input = parentInput)
        parentHandler.remove()
        isStarted = false
    }

    private fun updateParentCallbackEnabledState() {
        val enabled = isEnabled && input.hasEnabledHandlers
        parentHandler.isBackEnabled = enabled
        parentHandler.isForwardEnabled = enabled
    }
}

internal fun NavigationEventDispatcher.child(
    lifecycle: Lifecycle? = null,
    priority: Int = PRIORITY_DEFAULT,
): ChildNavigationEventDispatcher {
    val handler = childNavigationEventDispatcher(priority = priority, isEnabled = false)

    if (lifecycle == null) {
        handler.isEnabled = true
        handler.start()
    } else if (!lifecycle.isDestroyed) {
        handler.isEnabled = lifecycle.state >= Lifecycle.State.STARTED
        handler.start()

        lifecycle.subscribe(
            onStart = { handler.isEnabled = true },
            onStop = { handler.isEnabled = false },
            onDestroy = handler::stop,
        )
    }

    return handler
}

internal fun NavigationEventDispatcher.childNavigationEventDispatcher(
    isEnabled: Boolean = true,
    priority: Int = PRIORITY_DEFAULT,
): ChildNavigationEventDispatcher =
    DefaultChildNavigationEventDispatcher(
        parent = this,
        isEnabled = isEnabled,
        priority = priority,
    )
