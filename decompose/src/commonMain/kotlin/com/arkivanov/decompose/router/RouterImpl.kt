package com.arkivanov.decompose.router

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.backpressed.BackPressedRegistry
import com.arkivanov.decompose.ensureNeverFrozen
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.pop
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.value.MutableValue

internal class RouterImpl<C : Parcelable, T : Any>(
    lifecycle: Lifecycle,
    private val backPressedRegistry: BackPressedRegistry,
    private val popOnBackPressed: Boolean,
    private val stackHolder: StackHolder<C, T>,
    private val navigator: StackNavigator<C, T>
) : Router<C, T> {

    init {
        ensureNeverFrozen()
    }

    private val onBackPressedHandler = ::onBackPressed
    override val state: MutableValue<RouterState<C, T>> = MutableValue(stackHolder.stack.toState())
    private val queue = ArrayDeque<(List<C>) -> List<C>>()

    init {
        backPressedRegistry.register(onBackPressedHandler)
        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        backPressedRegistry.unregister(onBackPressedHandler)
    }

    override fun navigate(transformer: (stack: List<C>) -> List<C>) {
        queue.addLast(transformer)
        if (queue.size == 1) {
            drainQueue()
        }
    }

    private fun drainQueue() {
        do {
            val newStack = navigator.navigate(oldStack = stackHolder.stack, transformer = queue.first())
            stackHolder.stack = newStack
            state.value = newStack.toState()
            queue.removeFirst()
        } while (queue.isNotEmpty())
    }

    private fun onBackPressed(): Boolean =
        when {
            stackHolder.stack.active.backPressedDispatcher.onBackPressed() -> true

            popOnBackPressed && stackHolder.stack.backStack.isNotEmpty() -> {
                pop()
                true
            }

            else -> false
        }

    private fun RouterStack<C, T>.toState(): RouterState<C, T> =
        RouterState(
            activeChild = Child.Created(configuration = active.configuration, component = active.component),
            backStack = backStack.map { it.toRouterStateEntry() }
        )

    private fun RouterEntry<C, T>.toRouterStateEntry(): Child<C, T> =
        when (this) {
            is RouterEntry.Created -> Child.Created(configuration = configuration, component = component)
            is RouterEntry.Destroyed -> Child.Destroyed(configuration = configuration)
        }
}
