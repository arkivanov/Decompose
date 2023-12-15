package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.runtime.compositionLocalOf

interface StackAnimationProvider {
    fun <C : Any, T : Any> provide(): StackAnimation<C, T>?
}

val LocalStackAnimationProvider = compositionLocalOf<StackAnimationProvider> {
    object : StackAnimationProvider {
        override fun <C : Any, T : Any> provide(): StackAnimation<C, T> =
            emptyStackAnimation()
    }
}

