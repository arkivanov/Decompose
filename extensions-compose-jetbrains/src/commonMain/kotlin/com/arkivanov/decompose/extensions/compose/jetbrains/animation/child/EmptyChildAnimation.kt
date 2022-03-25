package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.foundation.layout.Box
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
internal fun <C : Any, T : Any> emptyChildAnimation(): ChildAnimation<C, T> =
    ChildAnimation { routerState, modifier, childContent ->
        Box(modifier = modifier) {
            childContent(routerState.activeChild)
        }
    }
