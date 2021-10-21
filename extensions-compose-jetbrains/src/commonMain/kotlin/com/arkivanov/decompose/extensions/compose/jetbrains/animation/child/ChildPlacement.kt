package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Determines the relative position of the animating children.
 * This affects the drawing order, and also provides the ability to customize animations.
 */
@ExperimentalDecomposeApi
enum class ChildPlacement {

    /**
     * The child being animated is positioned on the back
     */
    BACK,

    /**
     * The child being animated is positioned on the front
     */
    FRONT
}
