package com.arkivanov.decompose.extensions.compose.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.platform.WindowInfo
import androidx.compose.ui.window.WindowState
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import kotlinx.coroutines.flow.combine

/**
 * Controls (drives) the provided [LifecycleRegistry] according to the window minimized and
 * focused state changes.
 * The lifecycle state is [Lifecycle.State.RESUMED] when the window is focused.
 * The lifecycle state is [Lifecycle.State.CREATED] when the window is minimized.
 * The lifecycle state is [Lifecycle.State.STARTED] otherwise.
 * The [LifecycleRegistry] is destroyed when this function leaves the composition.
 *
 * @param lifecycleRegistry a [LifecycleRegistry] that should be controlled.
 * @param windowState a [WindowState] providing the window minimized state, see [WindowState.isMinimized].
 * @param windowInfo an optional [WindowInfo] providing the window focused state, see [WindowInfo.isWindowFocused].
 * If not provided, the window is always considered focused.
 */
@ExperimentalDecomposeApi
@Composable
fun LifecycleController(
    lifecycleRegistry: LifecycleRegistry,
    windowState: WindowState,
    windowInfo: WindowInfo? = null,
) {
    LaunchedEffect(lifecycleRegistry, windowState, windowInfo) {
        combine(
            snapshotFlow(windowState::isMinimized),
            snapshotFlow { windowInfo?.isWindowFocused ?: true },
            ::Pair,
        ).collect { (isMinimized, isFocused) ->
            when {
                isMinimized -> lifecycleRegistry.stop()
                isFocused -> lifecycleRegistry.resume()
                lifecycleRegistry.state == Lifecycle.State.RESUMED -> lifecycleRegistry.pause()
                else -> lifecycleRegistry.start()
            }
        }
    }

    DisposableEffect(lifecycleRegistry) {
        lifecycleRegistry.create()
        onDispose(lifecycleRegistry::destroy)
    }
}
