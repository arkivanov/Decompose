package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.stack.ChildStack

/**
 * Tracks the [ChildStack] changes and animates between child widget.
 */
fun interface StackAnimation<C : Any, T : Any> {

    @Composable
    operator fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    )
}

/**
 * Creates an implementation of [StackAnimation] that allows different [StackAnimator]s.
 *
 * @param disableInputDuringAnimation disables input and touch events while animating, default value is `true`.
 * @param selector provides a [StackAnimator] for current [Child], other [Child] and [Direction].
 */
fun <C : Any, T : Any> stackAnimation(
    disableInputDuringAnimation: Boolean = true,
    selector: (child: Child.Created<C, T>, otherChild: Child.Created<C, T>, direction: Direction) -> StackAnimator?,
): StackAnimation<C, T> =
    DefaultStackAnimation(
        disableInputDuringAnimation = disableInputDuringAnimation,
        selector = selector,
    )

/**
 * Creates an implementation of [StackAnimation] with the provided [StackAnimator].
 *
 * @param animator a [StackAnimator] to be used for animation, default is [fade].
 * @param disableInputDuringAnimation disables input and touch events while animating, default value is `true`.
 */
fun <C : Any, T : Any> stackAnimation(
    animator: StackAnimator = fade(),
    disableInputDuringAnimation: Boolean = true,
): StackAnimation<C, T> =
    stackAnimation(disableInputDuringAnimation = disableInputDuringAnimation) { _, _, _ -> animator }
