package com.arkivanov.decompose.extensions.compose

import androidx.navigationevent.NavigationEvent
import com.arkivanov.decompose.navigationevent.SwipeEdge

internal fun SwipeEdge.Companion.fromJetpack(swipeEdge: Int): SwipeEdge =
    when (swipeEdge) {
        NavigationEvent.EDGE_LEFT -> SwipeEdge.Left
        NavigationEvent.EDGE_RIGHT -> SwipeEdge.Right
        NavigationEvent.EDGE_NONE -> SwipeEdge.None
        else -> SwipeEdge.None
    }
