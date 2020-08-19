package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.Lifecycle

interface Router<in C> : Component {

    fun push(configuration: C)

    fun pop()
}

fun <C> Router(
    initialConfiguration: C,
    lifecycle: Lifecycle,
    stateKeeper: RouterStateKeeper<C>? = null,
    onBackPressedDispatcher: OnBackPressedDispatcher? = null,
    resolve: (configuration: C, Lifecycle) -> Component
): Router<C> =
    RouterImpl(
        initialConfiguration = initialConfiguration,
        lifecycle = lifecycle,
        stateKeeper = stateKeeper,
        backPressedDispatcher = onBackPressedDispatcher,
        resolve = resolve
    )
