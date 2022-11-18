package com.arkivanov.sample.shared.customnavigation

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
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
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState

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
                    .padding(8.dp),
                style = textStyle,
                textAlign = TextAlign.Center,
            )
        }
    }
}

@Composable
internal expect fun getKittenPainter(imageType: KittenComponent.ImageType): Painter
