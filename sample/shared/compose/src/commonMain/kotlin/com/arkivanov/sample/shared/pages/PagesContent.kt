package com.arkivanov.sample.shared.pages

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.LocalContentColor
import androidx.compose.material.MaterialTheme
import androidx.compose.material.OutlinedButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Close
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.pages.Pages
import com.arkivanov.decompose.extensions.compose.pages.PagesScrollAnimation
import com.arkivanov.sample.shared.customnavigation.KittenContent

@OptIn(ExperimentalFoundationApi::class, ExperimentalDecomposeApi::class)
@Composable
fun PagesContent(component: PagesComponent, modifier: Modifier = Modifier) {
    Box(modifier = modifier) {
        Pages(
            pages = component.pages,
            onPageSelected = component::selectPage,
            modifier = Modifier.fillMaxSize(),
            scrollAnimation = PagesScrollAnimation.Default,
        ) { _, page ->
            KittenContent(
                component = page,
                textStyle = MaterialTheme.typography.h6,
                modifier = Modifier.fillMaxSize(),
            )
        }

        CompositionLocalProvider(LocalContentColor provides Color.White) {
            IconButton(
                onClick = component::onCloseClicked,
                modifier = Modifier
                    .align(Alignment.TopStart)
                    .statusBarsPadding()
                    .padding(4.dp),
            ) {
                Icon(
                    imageVector = Icons.Default.Close,
                    contentDescription = "Close button",
                )
            }
        }

        Row(
            modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 16.dp).navigationBarsPadding(),
            horizontalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            OutlinedButton(
                onClick = component::selectPrev,
                modifier = Modifier.size(48.dp),
                contentPadding = PaddingValues(0.dp),
            ) {
                Icon(
                    imageVector = Icons.AutoMirrored.Default.ArrowBack,
                    contentDescription = "Previous",
                )
            }

            OutlinedButton(
                onClick = component::selectNext,
                modifier = Modifier.size(48.dp),
                contentPadding = PaddingValues(0.dp),
            ) {
                Icon(
                    imageVector = Icons.AutoMirrored.Default.ArrowForward,
                    contentDescription = "Next",
                )
            }
        }
    }
}
