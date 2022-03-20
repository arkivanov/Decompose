package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A simple sliding animation. Children enter from one side and exit to another side.
 */
@ExperimentalDecomposeApi
fun slide(animationSpec: FiniteAnimationSpec<Float> = tween()): ChildAnimator =
    childAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(Modifier.offsetXFactor(factor = factor))
    }

private fun Modifier.offsetXFactor(factor: Float): Modifier =
    layout { measurable, constraints ->
        val placeable = measurable.measure(constraints)

        layout(placeable.width, placeable.height) {
            placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt(), y = 0)
        }
    }
