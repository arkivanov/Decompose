package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
internal actual fun Modifier.withLayoutCorners(block: @Composable Modifier.(LayoutCorners) -> Modifier): Modifier =
    block(LayoutCorners())
