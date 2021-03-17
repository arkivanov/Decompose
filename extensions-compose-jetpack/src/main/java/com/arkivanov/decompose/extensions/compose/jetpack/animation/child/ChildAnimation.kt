package com.arkivanov.decompose.extensions.compose.jetpack.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.page.PageAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.page.PageAnimator
import com.arkivanov.decompose.extensions.compose.jetpack.animation.page.PageArrangement

internal val defaultChildAnimationSpec: FiniteAnimationSpec<Float> = tween()

/**
 * A handy API for the [Children][com.arkivanov.decompose.extensions.compose.jetpack.Children] animations
 *
 * @param animationSpec a [FiniteAnimationSpec] to configure the animation
 * @param animator see [PageAnimator] for details
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> childAnimation(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec,
    animator: PageAnimator<Child.Created<C, T>>
): ChildAnimation<C, T> =
    { routerState, content ->
        val stack = routerState.backStack + routerState.activeChild

        PageAnimation(
            key = routerState.activeChild,
            animationSpec = animationSpec,
            arranger = { new, old ->
                val indexOfNew = stack.indexOf(new).takeIf { it >= 0 } ?: Int.MAX_VALUE
                val indexOfOld = stack.indexOf(old).takeIf { it >= 0 } ?: Int.MAX_VALUE
                if (indexOfNew >= indexOfOld) PageArrangement.FOLLOWING else PageArrangement.PREVIOUS
            },
            animator = animator,
            content = content
        )
    }
