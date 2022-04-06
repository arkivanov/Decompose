package com.arkivanov.decompose.router

import com.arkivanov.decompose.Child

/**
 * A convenience method for [Router.navigate].
 */
fun <C : Any> Router<C, *>.navigate(transformer: (stack: List<C>) -> List<C>) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

/**
 * Pushes the provided [configuration] at the top of the stack..
 */
fun <C : Any> Router<C, *>.push(configuration: C) {
    navigate { it + configuration }
}

/**
 * Pops the latest configuration at the top of the stack.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if the stack size was greater than 1 and a component was popped,
 * `false` otherwise.
 */
fun <C : Any> Router<C, *>.pop(onComplete: (isSuccess: Boolean) -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.takeIf { it.size > 1 }?.dropLast(1) ?: stack },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) }
    )
}

/**
 * Drops the configurations at the top of the stack while the [predicate] returns true
 */
inline fun <C : Any> Router<C, *>.popWhile(crossinline predicate: (C) -> Boolean) {
    navigate { it.dropLastWhile(predicate) }
}

/**
 * Replaces the current configuration at the top of the stack with the provided [configuration].
 */
fun <C : Any> Router<C, *>.replaceCurrent(configuration: C) {
    navigate { it.dropLast(1) + configuration }
}

/**
 * Removes all components with configurations of [configuration]'s class, and adds the provided [configuration] to the top of the stack.
 * The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.
 */
fun <C : Any> Router<C, *>.bringToFront(configuration: C) {
    navigate { stack ->
        stack.filterNot { it::class == configuration::class } + configuration
    }
}

val <C : Any, T : Any> Router<C, T>.activeChild: Child.Created<C, T> get() = state.value.activeChild
