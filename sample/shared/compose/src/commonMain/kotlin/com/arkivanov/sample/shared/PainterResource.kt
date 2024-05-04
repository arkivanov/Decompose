package com.arkivanov.sample.shared

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.painter.Painter
import decompose.sample.shared.compose.generated.resources.Res
import decompose.sample.shared.compose.generated.resources.cat1
import decompose.sample.shared.compose.generated.resources.cat2
import decompose.sample.shared.compose.generated.resources.cat3
import decompose.sample.shared.compose.generated.resources.cat4
import decompose.sample.shared.compose.generated.resources.cat5
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource

@OptIn(ExperimentalResourceApi::class)
@Composable
internal fun painterResource(imageResourceId: ImageResourceId): Painter =
    painterResource(
        when (imageResourceId) {
            ImageResourceId.CAT_1 -> Res.drawable.cat1
            ImageResourceId.CAT_2 -> Res.drawable.cat2
            ImageResourceId.CAT_3 -> Res.drawable.cat3
            ImageResourceId.CAT_4 -> Res.drawable.cat4
            ImageResourceId.CAT_5 -> Res.drawable.cat5
        }
    )
