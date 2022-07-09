package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.foundation.layout.Box
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
internal fun <C : Any, T : Any> emptyStackAnimation(): StackAnimation<C, T> =
    StackAnimation { stack, modifier, childContent ->
        Box(modifier = modifier) {
            childContent(stack.active)
        }
    }
