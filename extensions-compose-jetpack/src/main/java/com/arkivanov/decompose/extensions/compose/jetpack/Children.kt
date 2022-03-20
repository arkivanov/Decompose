package com.arkivanov.decompose.extensions.compose.jetpack

import android.annotation.SuppressLint
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.SaveableStateHolder
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.emptyChildAnimation
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.Value

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun <C : Any, T : Any> Children(
    routerState: RouterState<C, T>,
    modifier: Modifier = Modifier,
    animation: ChildAnimation<C, T> = emptyChildAnimation(),
    content: @Composable (child: Child.Created<C, T>) -> Unit,
) {
    val holder = rememberSaveableStateHolder()

    holder.retainStates(routerState.getConfigurations())

    animation(state = routerState, modifier = modifier) { child ->
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
    content: @Composable (child: Child.Created<C, T>) -> Unit,
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
