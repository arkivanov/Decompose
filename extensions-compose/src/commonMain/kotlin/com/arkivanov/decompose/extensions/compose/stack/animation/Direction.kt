package com.arkivanov.decompose.extensions.compose.stack.animation

/**
 * Represents a direction in which child widgets are animated.
 */
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

val Direction.isEnter: Boolean
    get() =
        when (this) {
            Direction.ENTER_FRONT,
            Direction.ENTER_BACK -> true

            Direction.EXIT_FRONT,
            Direction.EXIT_BACK -> false
        }

val Direction.isExit: Boolean
    get() = !isEnter

val Direction.isFront: Boolean
    get() =
        when (this) {
            Direction.ENTER_FRONT,
            Direction.EXIT_FRONT -> true

            Direction.ENTER_BACK,
            Direction.EXIT_BACK -> false
        }

val Direction.isBack: Boolean
    get() = !isFront
