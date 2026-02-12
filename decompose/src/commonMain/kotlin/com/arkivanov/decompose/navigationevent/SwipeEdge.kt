package com.arkivanov.decompose.navigationevent

import androidx.navigationevent.NavigationEvent
import kotlin.jvm.JvmInline

/**
 * Defines the swipe edge of a [NavigationEvent].
 */
@JvmInline
value class SwipeEdge private constructor(private val value: Int) {

    companion object {
        val Left: SwipeEdge = SwipeEdge(NavigationEvent.EDGE_LEFT)
        val Right: SwipeEdge = SwipeEdge(NavigationEvent.EDGE_RIGHT)
        val None: SwipeEdge = SwipeEdge(NavigationEvent.EDGE_NONE)
    }
}
