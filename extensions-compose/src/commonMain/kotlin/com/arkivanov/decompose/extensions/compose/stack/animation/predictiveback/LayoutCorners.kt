package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

internal expect fun Modifier.withLayoutCorners(block: Modifier.(LayoutCorners) -> Modifier): Modifier

internal data class LayoutCorners(
    val topStart: LayoutCorner = LayoutCorner(),
    val topEnd: LayoutCorner = LayoutCorner(),
    val bottomEnd: LayoutCorner = LayoutCorner(),
    val bottomStart: LayoutCorner = LayoutCorner(),
)

internal data class LayoutCorner(
    val radius: Dp = 16.dp,
    val isFixed: Boolean = true,
)
