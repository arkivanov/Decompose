package com.arkivanov.decompose.extensions.compose.experimental.stack

import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.Transition
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimationScope
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction

@Composable
internal fun WithAnimatedVisibilityScope(
    transition: Transition<EnterExitState>,
    stackAnimationDirection: Direction? = null,
    block: @Composable StackAnimationScope.() -> Unit,
) {
    val stackAnimationDirectionState = rememberUpdatedState(stackAnimationDirection)

    val scope =
        remember(stackAnimationDirectionState, transition) {
            SimpleAnimatedVisibilityScope(transition, stackAnimationDirectionState)
        }

    scope.block()
}

private class SimpleAnimatedVisibilityScope(
    override val transition: Transition<EnterExitState>,
    stackAnimationDirection: State<Direction?>,
) : StackAnimationScope {

    override val stackAnimationDirection: Direction? by stackAnimationDirection::value
}
