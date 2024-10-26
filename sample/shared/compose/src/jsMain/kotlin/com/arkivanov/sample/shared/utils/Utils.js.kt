package com.arkivanov.sample.shared.utils

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import kotlinx.browser.document

@Composable
internal actual fun WebDocumentTitle(title: String) {
    DisposableEffect(Unit) {
        document.title = title
        onDispose {}
    }
}
