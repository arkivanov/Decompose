package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import kotlin.math.abs

/**
 * A simple fading animation. Appearing children's `alpha` is animated from [minAlpha] to 1.0.
 * Disappearing children's `alpha` is animated from 1.0 to [minAlpha].
 */
fun fade(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    minAlpha: Float = 0F,
): StackAnimator =
    stackAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(Modifier.alpha(getFadeAlpha(factor = factor, minAlpha = minAlpha)))
    }

internal fun getFadeAlpha(factor: Float, minAlpha: Float): Float =
    (1F - abs(factor) * (1F - minAlpha)).coerceIn(minimumValue = 0F, maximumValue = 1F)
