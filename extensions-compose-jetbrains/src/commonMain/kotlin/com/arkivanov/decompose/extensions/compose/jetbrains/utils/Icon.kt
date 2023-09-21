package com.arkivanov.decompose.extensions.compose.jetbrains.utils

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.paint
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.graphics.toolingGraphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp

// Avoid dependency on compose.material
@Composable
internal fun IconCompat(
    painter: Painter,
    modifier: Modifier = Modifier,
    tint: Color = Color.Unspecified,
) {
    Box(
        modifier
            .toolingGraphicsLayer()
            .defaultSizeFor(painter)
            .paint(
                painter = painter,
                colorFilter = if (tint == Color.Unspecified) null else ColorFilter.tint(tint),
                contentScale = ContentScale.Fit,
            )
    )
}

private fun Modifier.defaultSizeFor(painter: Painter): Modifier =
    if ((painter.intrinsicSize == Size.Unspecified) || painter.intrinsicSize.isInfinite()) {
        then(Modifier.size(24.dp))
    } else {
        this
    }

private fun Size.isInfinite(): Boolean =
    width.isInfinite() && height.isInfinite()
