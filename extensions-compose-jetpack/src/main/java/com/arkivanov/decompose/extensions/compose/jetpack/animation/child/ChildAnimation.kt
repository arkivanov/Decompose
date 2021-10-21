package com.arkivanov.decompose.extensions.compose.jetpack.animation.child

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.key
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
        PageAnimation(
            targetPage = ChildPage(routerState.activeChild, routerState.backStack.size),
            animationSpec = animationSpec,
            arranger = { new, old -> if (new.index >= old.index) PageArrangement.FOLLOWING else PageArrangement.PREVIOUS }
        ) { page, factor, arrangement, direction ->
            key(page.page.configuration) {
                animator(page.page, factor, arrangement, direction) { modifier ->
                    Box(modifier) {
                        content(page.page)
                    }
                }
            }
        }
    }

private data class ChildPage<out C : Any, out T : Any>(
    val page: Child.Created<C, T>,
    val index: Int,
)
