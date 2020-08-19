package com.arkivanov.decompose

import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import com.arkivanov.decompose.BackStack.Entry

internal class RouterImpl<in C>(
    private val initialConfiguration: C,
    private val lifecycle: Lifecycle,
    private val stateKeeper: RouterStateKeeper<C>?,
    backPressedDispatcher: OnBackPressedDispatcher?,
    private val resolve: (configuration: C, Lifecycle) -> Component
) : Router<C> {

    private val stackState = mutableStateOf(BackStack<C>())
    private val backPressedCallback = BackPressedCallback()

    init {
        stateKeeper?.register(::saveState)
        backPressedDispatcher?.addCallback(backPressedCallback)

        lifecycle.addObserver(
            object : DefaultLifecycleObserver {
                override fun onCreate(owner: LifecycleOwner) {
                    if (!restoreState()) {
                        push(initialConfiguration)
                    }
                }

                override fun onDestroy(owner: LifecycleOwner) {
                    dispose()
                }
            }
        )
    }

    private fun saveState(): List<C> {
        val stack = stackState.value
        val entries = if (stack.top == null) stack.stack else stack.stack + stack.top

        return entries.map(Entry<C>::configuration)
    }

    private fun restoreState(): Boolean {
        val configurations = stateKeeper?.consume() ?: return false

        applyBackStack(BackStack(stack = configurations.dropLast(1).map { Entry.Destroyed(it) }))
        configurations.lastOrNull()?.also(::push)

        return true
    }

    @Composable
    override fun content() {
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
        applyBackStack(oldStack.push(newEntry))

        val oldLifecycle = oldStack.top?.lifecycle
        val newLifecycle = newEntry.lifecycle

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_START)
        newLifecycle.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)
    }

    override fun pop() {
        val oldStack = stackState.value
        val newStack = oldStack.pop(::createBackStackEntry)
        applyBackStack(newStack)

        val oldLifecycle = oldStack.top?.lifecycle
        val newLifecycle = newStack.top?.lifecycle

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)

        newLifecycle?.takeUnless { it.currentState == Lifecycle.State.INITIALIZED }?.handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
        newLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_START)
        newLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)

        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_STOP)
        oldLifecycle?.handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    }

    private fun createBackStackEntry(configuration: C): Entry.Created<C> {
        val lifecycleHolder = LifecycleHolder()
        val mergedLifecycle = MergedLifecycle(lifecycle, lifecycleHolder.registry)

        return Entry.Created(
            configuration = configuration,
            component = resolve(configuration, mergedLifecycle.registry),
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
