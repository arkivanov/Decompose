package com.arkivanov.sample.shared.utils

import androidx.compose.runtime.Composable

internal expect val orientation: Orientation @Composable get

internal enum class Orientation {
    PORTRAIT, LANDSCAPE
}
