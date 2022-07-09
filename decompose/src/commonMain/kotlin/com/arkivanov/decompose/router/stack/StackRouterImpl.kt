package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.SerializedQueue
import com.arkivanov.decompose.ensureNeverFrozen
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.essenty.backpressed.BackPressedHandler
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

internal class StackRouterImpl<C : Any, T : Any>(
    lifecycle: Lifecycle,
    private val backPressedHandler: BackPressedHandler,
    private val popOnBackPressed: Boolean,
    private val stackHolder: StackHolder<C, T>,
    private val navigator: StackNavigator<C, T>,
) : StackRouter<C, T> {

    init {
        ensureNeverFrozen()
    }

    private val onBackPressedHandler = ::onBackPressed
    override val stack: MutableValue<ChildStack<C, T>> = MutableValue(stackHolder.stack.toState())
    private val queue = SerializedQueue(::navigateActual)

    init {
        backPressedHandler.register(onBackPressedHandler)
        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        backPressedHandler.unregister(onBackPressedHandler)
    }

    override fun navigate(transformer: (stack: List<C>) -> List<C>, onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit) {
        queue.offer(NavigationItem(transformer = transformer, onComplete = onComplete))
    }

    private fun navigateActual(item: NavigationItem<C>) {
        val oldStack = stackHolder.stack
        val newStack = navigator.navigate(oldStack = oldStack, transformer = item.transformer)
        stackHolder.stack = newStack
        stack.value = newStack.toState()
        item.onComplete(newStack.configurationStack, oldStack.configurationStack)
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

    private fun RouterStack<C, T>.toState(): ChildStack<C, T> =
        ChildStack(
            active = Child.Created(configuration = active.configuration, instance = active.instance),
            backStack = backStack.map { it.toChild() }
        )

    private fun RouterEntry<C, T>.toChild(): Child<C, T> =
        when (this) {
            is RouterEntry.Created -> Child.Created(configuration = configuration, instance = instance)
            is RouterEntry.Destroyed -> Child.Destroyed(configuration = configuration)
        }

    private class NavigationItem<C : Any>(
        val transformer: (stack: List<C>) -> List<C>,
        val onComplete: (newStack: List<C>, oldStack: List<C>) -> Unit,
    )
}
