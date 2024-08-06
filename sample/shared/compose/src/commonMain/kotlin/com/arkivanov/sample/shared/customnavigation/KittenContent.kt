package com.arkivanov.sample.shared.customnavigation

import androidx.compose.desktop.ui.tooling.preview.Preview
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
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.painterResource

@Composable
internal fun KittenContent(
    component: KittenComponent,
    textStyle: TextStyle,
    modifier: Modifier = Modifier,
) {
    val model by component.model.subscribeAsState()

    Box(modifier = modifier) {
        Image(
            painter = painterResource(model.imageResourceId),
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

@Preview
@Composable
internal fun KittenContentPreview() {
    KittenContent(
        component = PreviewKittenComponent(),
        textStyle = TextStyle.Default,
    )
}
