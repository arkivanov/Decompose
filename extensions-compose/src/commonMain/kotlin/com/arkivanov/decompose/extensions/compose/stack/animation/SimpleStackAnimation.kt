package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import com.arkivanov.decompose.Child

internal class SimpleStackAnimation<C : Any, T : Any>(
    disableInputDuringAnimation: Boolean,
    private val selector: (Child.Created<C, T>) -> StackAnimator?,
) : AbstractStackAnimation<C, T>(disableInputDuringAnimation = disableInputDuringAnimation) {

    @Composable
    override fun Child(
        item: AnimationItem<C, T>,
        onFinished: () -> Unit,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    ) {
        val animator = remember(item.child.configuration) { selector(item.child) ?: EmptyStackAnimator }

        animator(
            direction = item.direction,
            isInitial = item.isInitial,
            onFinished = onFinished,
        ) { modifier ->
            Box(modifier = modifier) {
                content(item.child)
            }
        }
    }
}
