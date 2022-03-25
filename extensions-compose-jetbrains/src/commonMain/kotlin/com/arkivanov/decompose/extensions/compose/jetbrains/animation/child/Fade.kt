package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import com.arkivanov.decompose.ExperimentalDecomposeApi
import kotlin.math.abs

/**
 * A simple fading animation. Appearing children's `alpha` is animated from 0.0 to 1.0.
 * Disappearing children's `alpha` is animated from 1.0 to 0.0.
 */
@ExperimentalDecomposeApi
fun fade(animationSpec: FiniteAnimationSpec<Float> = tween()): ChildAnimator =
    childAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(Modifier.alpha(1F - abs(factor)))
    }
