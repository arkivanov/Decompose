package com.arkivanov.decompose.router

import com.arkivanov.decompose.Child

/**
 * A convenience method for [Router.navigate].
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 */
@Deprecated("Use Child Stack instead")
fun <C : Any> Router<C, *>.navigate(transformer: (stack: List<C>) -> List<C>) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

@Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
fun <C : Any> Router<C, *>.push(configuration: C) {
    push(configuration = configuration, onComplete = {})
}

/**
 * Pushes the provided [configuration] at the top of the stack.
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@Deprecated("Use Child Stack instead")
fun <C : Any> Router<C, *>.push(configuration: C, onComplete: () -> Unit = {}) {
    navigate(transformer = { it + configuration }, onComplete = { _, _ -> onComplete() })
}

/**
 * Pops the latest configuration at the top of the stack.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if the stack size was greater than 1 and a component was popped,
 * `false` otherwise.
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 */
@Deprecated("Use Child Stack instead")
fun <C : Any> Router<C, *>.pop(onComplete: (isSuccess: Boolean) -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.takeIf { it.size > 1 }?.dropLast(1) ?: stack },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

/**
 * Drops the configurations at the top of the stack while the [predicate] returns `true`.
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 */
@Suppress("DeprecatedCallableAddReplaceWith")
@Deprecated("Use Child Stack instead")
inline fun <C : Any> Router<C, *>.popWhile(crossinline predicate: (C) -> Boolean) {
    popWhile(predicate = predicate, onComplete = {})
}

/**
 * Drops the configurations at the top of the stack while the [predicate] returns true
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if at least one component has been popped.
 */
@Deprecated("Use Child Stack instead")
inline fun <C : Any> Router<C, *>.popWhile(
    crossinline predicate: (C) -> Boolean,
    crossinline onComplete: (isSuccess: Boolean) -> Unit,
) {
    navigate(
        transformer = { stack -> stack.dropLastWhile(predicate) },
        onComplete = { newStack, oldStack -> onComplete(newStack.size < oldStack.size) },
    )
}

@Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
fun <C : Any> Router<C, *>.replaceCurrent(configuration: C) {
    replaceCurrent(configuration = configuration, onComplete = {})
}

/**
 * Replaces the current configuration at the top of the stack with the provided [configuration].
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@Deprecated("Use Child Stack instead")
fun <C : Any> Router<C, *>.replaceCurrent(configuration: C, onComplete: () -> Unit = {}) {
    navigate(
        transformer = { it.dropLast(1) + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}

@Deprecated(message = "For binary compatibility", level = DeprecationLevel.HIDDEN)
fun <C : Any> Router<C, *>.bringToFront(configuration: C) {
    bringToFront(configuration = configuration, onComplete = {})
}

/**
 * Removes all components with configurations of [configuration]'s class, and adds the provided [configuration] to the top of the stack.
 * The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.
 *
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 */
@Deprecated("Use Child Stack instead")
fun <C : Any> Router<C, *>.bringToFront(configuration: C, onComplete: () -> Unit = {}) {
    navigate(
        transformer = { stack -> stack.filterNot { it::class == configuration::class } + configuration },
        onComplete = { _, _ -> onComplete() },
    )
}

/**
 * Deprecated. Please use `Child Stack` instead. See the [documentation](https://arkivanov.github.io/Decompose/child-stack/overview/).
 */
@Suppress("DeprecatedCallableAddReplaceWith")
@Deprecated("Use Child Stack instead")
val <C : Any, T : Any> Router<C, T>.activeChild: Child.Created<C, T>
    get() = state.value.activeChild
