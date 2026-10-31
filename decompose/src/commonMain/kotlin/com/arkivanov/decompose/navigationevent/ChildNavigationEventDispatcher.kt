package com.arkivanov.decompose.navigationevent

import androidx.lifecycle.Lifecycle
import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.lifecycle.addObserver
import com.arkivanov.decompose.lifecycle.isDestroyed

internal interface ChildNavigationEventDispatcher {

    val dispatcher: NavigationEventDispatcher
    var isEnabled: Boolean

    fun start()
    fun stop()
    fun destroy()
}

internal fun NavigationEventDispatcher.child(
    lifecycle: Lifecycle? = null,
    priority: NavigationEventPriority = NavigationEventPriority.Default,
): NavigationEventDispatcher {
    val handler = childNavigationEventDispatcher(isEnabled = false, priority = priority)

    if (lifecycle == null) {
        handler.isEnabled = true
        handler.start()
    } else if (!lifecycle.isDestroyed) {
        handler.isEnabled = lifecycle.currentState >= Lifecycle.State.STARTED
        handler.start()

        lifecycle.addObserver(
            onStart = { handler.isEnabled = true },
            onStop = { handler.isEnabled = false },
            onDestroy = handler::destroy,
        )
    }

    return handler.dispatcher
}

internal fun NavigationEventDispatcher.childNavigationEventDispatcher(
    isEnabled: Boolean = true,
    priority: NavigationEventPriority = NavigationEventPriority.Default,
): ChildNavigationEventDispatcher =
    DefaultChildNavigationEventDispatcher(
        parent = this,
        isEnabled = isEnabled,
        priority = priority,
    )
