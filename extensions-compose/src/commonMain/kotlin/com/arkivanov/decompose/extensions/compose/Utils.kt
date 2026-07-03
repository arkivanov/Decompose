package com.arkivanov.decompose.extensions.compose

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember

@Composable
internal fun <T> rememberLazy(key: Any, provider: () -> T): Lazy<T> =
    remember(key) { lazy(provider) }
