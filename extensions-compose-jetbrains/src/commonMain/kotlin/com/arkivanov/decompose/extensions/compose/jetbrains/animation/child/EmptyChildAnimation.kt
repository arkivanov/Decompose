package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.foundation.layout.Box

internal fun <C : Any, T : Any> emptyChildAnimation(): ChildAnimation<C, T> =
    { routerState, modifier, childContent ->
        Box(modifier = modifier) {
            childContent(routerState.activeChild)
        }
    }
