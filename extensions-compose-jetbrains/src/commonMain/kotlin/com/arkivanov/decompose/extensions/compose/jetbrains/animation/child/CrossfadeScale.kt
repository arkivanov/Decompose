package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.scale
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.page.PageArrangement

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
    childAnimation(animationSpec = animationSpec) { _, factor, arrangement, _, content ->
        content(
            Modifier
                .scale(
                    when (arrangement) {
                        PageArrangement.PREVIOUS -> exitScaleFactor + (1F - exitScaleFactor) * factor
                        PageArrangement.FOLLOWING -> enterScaleFactor - (enterScaleFactor - 1F) * factor
                    }
                )
                .alpha(factor)
        )
    }
