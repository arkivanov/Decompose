package com.arkivanov.sample.shared.utils

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.LocalContentColor
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.primarySurface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
internal fun TopAppBar(
    title: String,
    onCloseClick: (() -> Unit)? = null,
) {
    TopAppBar(
        title = { Text(text = title) },
        modifier = Modifier.background(MaterialTheme.colors.primarySurface).statusBarsPadding(),
        navigationIcon = onCloseClick?.let { listener ->
            {
                IconButton(onClick = listener) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Default.ArrowBack,
                        contentDescription = "Back button",
                    )
                }
            }
        },
        elevation = 0.dp,
    )
}

@Composable
internal fun CloseButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit = {},
) {
    CompositionLocalProvider(LocalContentColor provides Color.White) {
        IconButton(
            onClick = onClick,
            modifier = modifier.padding(4.dp),
        ) {
            Icon(
                imageVector = Icons.Default.Close,
                contentDescription = "Close button",
            )
        }
    }
}
