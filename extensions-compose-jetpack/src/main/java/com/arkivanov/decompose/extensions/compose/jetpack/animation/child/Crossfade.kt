package com.arkivanov.decompose.extensions.compose.jetpack.animation.child

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.FiniteAnimationSpec
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.ChildAnimation

/**
 * A simple crossfade animation between children. See [Crossfade] for details.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> crossfade(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec
): ChildAnimation<C, T> =
    { routerState, content ->
        Crossfade(
            targetState = routerState.activeChild,
            animationSpec = animationSpec,
            content = content
        )
    }
