@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetpack.animation.page

import androidx.compose.foundation.layout.BoxWithConstraintsScope
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi

// @ExperimentalDecomposeApi (can not be applied to typealias)
internal typealias PageArranger<T> = (new: T, old: T) -> PageArrangement

/**
 * Called for every animation frame, displays the current frame using the provided `content` callback.
 *
 * `key` - a key of the page being animated
 * `factor` - the progress of the page animation.
 *  From 0 to 1 for [PageAnimationDirection.ENTER], from 1 to 0 for [PageAnimationDirection.EXIT].
 * `arrangement` - the arrangement of the page being animated, see [PageArrangement] for details
 * `direction` - the direction of the page animation, see [PageAnimationDirection] for details
 * `content` - a @Composable content callback with [Modifier] to display the page
 */
// @ExperimentalDecomposeApi (can not be applied to typealias)
typealias PageAnimator<T> =
    @Composable BoxWithConstraintsScope.(
        key: T,
        factor: Float,
        arrangement: PageArrangement,
        direction: PageAnimationDirection,
        content: @Composable (Modifier) -> Unit
    ) -> Unit
