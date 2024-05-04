package com.arkivanov.sample.shared.customnavigation

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material.LocalContentColor
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import decompose.sample.shared.compose.generated.resources.Res
import decompose.sample.shared.compose.generated.resources.cat1
import decompose.sample.shared.compose.generated.resources.cat2
import decompose.sample.shared.compose.generated.resources.cat3
import decompose.sample.shared.compose.generated.resources.cat4
import decompose.sample.shared.compose.generated.resources.cat5
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource

@Composable
internal fun KittenContent(
    component: KittenComponent,
    textStyle: TextStyle,
    modifier: Modifier = Modifier,
) {
    val model by component.model.subscribeAsState()

    Box(modifier = modifier) {
        Image(
            painter = getKittenPainter(imageType = model.imageType),
            contentDescription = "Kitten image",
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop,
        )

        CompositionLocalProvider(LocalContentColor provides Color.White) {
            Text(
                text = model.text,
                modifier = Modifier
                    .align(Alignment.TopCenter)
                    .fillMaxWidth()
                    .background(Brush.verticalGradient(colors = listOf(Color.Black.copy(alpha = 0.75F), Color.Transparent)))
                    .statusBarsPadding()
                    .padding(top = 16.dp, bottom = 24.dp),
                style = textStyle,
                textAlign = TextAlign.Center,
            )
        }
    }
}

@OptIn(ExperimentalResourceApi::class)
@Composable
internal fun getKittenPainter(imageType: KittenComponent.ImageType): Painter =
    painterResource(
        when (imageType) {
            KittenComponent.ImageType.CAT_1 -> Res.drawable.cat1
            KittenComponent.ImageType.CAT_2 -> Res.drawable.cat2
            KittenComponent.ImageType.CAT_3 -> Res.drawable.cat3
            KittenComponent.ImageType.CAT_4 -> Res.drawable.cat4
            KittenComponent.ImageType.CAT_5 -> Res.drawable.cat5
        }
    )
