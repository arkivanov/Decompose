package com.arkivanov.decompose.extensions.compose.experimental.stack

import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.Transition
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember

@Composable
internal fun WithAnimatedVisibilityScope(
    transition: Transition<EnterExitState>,
    block: @Composable AnimatedVisibilityScope.() -> Unit,
) {
    val scope = remember(transition) { SimpleAnimatedVisibilityScope(transition) }
    scope.block()
}

private class SimpleAnimatedVisibilityScope(
    override val transition: Transition<EnterExitState>,
) : AnimatedVisibilityScope
