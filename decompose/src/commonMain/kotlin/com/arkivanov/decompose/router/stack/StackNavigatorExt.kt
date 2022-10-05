package com.arkivanov.decompose.router.stack

/**
 * A convenience method for [StackNavigator.navigate].
 */
fun <C : Any> StackNavigator<C>.navigate(transformer: (stack: List<C>) -> List<C>) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

/**
 * Pushes the provided [configuration] at the top of the stack.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> StackNavigator<C>.push(configuration: C, onComplete: () -> Unit = {}) {
    navigate(transformer = { it + configuration }, onComplete = { _, _ -> onComplete() })
}

/**
 * Pops the latest configuration at the top of the stack.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if the stack size was greater than 1 and a component was popped,
 * `false` otherwise.
 */
fun <C : Any> StackNavigator<C>.pop(onComplete: (isSuccess: Boolean) -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.takeIf { it.size > 1 }?.dropLast(1) ?: stack },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

/**
 * Drops the configurations at the top of the stack while the [predicate] returns `true`.
 */
inline fun <C : Any> StackNavigator<C>.popWhile(crossinline predicate: (C) -> Boolean) {
    popWhile(predicate = predicate, onComplete = {})
}

/**
 * Drops the configurations at the top of the stack while the [predicate] returns true
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if at least one component has been popped.
 */
inline fun <C : Any> StackNavigator<C>.popWhile(
    crossinline predicate: (C) -> Boolean,
    crossinline onComplete: (isSuccess: Boolean) -> Unit,
) {
    navigate(
        transformer = { stack -> stack.dropLastWhile(predicate) },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

/**
 * Replaces the current configuration at the top of the stack with the provided [configuration].
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> StackNavigator<C>.replaceCurrent(configuration: C, onComplete: () -> Unit = {}) {
    navigate(
        transformer = { it.dropLast(1) + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}

/**
 * Replaces the whole stack with the provided [configurations].
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> StackNavigator<C>.replaceAll(vararg configurations: C, onComplete: () -> Unit = { }) {
    navigate(transformer = { configurations.toList() }, onComplete = { _, _ -> onComplete() })
}

/**
 * Removes all components with configurations of [configuration]'s class, and adds the provided [configuration] to the top of the stack.
 * The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.
 */
fun <C : Any> StackNavigator<C>.bringToFront(configuration: C, onComplete: () -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.filterNot { it::class == configuration::class } + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}
