package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.MutableTransitionState
import androidx.compose.animation.core.rememberTransition
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.WithAnimatedVisibilityScope
import com.arkivanov.decompose.router.stack.ChildStack

@ExperimentalDecomposeApi
internal fun <C : Any, T : Any> emptyStackAnimation(): StackAnimation<C, T> =
    EmptyStackAnimation()

/*
 * Can't be anonymous. See:
 * https://github.com/JetBrains/compose-jb/issues/2688
 * https://github.com/JetBrains/compose-jb/issues/2612
 */
@ExperimentalDecomposeApi
private class EmptyStackAnimation<C : Any, T : Any> : StackAnimation<C, T> {

    @Composable
    override fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable AnimatedVisibilityScope.(child: Child.Created<C, T>) -> Unit,
    ) {
        val transitionState = remember { MutableTransitionState(EnterExitState.Visible) }
        val transition = rememberTransition(transitionState)

        WithAnimatedVisibilityScope(transition) {
            Box(modifier = modifier) {
                content(stack.active)
            }
        }
    }
}
