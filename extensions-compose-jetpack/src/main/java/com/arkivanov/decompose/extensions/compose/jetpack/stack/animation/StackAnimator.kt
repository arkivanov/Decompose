package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Animates a child widget in the given [Direction].
 */
@ExperimentalDecomposeApi
fun interface StackAnimator {

    /**
     * Animates the [content] in the given [Direction], and calls [onFinished] at the end.
     */
    @Composable
    operator fun invoke(
        direction: Direction,
        onFinished: () -> Unit,
        content: @Composable (Modifier) -> Unit,
    )
}

/**
 * Creates an implementation of [StackAnimator] with a convenient frame-by-frame rendering.
 *
 * @param animationSpec a [FiniteAnimationSpec] to configure the animation.
 * @param frame renders the `content` using the provided `factor` and [Direction]. Called for every animation frame.
 * The `factor` argument changes as follows:
 * - Always 0F for [Direction.IDLE]
 * - From 1F to 0F for [Direction.ENTER_FRONT]
 * - From 0F to 1F for [Direction.EXIT_FRONT]
 * - From -1F to 0F for [Direction.ENTER_BACK]
 * - From 0F to -1F for [Direction.EXIT_BACK]
 */
@ExperimentalDecomposeApi
fun stackAnimator(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    frame: @Composable (factor: Float, direction: Direction, content: @Composable (Modifier) -> Unit) -> Unit,
): StackAnimator =
    DefaultStackAnimator(
        animationSpec = animationSpec,
        frame = frame
    )

/**
 * Combines (merges) the receiver [StackAnimator] with the [other] [StackAnimator].
 */
@ExperimentalDecomposeApi
operator fun StackAnimator.plus(other: StackAnimator): StackAnimator =
    StackAnimator { direction, onFinished, content ->
        val finished = remember(direction) { BooleanArray(2) }

        this(
            direction = direction,
            onFinished = {
                finished[0] = true
                if (finished.all { it }) {
                    onFinished()
                }
            },
        ) { thisModifier ->
            other(
                direction = direction,
                onFinished = {
                    finished[1] = true
                    if (finished.all { it }) {
                        onFinished()
                    }
                },
            ) { otherModifier ->
                content(thisModifier.then(otherModifier))
            }
        }
    }
