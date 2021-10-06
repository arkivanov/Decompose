package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import com.arkivanov.decompose.value.Value

@Deprecated(
    message = "Please use Value.subscribeAsState() extension function",
    replaceWith = ReplaceWith("subscribeAsState()"),
    level = DeprecationLevel.ERROR,
)
@Composable
fun <T : Any> Value<T>.asState(): State<T> = subscribeAsState()
