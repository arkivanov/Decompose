package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.runtime.compositionLocalOf
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
interface StackAnimationProvider {
    fun <C : Any, T : Any> provide(): StackAnimation<C, T>?
}

@ExperimentalDecomposeApi
val LocalStackAnimationProvider =
    compositionLocalOf<StackAnimationProvider> {
        object : StackAnimationProvider {
            override fun <C : Any, T : Any> provide(): StackAnimation<C, T>? = null
        }
    }
