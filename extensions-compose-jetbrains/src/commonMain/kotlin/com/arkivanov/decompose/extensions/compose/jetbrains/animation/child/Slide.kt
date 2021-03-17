package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.foundation.layout.offset
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.page.PageArrangement

/**
 * A simple sliding animation. Children enter from the right side and exit from the left.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> slide(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec,
): ChildAnimation<C, T> =
    childAnimation(animationSpec = animationSpec) { _, factor, arrangement, _, content ->
        content(
            Modifier.offset(
                x = when (arrangement) {
                    PageArrangement.PREVIOUS -> maxWidth * (factor - 1F)
                    PageArrangement.FOLLOWING -> maxWidth * (1F - factor)
                }
            )
        )
    }
