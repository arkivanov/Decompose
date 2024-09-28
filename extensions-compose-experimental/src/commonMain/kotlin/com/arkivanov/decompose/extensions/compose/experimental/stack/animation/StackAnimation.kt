package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
import com.arkivanov.decompose.router.stack.ChildStack

/**
 * Tracks the [ChildStack] changes and animates between child widget.
 */
@ExperimentalDecomposeApi
fun interface StackAnimation<C : Any, T : Any> {

    @Composable
    operator fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable AnimatedVisibilityScope.(child: Child.Created<C, T>) -> Unit,
    )
}

/**
 * Creates an implementation of [StackAnimation] that allows different [StackAnimator]s.
 *
 * @param disableInputDuringAnimation disables input and touch events while animating, default value is `true`.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildStack],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is *not* `null`, and disabled if the returned value is `null`.
 * @param selector provides an optional [StackAnimator] for the current [Child], other [Child] and [Direction].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> stackAnimation(
    disableInputDuringAnimation: Boolean = true,
    predictiveBackParams: (ChildStack<C, T>) -> PredictiveBackParams? = { null },
    selector: (child: Child.Created<C, T>, otherChild: Child.Created<C, T>, direction: Direction) -> StackAnimator?,
): StackAnimation<C, T> =
    DefaultStackAnimation(
        disableInputDuringAnimation = disableInputDuringAnimation,
        predictiveBackParams = predictiveBackParams,
        selector = selector,
    )

/**
 * Creates an implementation of [StackAnimation] with the provided [StackAnimator].
 *
 * @param animator an optional [StackAnimator] to be used for animation, default is [fade].
 * @param disableInputDuringAnimation disables input and touch events while animating, default value is `true`.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildStack],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is not `null`, and disabled if the returned value is `null`.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> stackAnimation(
    animator: StackAnimator? = fade(),
    disableInputDuringAnimation: Boolean = true,
    predictiveBackParams: (ChildStack<C, T>) -> PredictiveBackParams? = { null },
): StackAnimation<C, T> =
    DefaultStackAnimation(
        disableInputDuringAnimation = disableInputDuringAnimation,
        predictiveBackParams = predictiveBackParams,
        selector = { _, _, _ -> animator },
    )
