package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A simple scaling animation. Front (above) children are scaling from [frontFactor] to 1.0.
 * Back (below) children are scaling from 1.0 to [backFactor].
 */
@ExperimentalDecomposeApi
fun scale(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    frontFactor: Float = 1.15F,
    backFactor: Float = 0.95F,
): ChildAnimator =
    childAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(
            Modifier.scale(
                if (factor >= 0F) {
                    factor * (frontFactor - 1F) + 1F
                } else {
                    factor * (1F - backFactor) + 1F
                }
            )
        )
    }
