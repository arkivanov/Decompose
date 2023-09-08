package com.arkivanov.decompose.extensions.compose.jetpack.stack

import android.annotation.SuppressLint
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.SaveableStateHolder
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.emptyStackAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.subscribeAsState
import com.arkivanov.decompose.hashString
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value

@OptIn(InternalDecomposeApi::class)
@Composable
fun <C : Any, T : Any> Children(
    stack: ChildStack<C, T>,
    modifier: Modifier = Modifier,
    animation: StackAnimation<C, T>? = null,
    content: @Composable (child: Child.Created<C, T>) -> Unit,
) {
    val holder = rememberSaveableStateHolder()

    holder.retainStates(stack.getConfigurations())

    val anim = animation ?: emptyStackAnimation()

    anim(stack = stack, modifier = modifier) { child ->
        holder.SaveableStateProvider(child.configuration.hashString()) {
            content(child)
        }
    }
}

@Composable
fun <C : Any, T : Any> Children(
    stack: Value<ChildStack<C, T>>,
    modifier: Modifier = Modifier,
    animation: StackAnimation<C, T>? = null,
    content: @Composable (child: Child.Created<C, T>) -> Unit,
) {
    val state = stack.subscribeAsState()

    Children(
        stack = state.value,
        modifier = modifier,
        animation = animation,
        content = content
    )
}

@OptIn(InternalDecomposeApi::class)
private fun ChildStack<*, *>.getConfigurations(): Set<String> =
    items.mapTo(HashSet()) { it.configuration.hashString() }

@SuppressLint("ComposableNaming")
@Composable
private fun SaveableStateHolder.retainStates(currentKeys: Set<Any>) {
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
