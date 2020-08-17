package com.arkivanov.todo.router

import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.compose.runtime.onDispose
import androidx.compose.runtime.remember
import androidx.compose.runtime.state
import androidx.lifecycle.Lifecycle

interface Router<in C> {

    fun push(configuration: C)

    fun pop()
}

@Composable
fun <C> Router(
    params: () -> RouterParams<C>,
    resolve: Router<C>.(configuration: C, Lifecycle) -> Component
) {
    val stack = state<BackStack<C>> { BackStack() }

    val router =
        remember {
            val routerParams = params()

            RouterImpl(stack, routerParams.stateKeeper, routerParams.onBackPressedDispatcher, resolve).apply {
                push(routerParams.initialConfiguration)
            }
        }

    onDispose(router::dispose)

    router.content()
}

class RouterParams<C>(
    val initialConfiguration: C,
    val stateKeeper: RouterStateKeeper<C>? = null,
    val onBackPressedDispatcher: OnBackPressedDispatcher? = null,
)
