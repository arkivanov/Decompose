package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Determines the direction of a child animation
 */
@ExperimentalDecomposeApi
enum class ChildAnimationDirection {

    /**
     * The child is disappearing
     */
    EXIT,

    /**
     * The child is appearing
     */
    ENTER
}
