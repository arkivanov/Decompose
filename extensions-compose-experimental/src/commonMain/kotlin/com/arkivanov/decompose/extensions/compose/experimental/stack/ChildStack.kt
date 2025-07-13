package com.arkivanov.decompose.extensions.compose.experimental.stack

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.SaveableStateHolder
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.LocalStackAnimationProvider
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimationScope
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.emptyStackAnimation
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.keyHashString
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value

/**
 * Displays the provided [stack] of child components, taking care of saving and restoring the UI state.
 *
 * @param stack a [ChildStack] to be displayed.
 * @param modifier a [Modifier] to applied to a wrapping container.
 * @param animation an optional [StackAnimation] for animating stack changes. If not provided (or `null`),
 * then a default [StackAnimation] is obtained from [LocalStackAnimationProvider].
 * If that is also `null`, then there is no animation.
 * @param content a `Composable` function that displays the provided [Child][Child.Created] component.
 * The receiver [StackAnimationScope] can be used for additional animations, such as
 * [Shared Element Transitions](https://developer.android.com/develop/ui/compose/animation/shared-elements).
 */
@ExperimentalDecomposeApi
@Composable
fun <C : Any, T : Any> ChildStack(
    stack: ChildStack<C, T>,
    modifier: Modifier = Modifier,
    animation: StackAnimation<C, T>? = null,
    content: @Composable StackAnimationScope.(child: Child.Created<C, T>) -> Unit,
) {
    val holder = rememberSaveableStateHolder()

    holder.retainStates(stack.getKeys())

    val animationProvider = LocalStackAnimationProvider.current
    val anim = animation ?: remember(animationProvider, animationProvider::provide) ?: emptyStackAnimation()

    anim(stack = stack, modifier = modifier) { child ->
        holder.SaveableStateProvider(child.keyHashString()) {
            content(child)
        }
    }
}

/**
 * Displays the provided [stack] of child components, taking care of saving and restoring the UI state.
 *
 * @param stack an observable [ChildStack] to be displayed.
 * @param modifier a [Modifier] to applied to a wrapping container.
 * @param animation an optional [StackAnimation] for animating stack changes. If not provided (or `null`),
 * then a default [StackAnimation] is obtained from [LocalStackAnimationProvider].
 * If that is also `null`, then there is no animation.
 * @param content a `Composable` function that displays the provided [Child][Child.Created] component.
 * The receiver [StackAnimationScope] can be used for additional animations, such as
 * [Shared Element Transitions](https://developer.android.com/develop/ui/compose/animation/shared-elements).
 */
@ExperimentalDecomposeApi
@Composable
fun <C : Any, T : Any> ChildStack(
    stack: Value<ChildStack<C, T>>,
    modifier: Modifier = Modifier,
    animation: StackAnimation<C, T>? = null,
    content: @Composable StackAnimationScope.(child: Child.Created<C, T>) -> Unit,
) {
    val state = stack.subscribeAsState()

    ChildStack(
        stack = state.value,
        modifier = modifier,
        animation = animation,
        content = content
    )
}

private fun ChildStack<*, *>.getKeys(): Set<String> =
    items.mapTo(HashSet(), Child<*, *>::keyHashString)

@Composable
private fun SaveableStateHolder.retainStates(currentKeys: Set<String>) {
    val keys = remember(this) { Keys(currentKeys) }

    DisposableEffect(this, currentKeys) {
        keys.set.forEach {
            if (it !in currentKeys) {
                removeState(it)
            }
        }

        keys.set = currentKeys

        onDispose {}
    }
}

private class Keys(
    var set: Set<Any>
)
