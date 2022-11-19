package com.arkivanov.sample.shared.customnavigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountBox
import androidx.compose.material.icons.filled.Call
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.Info
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import com.arkivanov.sample.shared.customnavigation.KittenComponent.ImageType

@Composable
internal actual fun getKittenPainter(imageType: ImageType): Painter =
    // TODO: Use resources with kitten photos when supported by Compose for iOS
    rememberVectorPainter(
        when (imageType) {
            ImageType.CAT_1 -> Icons.Default.AccountBox
            ImageType.CAT_2 -> Icons.Default.Info
            ImageType.CAT_3 -> Icons.Default.Call
            ImageType.CAT_4 -> Icons.Default.Check
            ImageType.CAT_5 -> Icons.Default.Clear
        }
    )
