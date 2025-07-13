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
internal fun WithStackAnimationScope(
    direction: Direction?,
    transition: Transition<EnterExitState>,
    block: @Composable StackAnimationScope.() -> Unit,
) {
    val directionState = rememberUpdatedState(direction)
    val transitionState = rememberUpdatedState(transition)
    val scope = remember(directionState, transitionState) { SimpleStackAnimationScope(directionState, transitionState) }
    scope.block()
}

private class SimpleStackAnimationScope(
    directionState: State<Direction?>,
    transitionState: State<Transition<EnterExitState>>,
) : StackAnimationScope {
    override val stackAnimationDirection: Direction? by directionState::value
    override val transition: Transition<EnterExitState> by transitionState::value
}
