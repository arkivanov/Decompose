package com.arkivanov.decompose.extensions.compose.jetpack.animation.page

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Determines the relative position of the animating pages.
 * This affects the drawing order, and also provides the ability to customize animations.
 */
@ExperimentalDecomposeApi
enum class PageArrangement {

    /**
     * The page being animated is the previous page
     */
    PREVIOUS,

    /**
     * The page being animated is the following page
     */
    FOLLOWING
}
