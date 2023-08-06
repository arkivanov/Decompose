package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout
import androidx.compose.ui.platform.LocalLayoutDirection

/**
 * A simple sliding animation. Children enter from one side and exit to another side.
 */
fun slide(
    animationSpec: FiniteAnimationSpec<Float> = tween(),
    slideDirection: SlideDirection = SlideDirection.EndToStart
): StackAnimator =
    stackAnimator(animationSpec = animationSpec) { factor, _, content ->
        content(slideDirection.offset(factor, LocalLayoutDirection.current))
    }
