package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.stack.ChildStack


val LocalStackAnimation = compositionLocalOf<StackAnimation<Any, Any>> { EmptyStackAnimation() }
/*
 * Can't be anonymous. See:
 * https://github.com/JetBrains/compose-jb/issues/2688
 * https://github.com/JetBrains/compose-jb/issues/2612
 */
private class EmptyStackAnimation<C : Any, T : Any> : StackAnimation<C, T> {

    @Composable
    override fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    ) {
        Box(modifier = modifier) {
            content(stack.active)
        }
    }
}
