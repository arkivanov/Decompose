package com.arkivanov.decompose.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.onActive
import androidx.compose.runtime.onDispose
import androidx.compose.runtime.remember

@Composable
internal fun lifecycle(): Lifecycle {
    val registry = remember { LifecycleRegistry() }
    onActive { registry.resume() }
    onDispose { registry.destroy() }

    return registry
}
