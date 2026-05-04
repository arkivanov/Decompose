package com.arkivanov.decompose.backhandler

import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcher.Companion.PRIORITY_DEFAULT
import androidx.navigationevent.NavigationEventInfo
import com.arkivanov.decompose.isDestroyed
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe
import kotlin.properties.Delegates.observable

internal interface ChildNavigationEventDispatcher {

    val dispatcher: NavigationEventDispatcher
    var isEnabled: Boolean

    fun start()
    fun stop()
    fun destroy()
}

internal class DefaultChildNavigationEventDispatcher(
    private val parent: NavigationEventDispatcher,
    isEnabled: Boolean,
    private val priority: Int,
) : ChildNavigationEventDispatcher {

    private var isStarted = false
    private val parentInput = DirectNavigationEventInput()
    private val directInput = DirectNavigationEventInput()
    private val hasEnabledHandlersInput = HasEnabledHandlersNavigationEventInput { updateParentCallbackEnabledState() }
    private val parentHandler = DelegatingNavigationEventHandler(input = directInput, initialInfo = NavigationEventInfo.None)

    override var isEnabled: Boolean by observable(isEnabled) { _, _, _ -> updateParentCallbackEnabledState() }

    override val dispatcher: NavigationEventDispatcher =
        NavigationEventDispatcher(
            onBackCompletedFallback = { parentInput.takeIf { isStarted }?.backCompleted() },
            onForwardCompletedFallback = { parentInput.takeIf { isStarted }?.forwardCompleted() },
        )

    init {
        dispatcher.addInput(input = directInput)
        dispatcher.addInput(input = hasEnabledHandlersInput)
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

    override fun destroy() {
        stop()
        dispatcher.dispose()
    }

    private fun updateParentCallbackEnabledState() {
        parentHandler.isBackEnabled = isEnabled && directInput.hasEnabledBackHandlers
        parentHandler.isForwardEnabled = isEnabled && directInput.hasEnabledForwardHandlers
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
