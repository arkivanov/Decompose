package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.ui.Modifier

internal object EmptyStackAnimator : StackAnimator {

    @Composable
    override fun invoke(
        direction: Direction,
        isInitial: Boolean,
        onFinished: () -> Unit,
        content: @Composable (Modifier) -> Unit,
    ) {
        content(Modifier)

        DisposableEffect(direction, isInitial) {
            onFinished()
            onDispose {}
        }
    }
}
