package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.SaveableStateHolder
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.emptyChildAnimation
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.Value

typealias ChildContent<C, T> = @Composable (child: Child.Created<C, T>) -> Unit

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun <C : Any, T : Any> Children(
    routerState: RouterState<C, T>,
    modifier: Modifier = Modifier,
    animation: ChildAnimation<C, T> = emptyChildAnimation(),
    content: ChildContent<C, T>
) {
    val holder = rememberSaveableStateHolder()

    holder.retainStates(routerState.getConfigurations())

    animation(routerState, modifier) { child ->
        holder.SaveableStateProvider(child.configuration.key()) {
            content(child)
        }
    }
}

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun <C : Any, T : Any> Children(
    routerState: Value<RouterState<C, T>>,
    modifier: Modifier = Modifier,
    animation: ChildAnimation<C, T> = emptyChildAnimation(),
    content: ChildContent<C, T>
) {
    val state = routerState.subscribeAsState()

    Children(
        routerState = state.value,
        modifier = modifier,
        animation = animation,
        content = content
    )
}

private fun RouterState<*, *>.getConfigurations(): Set<String> {
    val set = HashSet<String>()
    backStack.forEach { set += it.configuration.key() }
    set += activeChild.configuration.key()

    return set
}

private fun Any.key(): String = "${this::class.simpleName}_${hashCode().toString(radix = 36)}"

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
