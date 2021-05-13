package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.SaveableStateHolder
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value

typealias ChildContent<C, T> = @Composable (child: Child.Created<C, T>) -> Unit

typealias ChildAnimation<C, T> = @Composable (RouterState<C, T>, ChildContent<C, T>) -> Unit

@Composable
fun <C : Any, T : Any> Children(
    routerState: RouterState<C, T>,
    animation: ChildAnimation<C, T> = { state, childContent -> childContent(state.activeChild) },
    content: ChildContent<C, T>
) {
    val holder = rememberSaveableStateHolder()

    holder.retainStates(routerState.getConfigurations())

    animation(routerState) { child ->
        holder.SaveableStateProvider(child.configuration) {
            content(child)
        }
    }
}

@Composable
fun <C : Any, T : Any> Children(
    routerState: Value<RouterState<C, T>>,
    animation: ChildAnimation<C, T> = { state, childContent -> childContent(state.activeChild) },
    content: ChildContent<C, T>
) {
    val state = routerState.subscribeAsState()

    Children(
        routerState = state.value,
        animation = animation,
        content = content
    )
}

private fun <C : Any> RouterState<C, *>.getConfigurations(): Set<C> {
    val set = HashSet<C>()
    backStack.forEach { set += it.configuration }
    set += activeChild.configuration

    return set
}

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
