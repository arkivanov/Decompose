package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.ui.Modifier

internal actual fun Modifier.withLayoutCorners(block: Modifier.(LayoutCorners) -> Modifier): Modifier =
    block(LayoutCorners())
