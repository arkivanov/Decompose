package com.arkivanov.decompose.extensions.compose.jetpack.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.foundation.layout.Box
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.scale
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A crossfade-scale animation. Entering children are scaling from `enterScaleFactor` to 1.0.
 * Exiting children are scaling from 1.0 to `exitScaleFactor`.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> crossfadeScale(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec,
    enterScaleFactor: Float = 1.15F,
    exitScaleFactor: Float = 0.95F
): ChildAnimation<C, T> =
    childAnimation(animationSpec = animationSpec) { _, factor, placement, _, content ->
        Box(
            modifier = Modifier
                .scale(
                    when (placement) {
                        ChildPlacement.BACK -> exitScaleFactor + (1F - exitScaleFactor) * factor
                        ChildPlacement.FRONT -> enterScaleFactor - (enterScaleFactor - 1F) * factor
                    }
                )
                .alpha(factor)
        ) {
            content()
        }
    }
