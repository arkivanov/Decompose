package com.arkivanov.sample.shared.pages

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
import androidx.compose.material.MaterialTheme
import androidx.compose.material.OutlinedButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.pages.ChildPages
import com.arkivanov.decompose.extensions.compose.pages.PagesScrollAnimation
import com.arkivanov.sample.shared.customnavigation.KittenContent
import com.arkivanov.sample.shared.utils.CloseButton

@Composable
internal fun PagesContent(component: PagesComponent, modifier: Modifier = Modifier) {
    Box(modifier = modifier) {
        ChildPages(
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

        CloseButton(
            onClick = component::onCloseClicked,
            modifier = Modifier.align(Alignment.TopStart).statusBarsPadding(),
        )

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
