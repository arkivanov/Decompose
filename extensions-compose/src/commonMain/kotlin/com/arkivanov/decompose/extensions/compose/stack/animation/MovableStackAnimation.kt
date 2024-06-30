package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.movableContentOf
import androidx.compose.runtime.remember
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi

internal class MovableStackAnimation<C : Any, T : Any>(
    disableInputDuringAnimation: Boolean,
    private val selector: (child: Child.Created<C, T>, otherChild: Child.Created<C, T>, direction: Direction) -> StackAnimator?,
) : AbstractStackAnimation<C, T>(disableInputDuringAnimation = disableInputDuringAnimation) {

    @OptIn(ExperimentalDecomposeApi::class)
    @Composable
    override fun Child(
        item: AnimationItem<C, T>,
        onFinished: () -> Unit,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    ) {
        val animator =
            remember(item.child.key, item.otherChild?.key, item.direction) {
                if (item.otherChild == null) {
                    EmptyStackAnimator
                } else {
                    selector(item.child, item.otherChild, item.direction) ?: EmptyStackAnimator
                }
            }

        val movableContent = remember { movableContentOf(content) }

        animator(
            direction = item.direction,
            isInitial = item.isInitial,
            onFinished = onFinished,
        ) { modifier ->
            Box(modifier = modifier) {
                movableContent(item.child)
            }
        }
    }
}
