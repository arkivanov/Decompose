package com.arkivanov.todo.router

import androidx.activity.OnBackPressedDispatcher
import androidx.compose.Composable
import androidx.compose.onDispose
import androidx.compose.remember
import androidx.compose.state
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
