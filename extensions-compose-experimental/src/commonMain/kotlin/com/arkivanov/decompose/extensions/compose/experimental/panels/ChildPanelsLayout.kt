package com.arkivanov.decompose.extensions.compose.experimental.panels

import androidx.compose.runtime.Composable
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.panels.ChildPanelsMode

/**
 * A Child Panels layout used for laying out panels in single, dual and triple modes.
 */
@ExperimentalDecomposeApi
interface ChildPanelsLayout {

    /**
     * Lays out the provided `Composable` panels according to the current [mode].
     *
     * @param mode the current layout mode, see [ChildPanelsMode].
     * @param main the Main panel `Composable` function.
     * @param details the Details panel `Composable` function.
     * @param extra the Extra panel `Composable` function.
     */
    @Composable
    fun Layout(
        mode: ChildPanelsMode,
        main: @Composable () -> Unit,
        details: @Composable () -> Unit,
        extra: @Composable () -> Unit,
    )
}
