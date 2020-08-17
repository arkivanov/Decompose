package com.arkivanov.todo.router

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.lifecycle.Lifecycle
import com.arkivanov.todo.router.BackStack.Entry

internal class RouterImpl<in C>(
    private val stackState: MutableState<BackStack<C>>,
    private val stateKeeper: RouterStateKeeper<C>?,
    backPressedDispatcher: OnBackPressedDispatcher?,
    private val resolve: Router<C>.(configuration: C, Lifecycle) -> Component
) : Router<C> {

    private val backPressedCallback = BackPressedCallback()

    init {
        stateKeeper?.register(::saveState)
        backPressedDispatcher?.addCallback(backPressedCallback)
    }

    private fun saveState(): List<C> {
        val stack = stackState.value
        val entries = if (stack.top == null) stack.stack else stack.stack + stack.top

        return entries.map(Entry<C>::configuration)
    }

    private fun restoreStateIfNeeded() {
        val configurations = stateKeeper?.consume() ?: return

        applyBackStack(
            BackStack(
                top = configurations.lastOrNull()?.let(::createBackStackEntry),
                stack = configurations.dropLast(1).map { Entry.Destroyed(it) }
            )
        )
    }

    @Composable
    fun content() {
        restoreStateIfNeeded()
        stackState.value.top?.component?.content()
    }

    fun dispose() {
        while (stackState.value.top != null) {
            pop()
        }

        stateKeeper?.unregister()
    }

    override fun push(configuration: C) {
        val oldStack = stackState.value
        val newEntry = createBackStackEntry(configuration)

        val oldLifecycle = oldStack.top?.lifecycle
        val newLifecycle = newEntry.lifecycle

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_START)
        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)

        applyBackStack(oldStack.push(newEntry))
    }

    override fun pop() {
        val oldStack = stackState.value
        val newStack = oldStack.pop(::createBackStackEntry)

        val oldLifecycle = oldStack.top?.lifecycle
        val newLifecycle = newStack.top?.lifecycle

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        newLifecycle?.takeUnless { it.currentState == Lifecycle.State.INITIALIZED }?.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        newLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_START)
        newLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)
        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)

        applyBackStack(newStack)
    }

    private fun createBackStackEntry(configuration: C): Entry.Created<C> {
        val lifecycleHolder = LifecycleHolder()

        return Entry.Created(
            configuration = configuration,
            component = resolve(configuration, lifecycleHolder.registry),
            lifecycleHolder = lifecycleHolder
        )
    }

    private fun applyBackStack(backStack: BackStack<C>) {
        stackState.value = backStack
        backPressedCallback.isEnabled = backStack.stack.isNotEmpty()
    }

    private inner class BackPressedCallback : OnBackPressedCallback(false) {
        override fun handleOnBackPressed() {
            pop()
        }
    }
}


