package com.arkivanov.decompose.router

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.SerializedQueue
import com.arkivanov.decompose.ensureNeverFrozen
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.essenty.backpressed.BackPressedHandler
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

internal class RouterImpl<C : Any, T : Any>(
    lifecycle: Lifecycle,
    private val backPressedHandler: BackPressedHandler,
    private val popOnBackPressed: Boolean,
    private val stackHolder: StackHolder<C, T>,
    private val navigator: StackNavigator<C, T>
) : Router<C, T> {

    init {
        ensureNeverFrozen()
    }

    private val onBackPressedHandler = ::onBackPressed
    override val state: MutableValue<RouterState<C, T>> = MutableValue(stackHolder.stack.toState())
    private val queue = SerializedQueue(::navigateActual)

    init {
        backPressedHandler.register(onBackPressedHandler)
        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        backPressedHandler.unregister(onBackPressedHandler)
    }

    override fun navigate(transformer: (stack: List<C>) -> List<C>) {
        queue.offer(transformer)
    }

    private fun navigateActual(transformer: (stack: List<C>) -> List<C>) {
        val newStack = navigator.navigate(oldStack = stackHolder.stack, transformer = transformer)
        stackHolder.stack = newStack
        state.value = newStack.toState()
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
            activeChild = Child.Created(configuration = active.configuration, instance = active.instance),
            backStack = backStack.map { it.toRouterStateEntry() }
        )

    private fun RouterEntry<C, T>.toRouterStateEntry(): Child<C, T> =
        when (this) {
            is RouterEntry.Created -> Child.Created(configuration = configuration, instance = instance)
            is RouterEntry.Destroyed -> Child.Destroyed(configuration = configuration)
        }
}
