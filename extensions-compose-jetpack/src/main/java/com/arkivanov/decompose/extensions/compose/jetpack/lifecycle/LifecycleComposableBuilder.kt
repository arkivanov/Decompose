package com.arkivanov.decompose.extensions.compose.jetpack.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.destroy
import com.arkivanov.decompose.lifecycle.resume

@Composable
internal fun lifecycle(): Lifecycle {
    val registry = remember { LifecycleRegistry() }

    DisposableEffect(Unit) {
        registry.resume()

        onDispose {
            registry.destroy()
        }
    }

    return registry
}
