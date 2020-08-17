package com.arkivanov.todo.router

import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.compose.runtime.onDispose
import androidx.compose.runtime.remember
import androidx.compose.runtime.state
import androidx.lifecycle.Lifecycle

@Composable
fun <C> Router(
    initialConfiguration: C,
    onBackPressedDispatcher: OnBackPressedDispatcher,
    resolve: Router<C>.(configuration: C, Lifecycle) -> ComposableComponent
) {
    val stack = state<List<StackEntry>> { emptyList() }

    val router =
        remember {
            val router = RouterImpl(stack, onBackPressedDispatcher, resolve)
            router.push(initialConfiguration)
            router
        }

    onDispose(router::dispose)

    router.content()
}
