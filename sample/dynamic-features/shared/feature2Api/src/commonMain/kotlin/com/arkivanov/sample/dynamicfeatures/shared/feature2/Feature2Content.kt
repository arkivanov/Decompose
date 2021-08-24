package com.arkivanov.sample.dynamicfeatures.shared.feature2

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

interface Feature2Content {

    @Composable
    fun Content(feature2: Feature2, modifier: Modifier)
}
