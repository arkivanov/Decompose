package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.utils.IconCompat

/**
 * Default icon for predictive back gesture.
 */
@ExperimentalDecomposeApi
@Composable
fun PredictiveBackGestureIcon(
    imageVector: ImageVector,
    progress: Float,
    iconTintColor: Color = Color.Unspecified,
    backgroundColor: Color = Color.LightGray,
) {
    IconCompat(
        painter = rememberVectorPainter(imageVector),
        modifier = Modifier
            .alpha((progress * 6F).coerceAtMost(1F))
            .background(color = backgroundColor, shape = CircleShape)
            .padding(4.dp),
        tint = iconTintColor,
    )
}
