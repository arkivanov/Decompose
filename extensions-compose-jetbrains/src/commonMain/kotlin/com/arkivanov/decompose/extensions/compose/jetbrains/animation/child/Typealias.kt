@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.ChildContent
import com.arkivanov.decompose.router.RouterState

typealias ChildAnimation<C, T> = @Composable (RouterState<C, T>, Modifier, ChildContent<C, T>) -> Unit

/**
 * Called for every animation frame, displays the current frame using the provided `content` callback.
 *
 * Arguments:
 *
 * - `child` - a child being animated
 * - `factor` - the progress of the child animation.
 *  From 0 to 1 for [ChildAnimationDirection.ENTER], from 1 to 0 for [ChildAnimationDirection.EXIT].
 * - `placement` - a relative position of the child being animated, see [ChildPlacement] for details
 * - `direction` - a direction of the child animation, see [ChildAnimationDirection] for details
 * - `content` - a `@Composable` content block to display the child
 */
// @ExperimentalDecomposeApi (can not be applied to typealias)
typealias ChildAnimator<C, T> =
    @Composable (
        child: Child.Created<C, T>,
        factor: Float,
        placement: ChildPlacement,
        direction: ChildAnimationDirection,
        content: @Composable () -> Unit
    ) -> Unit
