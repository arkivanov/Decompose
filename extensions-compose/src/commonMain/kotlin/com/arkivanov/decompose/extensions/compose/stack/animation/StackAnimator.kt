package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

/**
 * Animates a child widget in the given [Direction].
 */
fun interface StackAnimator {

    /**
     * Animates the returned [Modifier] in the given [Direction].
     *
     * @param direction the [Direction] in which the animation should run.
     */
    @Composable
    fun StackAnimationScope.animate(direction: Direction): Modifier
}

/**
 * Creates an implementation of [StackAnimator] with a convenient frame-by-frame rendering.
 *
 * @param animationSpec a [FiniteAnimationSpec] to configure the animation.
 * @param frame returns a [Modifier] for the given `factor` and [Direction]. Called for every animation frame.
 * The `factor` argument changes as follows:
 * - From 1F to 0F for [Direction.ENTER_FRONT]
 * - From 0F to 1F for [Direction.EXIT_FRONT]
 * - From -1F to 0F for [Direction.ENTER_BACK]
 * - From 0F to -1F for [Direction.EXIT_BACK]
 */
fun stackAnimator(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    frame: @Composable (factor: Float, direction: Direction) -> Modifier,
): StackAnimator =
    DefaultStackAnimator(
        animationSpec = animationSpec,
        frame = frame
    )

/**
 * Inverts child widgets animation direction as follows:
 * - [Direction.ENTER_FRONT] -> [Direction.ENTER_BACK]
 * - [Direction.EXIT_FRONT] -> [Direction.EXIT_BACK]
 * - [Direction.ENTER_BACK] -> [Direction.ENTER_FRONT]
 * - [Direction.EXIT_BACK] -> [Direction.EXIT_FRONT]
 * @return the inverted [StackAnimator]
 */
fun StackAnimator.inverted(): StackAnimator =
    StackAnimator { direction ->
        animate(
            direction = when (direction) {
                Direction.ENTER_FRONT -> Direction.ENTER_BACK
                Direction.EXIT_FRONT -> Direction.EXIT_BACK
                Direction.ENTER_BACK -> Direction.ENTER_FRONT
                Direction.EXIT_BACK -> Direction.EXIT_FRONT
            },
        )
    }

/**
 * Combines (merges) the receiver [StackAnimator] with the [other] [StackAnimator].
 */
operator fun StackAnimator.plus(other: StackAnimator): StackAnimator =
    PlusStackAnimator(first = this, second = other)

/*
 * Can't be anonymous. See:
 * https://github.com/JetBrains/compose-jb/issues/2688
 * https://github.com/JetBrains/compose-jb/issues/2612
 */
private class PlusStackAnimator(
    private val first: StackAnimator,
    private val second: StackAnimator,
) : StackAnimator {

    @Composable
    override fun StackAnimationScope.animate(direction: Direction): Modifier {
        val firstModifier = with(first) { animate(direction) }
        val secondModifier = with(second) { animate(direction) }

        return firstModifier.then(secondModifier)
    }
}
