package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver

@Composable
fun <T : Any> Value<T>.asState(): State<T> {
    val composeState = remember(this) { mutableStateOf(value) }

    DisposableEffect(this) {
        val observer: ValueObserver<T> = { composeState.value = it }

        subscribe(observer)

        onDispose {
            unsubscribe(observer)
        }
    }

    return composeState
}
