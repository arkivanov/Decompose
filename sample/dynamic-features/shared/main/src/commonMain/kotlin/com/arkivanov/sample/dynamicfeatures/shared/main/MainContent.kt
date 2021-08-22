package com.arkivanov.sample.dynamicfeatures.shared.main

import androidx.compose.foundation.layout.Box
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

@Composable
fun MainContent(main: Main, modifier: Modifier = Modifier) {
    Box(modifier = modifier, contentAlignment = Alignment.Center) {
        Button(onClick = main::onFeature1Clicked) {
            Text(text = "Go to Feature1")
        }
    }
}
