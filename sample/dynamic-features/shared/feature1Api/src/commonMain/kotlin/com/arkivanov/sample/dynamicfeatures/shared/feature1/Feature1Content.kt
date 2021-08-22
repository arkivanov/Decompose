package com.arkivanov.sample.dynamicfeatures.shared.feature1

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

interface Feature1Content {

    @Composable
    fun Content(feature1: Feature1, modifier: Modifier)
}
