package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.runtime.remember
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.page.PageAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.page.PageAnimator
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.page.PageArrangement
import com.arkivanov.decompose.extensions.compose.jetbrains.utils.WeakHashMap

internal val defaultChildAnimationSpec: FiniteAnimationSpec<Float> = tween()

/**
 * A handy API for the [Children][com.arkivanov.decompose.extensions.compose.jetbrains.Children] animations
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
        val indicesMap = remember { WeakHashMap<Child<C, T>, Int>() }
        routerState.backStack.forEachIndexed { index, child ->
            indicesMap[child] = index
        }
        indicesMap[routerState.activeChild] = routerState.backStack.size

        PageAnimation(
            page = routerState.activeChild,
            key = routerState.activeChild.configuration,
            animationSpec = animationSpec,
            arranger = { new, old ->
                val indexOfNew = indicesMap[new] ?: Int.MAX_VALUE
                val indexOfOld = indicesMap[old] ?: Int.MAX_VALUE
                if (indexOfNew >= indexOfOld) PageArrangement.FOLLOWING else PageArrangement.PREVIOUS
            },
            animator = animator,
            content = content
        )
    }
