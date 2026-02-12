package com.arkivanov.decompose.navigationevent

import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.isDestroyed
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe

internal interface ChildNavigationEventDispatcher {

    val dispatcher: NavigationEventDispatcher
    var isEnabled: Boolean

    fun start()
    fun stop()
    fun destroy()
}

internal fun NavigationEventDispatcher.child(
    lifecycle: Lifecycle? = null,
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
): NavigationEventDispatcher {
    val handler = childNavigationEventDispatcher(isEnabled = false, priority = priority)

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

    return handler.dispatcher
}

internal fun NavigationEventDispatcher.childNavigationEventDispatcher(
    isEnabled: Boolean = true,
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
): ChildNavigationEventDispatcher =
    DefaultChildNavigationEventDispatcher(
        parent = this,
        isEnabled = isEnabled,
        priority = priority,
    )
