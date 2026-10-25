package com.arkivanov.decompose.navigationevent

import androidx.navigationevent.NavigationEventDispatcher
import kotlin.jvm.JvmInline

/**
 * Defines the priority of a [NavigationEventHandler][androidx.navigationevent.NavigationEventHandler].
 */
@JvmInline
value class NavigationEventPriority private constructor(internal val value: Int) {

    companion object {
        /** Corresponds to [NavigationEventDispatcher.PRIORITY_DEFAULT]. */
        val Default: NavigationEventPriority = NavigationEventPriority(NavigationEventDispatcher.PRIORITY_DEFAULT)

        /** Corresponds to [NavigationEventDispatcher.PRIORITY_OVERLAY]. */
        val Overlay: NavigationEventPriority = NavigationEventPriority(NavigationEventDispatcher.PRIORITY_OVERLAY)
    }
}
