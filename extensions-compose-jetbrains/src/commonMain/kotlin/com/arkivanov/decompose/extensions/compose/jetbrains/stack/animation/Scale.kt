package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale

/**
 * A simple scaling animation. Front (above) children are scaling from [frontFactor] to 1.0.
 * Back (below) children are scaling from 1.0 to [backFactor].
 */
fun scale(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    frontFactor: Float = 1.15F,
    backFactor: Float = 0.95F,
): StackAnimator =
    stackAnimator(animationSpec = animationSpec) { factor, _, content ->
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
