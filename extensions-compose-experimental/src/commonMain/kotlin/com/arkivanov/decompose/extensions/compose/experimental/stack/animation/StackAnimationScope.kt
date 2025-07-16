package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.runtime.Stable
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction

/**
 * A scope interface for [StackAnimation], extends [AnimatedVisibilityScope].
 * Allows better UI customization during stack animations.
 */
@ExperimentalDecomposeApi
@Stable
interface StackAnimationScope : AnimatedVisibilityScope {

    /**
     * Returns a [Direction] of the stack animation running for the screen in
     * this scope, or `null` if no animation is currently running.
     *
     * This property is observable in Compose, meaning the composition will be
     * notified when the value changes.
     */
    val stackAnimationDirection: Direction?
}
