package com.arkivanov.decompose.extensions.compose.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.platform.WindowInfo
import androidx.compose.ui.window.WindowState
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.lifecycle.moveToStarted
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
                isMinimized -> lifecycleRegistry.moveToCreated()
                isFocused -> lifecycleRegistry.moveToResumed()
                else -> lifecycleRegistry.moveToStarted()
            }
        }
    }

    DisposableEffect(lifecycleRegistry) {
        lifecycleRegistry.moveToCreated()
        onDispose(lifecycleRegistry::moveToDestroyed)
    }
}
