package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout

/**
 * A simple sliding animation. Children enter from one side and exit to another side.
 */
fun slide(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    orientation: Orientation = Orientation.Horizontal
): StackAnimator =
    stackAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(Modifier.offset(factor = factor, orientation = orientation))
    }

private fun Modifier.offset(factor: Float, orientation: Orientation): Modifier = layout { measurable, constraints ->
    val placeable = measurable.measure(constraints)
    val (x, y) = when (orientation) {
        Orientation.Horizontal -> {
            (placeable.width.toFloat() * factor).toInt() to 0
        }
        Orientation.Vertical -> {
            0 to (placeable.height.toFloat() * factor).toInt()
        }
    }

    layout(placeable.width, placeable.height) {
        placeable.placeRelative(x = x, y = y)
    }
}
