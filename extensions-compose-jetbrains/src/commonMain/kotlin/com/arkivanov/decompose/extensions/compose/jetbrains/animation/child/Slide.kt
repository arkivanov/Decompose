package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.foundation.layout.Box
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.ChildAnimation

/**
 * A simple sliding animation. Children enter from the right side and exit from the left.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> slide(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec,
): ChildAnimation<C, T> =
    childAnimation(animationSpec = animationSpec) { _, factor, placement, _, content ->
        Box(
            modifier = Modifier.offsetXFactor(
                factor = when (placement) {
                    ChildPlacement.BACK -> factor - 1F
                    ChildPlacement.FRONT -> 1F - factor
                }
            )
        ) {
            content()
        }
    }

private fun Modifier.offsetXFactor(factor: Float): Modifier =
    layout { measurable, constraints ->
        val placeable = measurable.measure(constraints)

        layout(placeable.width, placeable.height) {
            placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt(), y = 0)
        }
    }
