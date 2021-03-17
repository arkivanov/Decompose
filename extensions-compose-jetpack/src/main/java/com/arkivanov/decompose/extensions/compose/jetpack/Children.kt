package com.arkivanov.decompose.extensions.compose.jetpack

import android.annotation.SuppressLint
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
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
    routerState: Value<RouterState<C, T>>,
    animation: ChildAnimation<C, T> = { state, childContent -> childContent(state.activeChild) },
    content: ChildContent<C, T>
) {
    val holder = key(routerState) { rememberSaveableStateHolder() }
    val state by routerState.asState()

    holder.retainStates(state.getConfigurations())

    animation(state) { child ->
        holder.SaveableStateProvider(child.configuration) {
            content(child)
        }
    }
}

private fun <C : Any> RouterState<C, *>.getConfigurations(): Set<C> {
    val set = HashSet<C>()
    backStack.forEach { set += it.configuration }
    set += activeChild.configuration

    return set
}

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
