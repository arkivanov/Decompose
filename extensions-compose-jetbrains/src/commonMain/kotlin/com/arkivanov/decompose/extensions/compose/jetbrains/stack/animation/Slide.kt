package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout

/**
 * A simple sliding animation. Children enter from one side and exit to another side.
 */
@Deprecated(
    message = "Please use the new slide StackAnimator with orientation specification",
    level = DeprecationLevel.HIDDEN
)
fun slide(animationSpec: FiniteAnimationSpec<Float> = tween()): StackAnimator =
    stackAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(Modifier.offsetXFactor(factor = factor))
    }

/**
 * A simple sliding animation. Children enter from one side and exit to another side.
 */
fun slide(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    orientation: Orientation = Orientation.Horizontal,
): StackAnimator =
    stackAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(
            when (orientation) {
                Orientation.Horizontal -> Modifier.offsetXFactor(factor)
                Orientation.Vertical -> Modifier.offsetYFactor(factor)
            }
        )
    }

private fun Modifier.offsetXFactor(factor: Float): Modifier =
    layout { measurable, constraints ->
        val placeable = measurable.measure(constraints)

        layout(placeable.width, placeable.height) {
            placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt(), y = 0)
        }
    }

private fun Modifier.offsetYFactor(factor: Float): Modifier =
    layout { measurable, constraints ->
        val placeable = measurable.measure(constraints)

        layout(placeable.width, placeable.height) {
            placeable.placeRelative(x = 0, y = (placeable.height.toFloat() * factor).toInt())
        }
    }
