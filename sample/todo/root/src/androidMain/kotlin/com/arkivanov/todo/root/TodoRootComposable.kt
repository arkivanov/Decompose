package com.arkivanov.todo.root

import androidx.compose.animation.Crossfade
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.extensions.compose.jetpack.children
import com.arkivanov.todo.edit.invoke
import com.arkivanov.todo.main.invoke

@Composable
operator fun TodoRoot.Model.invoke() {
    routerState.children { child, configuration ->
        Crossfade(currentChild = child, currentKey = configuration) { currentChild ->
            when (currentChild) {
                is TodoRoot.Child.Main -> currentChild.main.model()
                is TodoRoot.Child.Edit -> currentChild.edit.model()
            }
        }
    }
}

@Composable
fun <T> Crossfade(currentChild: T, currentKey: Any, children: @Composable (T) -> Unit) {
    Crossfade(current = ChildWrapper(currentChild, currentKey)) {
        children(it.child)
    }
}

private class ChildWrapper<out T>(val child: T, val key: Any) {
    override fun equals(other: Any?): Boolean = key == (other as? ChildWrapper<*>)?.key
    override fun hashCode(): Int = key.hashCode()
}
