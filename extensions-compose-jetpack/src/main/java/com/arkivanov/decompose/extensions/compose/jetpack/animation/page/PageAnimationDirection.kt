package com.arkivanov.decompose.extensions.compose.jetpack.animation.page

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Determines the direction of an animation
 */
@ExperimentalDecomposeApi
enum class PageAnimationDirection {

    /**
     * The page is disappearing
     */
    EXIT,

    /**
     * The page is appearing
     */
    ENTER
}
