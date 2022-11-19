package com.arkivanov.sample.shared.customnavigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import com.arkivanov.sample.shared.compose.R
import com.arkivanov.sample.shared.customnavigation.KittenComponent.ImageType

@Composable
internal actual fun getKittenPainter(imageType: ImageType): Painter =
    painterResource(
        when (imageType) {
            ImageType.CAT_1 -> R.drawable.cat1
            ImageType.CAT_2 -> R.drawable.cat2
            ImageType.CAT_3 -> R.drawable.cat3
            ImageType.CAT_4 -> R.drawable.cat4
            ImageType.CAT_5 -> R.drawable.cat5
        }
    )
