package com.arkivanov.sample.shared.utils

import android.content.res.Configuration
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext

internal actual val orientation: Orientation
    @Composable
    get() =
        if (LocalContext.current.resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            Orientation.LANDSCAPE
        } else {
            Orientation.PORTRAIT
        }
