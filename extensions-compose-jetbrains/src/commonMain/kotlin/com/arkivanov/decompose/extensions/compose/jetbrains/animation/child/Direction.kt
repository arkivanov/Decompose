package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Represents a direction in which child widgets are animated.
 */
@ExperimentalDecomposeApi
enum class Direction {

    /**
     * The child is not being animated.
     */
    IDLE,

    /**
     * The child is entering from the front (push).
     */
    ENTER_FRONT,

    /**
     * The child is exiting to the front (pop).
     */
    EXIT_FRONT,

    /**
     * The child is entering from the back (move from the backstack).
     */
    ENTER_BACK,

    /**
     * The child is exiting to the back (move to the backstack).
     */
    EXIT_BACK,
}
