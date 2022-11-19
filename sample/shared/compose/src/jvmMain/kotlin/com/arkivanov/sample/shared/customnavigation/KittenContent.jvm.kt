package com.arkivanov.sample.shared.customnavigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import com.arkivanov.sample.shared.customnavigation.KittenComponent.ImageType

@Composable
internal actual fun getKittenPainter(imageType: ImageType): Painter =
    painterResource(
        when (imageType) {
            ImageType.CAT_1 -> "cat1.jpg"
            ImageType.CAT_2 -> "cat2.jpg"
            ImageType.CAT_3 -> "cat3.jpg"
            ImageType.CAT_4 -> "cat4.jpg"
            ImageType.CAT_5 -> "cat5.jpg"
        }
    )
