package com.arkivanov.decompose.extensions.compose.jetbrains.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.window.WindowState
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop
import kotlinx.coroutines.flow.collect

@ExperimentalDecomposeApi
@Composable
fun LifecycleController(lifecycleRegistry: LifecycleRegistry, windowState: WindowState) {
    LaunchedEffect(lifecycleRegistry, windowState) {
        snapshotFlow(windowState::isMinimized).collect { isMinimized ->
            if (isMinimized) {
                lifecycleRegistry.stop()
            } else {
                lifecycleRegistry.resume()
            }
        }
    }

    DisposableEffect(lifecycleRegistry) {
        lifecycleRegistry.create()
        onDispose(lifecycleRegistry::destroy)
    }
}
