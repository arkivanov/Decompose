@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.RouterState

/**
 * Tracks the [RouterState] changes and animates between child widget.
 */
@Deprecated(
    message = "Use StackAnimation instead",
    replaceWith = ReplaceWith(
        "StackAnimation",
        "com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimation",
    ),
)
@ExperimentalDecomposeApi
interface ChildAnimation<C : Any, T : Any> {

    @Composable
    operator fun invoke(state: RouterState<C, T>, modifier: Modifier, content: @Composable (child: Child.Created<C, T>) -> Unit)
}

/**
 * Factory function for [ChildAnimation] while `fun interface` with a `@Composable` function
 * is not supported - [b/221488059](https://issuetracker.google.com/issues/221488059).
 */
@Deprecated(
    message = "Use StackAnimation instead",
    replaceWith = ReplaceWith(
        "StackAnimation(content = content)",
        "com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimation",
    ),
)
@Suppress("FunctionName") // Factory function
@ExperimentalDecomposeApi
inline fun <C : Any, T : Any> ChildAnimation(
    crossinline content: @Composable (
        state: RouterState<C, T>,
        modifier: Modifier,
        content: @Composable (child: Child.Created<C, T>) -> Unit
    ) -> Unit
): ChildAnimation<C, T> =
    object : ChildAnimation<C, T> {
        @Composable
        override operator fun invoke(
            state: RouterState<C, T>,
            modifier: Modifier,
            content: @Composable (child: Child.Created<C, T>) -> Unit
        ) {
            content(state, modifier, content)
        }
    }

/**
 * Creates an implementation of [ChildAnimation] that allows different [ChildAnimator]s.
 *
 * @param selector provides a [ChildAnimator] for [Child] and [Direction].
 */
@Deprecated(
    message = "Use stackAnimation instead",
    replaceWith = ReplaceWith(
        "stackAnimation(selector = selector)",
        "com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation",
    ),
)
@ExperimentalDecomposeApi
fun <C : Any, T : Any> childAnimation(
    selector: (child: Child.Created<C, T>, direction: Direction) -> ChildAnimator
): ChildAnimation<C, T> =
    DefaultChildAnimation(selector)

/**
 * Creates an implementation of [ChildAnimation] with the provided [ChildAnimator].
 *
 * @param animator a [ChildAnimator] to be used for animation, default is [fade].
 */
@Deprecated(
    message = "Use stackAnimation instead",
    replaceWith = ReplaceWith(
        "stackAnimation(animator = animator)",
        "com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation",
    ),
)
@ExperimentalDecomposeApi
fun <C : Any, T : Any> childAnimation(animator: ChildAnimator = fade()): ChildAnimation<C, T> =
    childAnimation { _, _ -> animator }
