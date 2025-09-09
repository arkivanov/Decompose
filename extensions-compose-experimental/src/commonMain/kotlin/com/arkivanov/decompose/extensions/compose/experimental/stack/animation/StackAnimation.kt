package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

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
        content: StackAnimationContent<C, T>,
    )
}

/**
 * This should be just an in-place Composable function.
 * Temporary workaround for [b/418516940](https://partnerissuetracker.corp.google.com/issues/418516940).
 * See [#874](https://github.com/arkivanov/Decompose/issues/874).
 */
@ExperimentalDecomposeApi
fun interface StackAnimationContent<C : Any, T : Any> {

    @Composable
    fun StackAnimationScope.Content(child: Child.Created<C, T>)
}

/**
 * Creates an implementation of [StackAnimation] that allows different [StackAnimator]s.
 *
 * @param disableInputDuringAnimation disables input and touch events while animating, default value is `true`.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildStack],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is *not* `null`, and disabled if the returned value is `null`.
 * @param selector provides an optional [StackAnimator] for the current [Child], other [Child], [Direction] and
 * `isPredictiveBack` flag.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> stackAnimation(
    disableInputDuringAnimation: Boolean = true,
    predictiveBackParams: (ChildStack<C, T>) -> PredictiveBackParams? = { null },
    selector: (
        child: Child.Created<C, T>,
        otherChild: Child.Created<C, T>,
        direction: Direction,
        isPredictiveBack: Boolean,
    ) -> StackAnimator?,
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
        selector = { _, _, _, _ -> animator },
    )
