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
 * Decompose will throw an exception if the provided [configuration] is already present in the stack.
 * You can also try enabling the experimental
 * [Duplicate Configurations][com.arkivanov.decompose.DecomposeExperimentFlags.duplicateConfigurationsEnabled] feature
 * to avoid the error.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
inline fun <C : Any> StackNavigator<C>.push(configuration: C, crossinline onComplete: () -> Unit = {}) {
    navigate(transformer = { it + configuration }, onComplete = { _, _ -> onComplete() })
}

/**
 * Pushes the provided [configuration] at the top of the stack. Does nothing if the provided
 * [configuration] is already on top of the stack.
 *
 * Decompose will throw an exception if the provided [configuration] is already present in the
 * back stack (not at the top of the stack). You can also try enabling the experimental
 * [Duplicate Configurations][com.arkivanov.decompose.DecomposeExperimentFlags.duplicateConfigurationsEnabled] feature
 * to avoid the error.
 *
 * This can be useful when pushing a component on button click, to avoid pushing the same component
 * if the user clicks the same button quickly multiple times.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if the component was pushed, `false` otherwise.
 */
inline fun <C : Any> StackNavigator<C>.pushNew(
    configuration: C,
    crossinline onComplete: (isSuccess: Boolean) -> Unit = {},
) {
    navigate(
        transformer = { stack -> if (stack.last() == configuration) stack else stack + configuration },
        onComplete = { newStack, oldStack -> onComplete(newStack.size > oldStack.size) },
    )
}

/**
 * Pushes the provided [configuration] to the top of the stack,
 * removing the [configuration] from the back stack, if any.
 *
 * This API works similar to [bringToFront], except it compares configurations
 * by equality rather than by configuration class.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
inline fun <C : Any> StackNavigator<C>.pushToFront(
    configuration: C,
    crossinline onComplete: () -> Unit = {},
) {
    navigate(
        transformer = { stack -> stack - configuration + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}

/**
 * Pops the latest configuration at the top of the stack.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if the stack size was greater than 1 and a component was popped,
 * `false` otherwise.
 */
inline fun <C : Any> StackNavigator<C>.pop(crossinline onComplete: (isSuccess: Boolean) -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.takeIf { it.size > 1 }?.dropLast(1) ?: stack },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

/**
 * Pops configurations at the top of the stack while the [predicate] returns `true`.
 * If the [predicate] returns `true` for every configuration, then the first (oldest) configuration
 * remains in the stack.
 */
inline fun <C : Any> StackNavigator<C>.popWhile(crossinline predicate: (C) -> Boolean) {
    popWhile(predicate = predicate, onComplete = {})
}

/**
 * Pops configurations at the top of the stack while the [predicate] returns true.
 * If the [predicate] returns `true` for every configuration, then the first (oldest) configuration
 * remains in the stack.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if at least one component has been popped.
 */
inline fun <C : Any> StackNavigator<C>.popWhile(
    crossinline predicate: (C) -> Boolean,
    crossinline onComplete: (isSuccess: Boolean) -> Unit,
) {
    navigate(
        transformer = { stack -> stack.dropLastWhile(predicate).takeUnless(List<*>::isEmpty) ?: stack.take(1) },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

/**
 * Pops configurations at the top of the stack so that the provided index becomes active (the new top of the stack).
 *
 * @param index the index of the configuration to become active. Must not be negative.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if at least one component has been popped.
 */
inline fun <C : Any> StackNavigator<C>.popTo(
    index: Int,
    crossinline onComplete: (isSuccess: Boolean) -> Unit = {},
) {
    require(index >= 0) { "Index must not negative, but was $index" }

    navigate(
        transformer = { it.take(index + 1) },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

/**
 * Pops configurations at the top of the stack so that the first configuration becomes active (the new top of the stack).
 * Does nothing if there is only one component in the stack.
 *
 * Equivalent to `popTo(index = 0)`.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if at least one component has been popped.
 */
inline fun StackNavigator<*>.popToFirst(crossinline onComplete: (isSuccess: Boolean) -> Unit = {}) {
    popTo(index = 0, onComplete = onComplete)
}

/**
 * Replaces the current configuration at the top of the stack with the provided [configuration].
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
inline fun <C : Any> StackNavigator<C>.replaceCurrent(configuration: C, crossinline onComplete: () -> Unit = {}) {
    navigate(
        transformer = { it.dropLast(1) + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}

/**
 * Replaces all configurations currently in the stack with the provided [configurations].
 * Components that remain in the stack are not recreated, components that are no longer in the stack are destroyed.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
inline fun <C : Any> StackNavigator<C>.replaceAll(vararg configurations: C, crossinline onComplete: () -> Unit = { }) {
    navigate(transformer = { configurations.toList() }, onComplete = { _, _ -> onComplete() })
}

/**
 * Removes all components with configurations of [configuration]'s class, and adds the provided [configuration] to the top of the stack.
 * The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.
 */
inline fun <C : Any> StackNavigator<C>.bringToFront(configuration: C, crossinline onComplete: () -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.filterNot { it::class == configuration::class } + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}
