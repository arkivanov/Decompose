@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetpack.animation.page

import androidx.compose.animation.core.AnimationState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.animateTo
import androidx.compose.animation.core.isFinished
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.BoxWithConstraintsScope
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.arkivanov.decompose.ExperimentalDecomposeApi
import kotlinx.coroutines.yield

@Suppress("TransitionPropertiesLabel")
@Composable
internal fun <T : Any> PageAnimation(
    targetPage: T,
    animationSpec: FiniteAnimationSpec<Float>,
    arranger: PageArranger<T>,
    content: @Composable BoxWithConstraintsScope.(page: T, factor: Float, PageArrangement, PageAnimationDirection) -> Unit
) {
    var pages by remember { mutableStateOf<Pair<T, T?>>(targetPage to null) }
    if (targetPage != pages.first) {
        pages = targetPage to pages.first
    }

    val (new, old) = pages

    val animationState = remember(new) { AnimationState(if (old == null) 1F else 0F) }

    LaunchedEffect(new) {
        animationState.animateTo(
            targetValue = 1F,
            animationSpec = animationSpec,
            sequentialAnimation = !animationState.isFinished
        )

        pages = pages.copy(second = null)
    }

    val items = rememberAnimationItems(targetPage = new, previousPage = old, arranger = arranger)

    BoxWithConstraints {
        items.forEach { item ->
            val factor =
                when (item.direction) {
                    PageAnimationDirection.ENTER -> animationState.value
                    PageAnimationDirection.EXIT -> 1F - animationState.value
                }

            content(item.page, factor, item.arrangement, item.direction)
        }
    }
}

@Composable
private fun <T : Any> rememberAnimationItems(
    targetPage: T,
    previousPage: T?,
    arranger: PageArranger<T>,
): List<AnimationItem<T>> =
    remember(targetPage, previousPage) {
        if (previousPage == null) {
            listOf(AnimationItem(targetPage, PageArrangement.FOLLOWING, PageAnimationDirection.ENTER))
        } else {
            listOf(
                AnimationItem(previousPage, arranger(previousPage, targetPage), PageAnimationDirection.EXIT),
                AnimationItem(targetPage, arranger(targetPage, previousPage), PageAnimationDirection.ENTER),
            ).sortedBy { it.arrangement }
        }
    }

private class AnimationItem<out T : Any>(
    val page: T,
    val arrangement: PageArrangement,
    val direction: PageAnimationDirection,
)
