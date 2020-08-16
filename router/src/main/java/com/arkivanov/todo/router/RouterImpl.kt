package com.arkivanov.todo.router

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.Composable
import androidx.compose.MutableState
import androidx.lifecycle.Lifecycle

internal class RouterImpl<in C>(
    private val stack: MutableState<List<StackEntry>>,
    backPressedDispatcher: OnBackPressedDispatcher,
    private val resolve: Router<C>.(configuration: C, Lifecycle) -> ComposableComponent
) : Router<C> {

    private val backPressedCallback = BackPressedCallback()

    init {
        backPressedDispatcher.addCallback(backPressedCallback)
    }

    fun dispose() {
        backPressedCallback.remove()

        while (stack.value.isNotEmpty()) {
            pop()
        }
    }

    override fun push(configuration: C) {
        val last: StackEntry? = stack.value.lastOrNull()
        last?.lifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        val lifecycle = LifecycleHolder()
        val component = resolve(configuration, lifecycle.registry)
        stack.value = stack.value + StackEntry(component, lifecycle)
        lifecycle.registry.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        lifecycle.registry.handleLifecycleEvent(Lifecycle.Event.ON_START)
        lifecycle.registry.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        last?.lifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)

        backPressedCallback.isEnabled = stack.value.size > 1
    }

    override fun pop() {
        val current = stack.value.last()
        stack.value = stack.value.dropLast(1)
        current.lifecycle.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        val previous: StackEntry? = stack.value.lastOrNull()
        previous?.lifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_START)
        previous?.lifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        current.lifecycle.handleLifecycleEvent(Lifecycle.Event.ON_STOP)
        current.lifecycle.handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)

        backPressedCallback.isEnabled = stack.value.size > 1
    }

    @Composable
    fun content() {
        stack.value.lastOrNull()?.component?.content()
    }

    private inner class BackPressedCallback : OnBackPressedCallback(false) {
        override fun handleOnBackPressed() {
            pop()
        }
    }
}


