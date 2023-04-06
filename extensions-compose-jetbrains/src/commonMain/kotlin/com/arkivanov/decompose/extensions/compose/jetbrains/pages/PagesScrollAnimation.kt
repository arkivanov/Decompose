package com.arkivanov.decompose.extensions.compose.jetbrains.pages

import androidx.compose.animation.core.AnimationSpec
import androidx.compose.foundation.ExperimentalFoundationApi
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalFoundationApi
@ExperimentalDecomposeApi
sealed interface PagesScrollAnimation {

    object Disabled : PagesScrollAnimation
    object Default : PagesScrollAnimation
    class Custom(val spec: AnimationSpec<Float>) : PagesScrollAnimation
}
