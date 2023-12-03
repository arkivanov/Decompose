package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.predictiveback

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackHandler

@Composable
internal fun BackGestureHandler(
    backHandler: BackHandler,
    onBackStarted: (BackEvent) -> Unit = {},
    onBackProgressed: (BackEvent) -> Unit = {},
    onBackCancelled: () -> Unit = {},
    onBack: () -> Unit,
) {
    DisposableEffect(backHandler) {
        val callback =
            BackCallback(
                onBackStarted = onBackStarted,
                onBackProgressed = onBackProgressed,
                onBackCancelled = onBackCancelled,
                onBack = onBack,
            )

        backHandler.register(callback)
        onDispose { backHandler.unregister(callback) }
    }
}
