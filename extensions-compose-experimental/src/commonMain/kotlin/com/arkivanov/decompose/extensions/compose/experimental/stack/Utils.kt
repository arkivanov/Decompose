package com.arkivanov.decompose.extensions.compose.experimental.stack

import com.arkivanov.decompose.router.stack.ChildStack
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch

internal fun <C : Any, T : Any> ChildStack<C, T>.dropLast(): ChildStack<C, T> =
    ChildStack(active = backStack.last(), backStack = backStack.dropLast(1))

internal val ChildStack<*, *>.size: Int get() = items.size

internal suspend inline fun awaitAll(vararg jobs: suspend CoroutineScope.() -> Unit) {
    coroutineScope {
        jobs.map { launch(block = it) }.joinAll()
    }
}
