package com.arkivanov.todo.utils

import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.onActive
import androidx.compose.runtime.remember
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.rx.observer

@Composable
fun <T : Any> Store<*, T, *>.observableState(): T {
    val state = remember { mutableStateOf(state) }

    onActive {
        val disposable = states(observer { state.value = it })
        onDispose(disposable::dispose)
    }

    return state.value
}
