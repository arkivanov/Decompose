@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack

/**
 * Tracks the [ChildStack] changes and animates between child widget.
 */
@ExperimentalDecomposeApi
interface StackAnimation<C : Any, T : Any> {

    @Composable
    operator fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    )
}

/**
 * Factory function for [StackAnimation] while `fun interface` with a `@Composable` function
 * is not supported - [b/221488059](https://issuetracker.google.com/issues/221488059).
 */
@Suppress("FunctionName") // Factory function
@ExperimentalDecomposeApi
inline fun <C : Any, T : Any> StackAnimation(
    crossinline content: @Composable (
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    ) -> Unit
): StackAnimation<C, T> =
    object : StackAnimation<C, T> {
        @Composable
        override operator fun invoke(
            stack: ChildStack<C, T>,
            modifier: Modifier,
            content: @Composable (child: Child.Created<C, T>) -> Unit,
        ) {
            content(stack, modifier, content)
        }
    }

/**
 * Creates an implementation of [StackAnimation] that allows different [StackAnimator]s.
 *
 * @param selector provides a [StackAnimator] for [Child] and [Direction].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> stackAnimation(
    selector: (child: Child.Created<C, T>, direction: Direction) -> StackAnimator,
): StackAnimation<C, T> =
    DefaultStackAnimation(selector)

/**
 * Creates an implementation of [StackAnimation] with the provided [StackAnimator].
 *
 * @param animator a [StackAnimator] to be used for animation, default is [fade].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> stackAnimation(animator: StackAnimator = fade()): StackAnimation<C, T> =
    stackAnimation { _, _ -> animator }
