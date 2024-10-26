package com.arkivanov.sample.shared.utils

import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Dp

@Composable
internal fun Dp.toPx(): Float =
    with(LocalDensity.current) { toPx() }

@Composable
internal expect fun WebDocumentTitle(title: String)
