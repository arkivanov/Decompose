@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetbrains.animation.page

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
    key: T,
    animationSpec: FiniteAnimationSpec<Float>,
    arranger: PageArranger<T>,
    animator: PageAnimator<T>,
    content: @Composable (key: T) -> Unit
) {
    val keys = remember { MutableKeys(newKey = key) }

    if (key != keys.newKey) {
        keys.oldKey = keys.newKey
        keys.newKey = key
    }

    val newKey = keys.newKey
    val oldKey = keys.oldKey

    PageAnimation(
        oldKey = oldKey,
        newKey = newKey,
        animationSpec = animationSpec,
        arrangement = if (oldKey == null) PageArrangement.FOLLOWING else arranger(newKey, oldKey),
        animator = animator,
        content = content
    )
}

@Composable
private fun <T : Any> PageAnimation(
    oldKey: T?,
    newKey: T,
    animationSpec: AnimationSpec<Float>,
    arrangement: PageArrangement,
    animator: PageAnimator<T>,
    content: @Composable (key: T) -> Unit
) {
    val animationState = remember(newKey) { AnimationState(if (oldKey == null) 1F else 0F) }

    var items by remember(newKey) {
        mutableStateOf(
            listOfNotNull(
                if (oldKey != null) {
                    AnimationItem(
                        key = oldKey,
                        arrangement = arrangement.invert(),
                        direction = PageAnimationDirection.EXIT
                    )
                } else {
                    null
                },
                AnimationItem(
                    key = newKey,
                    arrangement = arrangement,
                    direction = PageAnimationDirection.ENTER
                )
            ).sortedBy { it.arrangement }
        )
    }

    LaunchedEffect(newKey) {
        animationState.animateTo(
            targetValue = 1F,
            animationSpec = animationSpec,
            sequentialAnimation = !animationState.isFinished
        )

        items = items.filter { it.key == newKey }
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

                animator(item.key, factor, item.arrangement, item.direction) { modifier ->
                    Box(modifier) {
                        content(item.key)
                    }
                }
            }
        }
    }
}

private class AnimationItem<T>(
    val key: T,
    val arrangement: PageArrangement,
    val direction: PageAnimationDirection
)

private class MutableKeys<T : Any>(
    var newKey: T
) {
    var oldKey: T? = null
}
