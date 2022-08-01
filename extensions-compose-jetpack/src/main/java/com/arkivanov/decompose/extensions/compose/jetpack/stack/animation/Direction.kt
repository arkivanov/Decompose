package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Represents a direction in which child widgets are animated.
 */
@ExperimentalDecomposeApi
enum class Direction {

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

@ExperimentalDecomposeApi
val Direction.isEnter: Boolean
    get() =
        when (this) {
            Direction.ENTER_FRONT,
            Direction.ENTER_BACK -> true
            Direction.EXIT_FRONT,
            Direction.EXIT_BACK -> false
        }

@ExperimentalDecomposeApi
val Direction.isExit: Boolean
    get() = !isEnter

@ExperimentalDecomposeApi
val Direction.isFront: Boolean
    get() =
        when (this) {
            Direction.ENTER_FRONT,
            Direction.EXIT_FRONT -> true
            Direction.ENTER_BACK,
            Direction.EXIT_BACK -> false
        }

@ExperimentalDecomposeApi
val Direction.isBack: Boolean
    get() = !isFront
