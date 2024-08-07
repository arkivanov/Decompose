package com.arkivanov.decompose.extensions.compose.pages

import androidx.compose.animation.core.AnimationSpec

sealed interface PagesScrollAnimation {

    data object Disabled : PagesScrollAnimation
    data object Default : PagesScrollAnimation
    class Custom(val spec: AnimationSpec<Float>) : PagesScrollAnimation
}
