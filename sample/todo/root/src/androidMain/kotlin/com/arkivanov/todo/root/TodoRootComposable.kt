package com.arkivanov.todo.root

import androidx.compose.runtime.Composable
import com.arkivanov.decompose.extensions.compose.jetpack.Children
import com.arkivanov.todo.edit.invoke
import com.arkivanov.todo.main.invoke

@Composable
operator fun TodoRoot.Model.invoke() {
    Children(routerState = routerState, animation = crossfade()) { child, _ ->
        when (child) {
            is TodoRoot.Child.Main -> child.main.model()
            is TodoRoot.Child.Edit -> child.edit.model()
        }
    }
}
