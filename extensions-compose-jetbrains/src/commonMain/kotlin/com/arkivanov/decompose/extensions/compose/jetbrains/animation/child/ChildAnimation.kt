@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.AnimationState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.animateTo
import androidx.compose.animation.core.isFinished
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.ChildContent

internal val defaultChildAnimationSpec: FiniteAnimationSpec<Float> = tween()

/**
 * A handy API for the [Children][com.arkivanov.decompose.extensions.compose.jetbrains.Children] animations
 *
 * @param animationSpec a [FiniteAnimationSpec] to configure the animation
 * @param animator see [ChildAnimator] for details
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> childAnimation(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec,
    animator: ChildAnimator<C, T>
): ChildAnimation<C, T> =
    { routerState, modifier, content ->
        ChildAnimationImpl(
            targetPage = Page(routerState.activeChild, routerState.backStack.size),
            modifier = modifier,
            animationSpec = animationSpec,
            animator = animator,
            content = content
        )
    }

@Suppress("TransitionPropertiesLabel")
@Composable
private fun <C : Any, T : Any> ChildAnimationImpl(
    targetPage: Page<C, T>,
    modifier: Modifier,
    animationSpec: FiniteAnimationSpec<Float>,
    animator: ChildAnimator<C, T>,
    content: ChildContent<C, T>,
) {
    var pages: Pages<C, T> by remember { mutableStateOf(Pages(target = targetPage)) }
    if (targetPage.configuration != pages.target.configuration) {
        pages = Pages(target = targetPage, previous = pages.target)
    }

    val new = pages.target
    val old = pages.previous

    val animationState = remember(new.configuration) { AnimationState(if (old == null) 1F else 0F) }

    LaunchedEffect(new.configuration) {
        animationState.animateTo(
            targetValue = 1F,
            animationSpec = animationSpec,
            sequentialAnimation = !animationState.isFinished
        )

        pages = Pages(target = pages.target)
    }

    val items = rememberAnimationItems(targetPage = new, previousPage = old)

    Box(modifier = modifier) {
        items.forEach { item ->
            key(item.page.child.configuration) {
                animator(
                    item.page.child,
                    when (item.direction) {
                        ChildAnimationDirection.ENTER -> animationState.value
                        ChildAnimationDirection.EXIT -> 1F - animationState.value
                    },
                    item.placement,
                    item.direction
                ) {
                    content(item.page.child)
                }
            }
        }
    }
}

@Composable
private fun <C : Any, T : Any> rememberAnimationItems(
    targetPage: Page<C, T>,
    previousPage: Page<C, T>?
): List<AnimationItem<C, T>> =
    remember(targetPage.configuration, previousPage?.configuration) {
        when {
            previousPage == null ->
                listOf(AnimationItem(targetPage, ChildPlacement.BACK, ChildAnimationDirection.ENTER))

            targetPage.index >= previousPage.index ->
                listOf(
                    AnimationItem(previousPage, ChildPlacement.BACK, ChildAnimationDirection.EXIT),
                    AnimationItem(targetPage, ChildPlacement.FRONT, ChildAnimationDirection.ENTER),
                )

            else ->
                listOf(
                    AnimationItem(targetPage, ChildPlacement.BACK, ChildAnimationDirection.ENTER),
                    AnimationItem(previousPage, ChildPlacement.FRONT, ChildAnimationDirection.EXIT),
                )
        }
    }

private class Page<out C : Any, out T : Any>(
    val child: Child.Created<C, T>,
    val index: Int,
) {
    val configuration: C = child.configuration
}

private class Pages<out C : Any, out T : Any>(
    val target: Page<C, T>,
    val previous: Page<C, T>? = null,
)

private class AnimationItem<out C : Any, out T : Any>(
    val page: Page<C, T>,
    val placement: ChildPlacement,
    val direction: ChildAnimationDirection,
)
