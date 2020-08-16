package com.arkivanov.todo.utils

import androidx.compose.Composable
import androidx.compose.State
import androidx.compose.mutableStateOf
import androidx.compose.onActive
import androidx.compose.remember
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.rx.observer

@Composable
fun <T : Any> Store<*, T, *>.observableState(): State<T> {
    val state = remember { mutableStateOf(state) }

    onActive {
        val disposable = states(observer { state.value = it })
        onDispose(disposable::dispose)
    }

    return state
}
