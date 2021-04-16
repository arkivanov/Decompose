@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetpack.animation.page

import androidx.compose.animation.core.AnimationSpec
import androidx.compose.animation.core.AnimationState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.animateTo
import androidx.compose.animation.core.isFinished
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.arkivanov.decompose.ExperimentalDecomposeApi

@Composable
internal fun <T : Any> PageAnimation(
    page: T,
    key: Any,
    animationSpec: FiniteAnimationSpec<Float>,
    arranger: PageArranger<T>,
    animator: PageAnimator<T>,
    content: @Composable (key: T) -> Unit
) {
    PageAnimation(
        page = KeyedPage(page = page, key = key),
        animationSpec = animationSpec,
        arranger = arranger,
        animator = animator,
        content = content
    )
}

@Composable
private fun <T : Any> PageAnimation(
    page: KeyedPage<T>,
    animationSpec: FiniteAnimationSpec<Float>,
    arranger: PageArranger<T>,
    animator: PageAnimator<T>,
    content: @Composable (page: T) -> Unit
) {
    val pages = remember { MutablePages(newPage = page) }

    if (page != pages.newPage) {
        pages.oldPage = pages.newPage
        pages.newPage = page
    }

    val newPage: KeyedPage<T> = pages.newPage
    val oldPage: KeyedPage<T>? = pages.oldPage

    PageAnimation(
        oldPage = oldPage,
        newPage = newPage,
        animationSpec = animationSpec,
        arrangement = if (oldPage == null) PageArrangement.FOLLOWING else arranger(newPage.page, oldPage.page),
        animator = animator,
        content = content
    )
}

@Composable
private fun <T : Any> PageAnimation(
    oldPage: KeyedPage<T>?,
    newPage: KeyedPage<T>,
    animationSpec: AnimationSpec<Float>,
    arrangement: PageArrangement,
    animator: PageAnimator<T>,
    content: @Composable (page: T) -> Unit
) {
    val animationState = remember(newPage.key) { AnimationState(if (oldPage == null) 1F else 0F) }

    var items by remember(newPage.key) {
        mutableStateOf(
            listOfNotNull(
                if (oldPage != null) {
                    AnimationItem(
                        page = oldPage.page,
                        key = oldPage.key,
                        arrangement = arrangement.invert(),
                        direction = PageAnimationDirection.EXIT
                    )
                } else {
                    null
                },
                AnimationItem(
                    page = newPage.page,
                    key = newPage.key,
                    arrangement = arrangement,
                    direction = PageAnimationDirection.ENTER
                )
            ).sortedBy { it.arrangement }
        )
    }

    LaunchedEffect(newPage.key) {
        animationState.animateTo(
            targetValue = 1F,
            animationSpec = animationSpec,
            sequentialAnimation = !animationState.isFinished
        )

        items = items.filter { it.key == newPage.key }
    }

    PageAnimationFrame(
        items = items,
        animationValue = animationState.value,
        animator = animator,
        content = content
    )
}

private fun PageArrangement.invert(): PageArrangement =
    when (this) {
        PageArrangement.PREVIOUS -> PageArrangement.FOLLOWING
        PageArrangement.FOLLOWING -> PageArrangement.PREVIOUS
    }

@Composable
private fun <T : Any> PageAnimationFrame(
    items: List<AnimationItem<T>>,
    animationValue: Float,
    animator: PageAnimator<T>,
    content: @Composable (key: T) -> Unit
) {
    BoxWithConstraints {
        items.forEach { item ->
            key(item.key) {
                val factor =
                    when (item.direction) {
                        PageAnimationDirection.ENTER -> animationValue
                        PageAnimationDirection.EXIT -> 1F - animationValue
                    }

                animator(item.page, factor, item.arrangement, item.direction) { modifier ->
                    Box(modifier) {
                        content(item.page)
                    }
                }
            }
        }
    }
}

private data class KeyedPage<out T>(
    val page: T,
    val key: Any
)

private class AnimationItem<out T>(
    val page: T,
    val key: Any,
    val arrangement: PageArrangement,
    val direction: PageAnimationDirection
)

private class MutablePages<T : Any>(
    var newPage: T
) {
    var oldPage: T? = null
}
