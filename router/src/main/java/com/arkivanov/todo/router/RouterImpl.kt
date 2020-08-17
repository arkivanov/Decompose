package com.arkivanov.todo.router

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.lifecycle.Lifecycle
import com.arkivanov.todo.router.BackStack.Entry

internal class RouterImpl<in C>(
    private val stack: MutableState<BackStack<C>>,
    backPressedDispatcher: OnBackPressedDispatcher,
    private val resolve: Router<C>.(configuration: C, Lifecycle) -> ComposableComponent
) : Router<C> {

    private val backPressedCallback = BackPressedCallback()

    init {
        backPressedDispatcher.addCallback(backPressedCallback)
    }

    @Composable
    fun content() {
        stack.value.top?.component?.content()
    }

    fun dispose() {
        while (stack.value.top != null) {
            pop()
        }
    }

    override fun push(configuration: C) {
        val oldStack = stack.value
        val newEntry = createBackStackEntry(configuration)

        val oldLifecycle = oldStack.top?.lifecycle
        val newLifecycle = newEntry.lifecycle

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_START)
        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)

        val newStack = oldStack.push(newEntry)
        stack.value = newStack
        backPressedCallback.isEnabled = newStack.stack.isNotEmpty()
    }

    override fun pop() {
        val oldStack = stack.value
        val newStack = oldStack.pop(::createBackStackEntry)

        val oldLifecycle = oldStack.top?.lifecycle
        val newLifecycle = newStack.top?.lifecycle

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        newLifecycle?.takeUnless { it.currentState == Lifecycle.State.INITIALIZED }?.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        newLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_START)
        newLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)
        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)

        stack.value = newStack
        backPressedCallback.isEnabled = newStack.stack.isNotEmpty()
    }

    private fun createBackStackEntry(configuration: C): Entry.Created<C> {
        val lifecycleHolder = LifecycleHolder()

        return Entry.Created(
            configuration = configuration,
            component = resolve(configuration, lifecycleHolder.registry),
            lifecycleHolder = lifecycleHolder
        )
    }

    private inner class BackPressedCallback : OnBackPressedCallback(false) {
        override fun handleOnBackPressed() {
            pop()
        }
    }
}


