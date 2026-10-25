package com.arkivanov.decompose.navigationevent

import androidx.navigationevent.NavigationEvent
import kotlin.jvm.JvmInline

/**
 * Defines the edge of the screen of a [NavigationEvent].
 */
@JvmInline
value class SwipeEdge private constructor(private val value: Int) {

    companion object {
        /** Corresponds to [NavigationEvent.EDGE_LEFT]. */
        val Left: SwipeEdge = SwipeEdge(NavigationEvent.EDGE_LEFT)

        /** Corresponds to [NavigationEvent.EDGE_RIGHT]. */
        val Right: SwipeEdge = SwipeEdge(NavigationEvent.EDGE_RIGHT)

        /** Corresponds to [NavigationEvent.EDGE_NONE]. */
        val None: SwipeEdge = SwipeEdge(NavigationEvent.EDGE_NONE)
    }
}
