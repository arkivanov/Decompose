package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.utils.InputConsumingOverlay
import com.arkivanov.decompose.router.stack.ChildStack

@OptIn(ExperimentalDecomposeApi::class)
internal abstract class AbstractStackAnimation<C : Any, T : Any>(
    private val disableInputDuringAnimation: Boolean,
) : StackAnimation<C, T> {

    @Composable
    protected abstract fun Child(
        item: AnimationItem<C, T>,
        onFinished: () -> Unit,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    )

    @Composable
    override operator fun invoke(stack: ChildStack<C, T>, modifier: Modifier, content: @Composable (child: Child.Created<C, T>) -> Unit) {
        var currentStack by remember { mutableStateOf(stack) }
        var items by remember { mutableStateOf(getAnimationItems(newStack = currentStack, oldStack = null)) }
        var nextItems: Map<Any, AnimationItem<C, T>>? by remember { mutableStateOf(null) }

        if (stack.active.key != currentStack.active.key || stack.active.instance != currentStack.active.instance) {
            val oldStack = currentStack
            currentStack = stack

            val newItems = getAnimationItems(newStack = currentStack, oldStack = oldStack)
            if (items.size == 1) {
                items = newItems
            } else {
                nextItems = newItems
            }
        }

        Box(modifier = modifier) {
            items.forEach { (key, item) ->
                key(key) {
                    Child(
                        item = item,
                        onFinished = {
                            if (item.direction.isExit) {
                                items -= key
                            } else {
                                items += (key to item.copy(otherChild = null))
                            }
                        },
                        content = content,
                    )

                    if (item.direction.isExit) {
                        DisposableEffect(Unit) {
                            onDispose {
                                nextItems?.also { items = it }
                                nextItems = null
                            }
                        }
                    }
                }
            }

            // A workaround until https://issuetracker.google.com/issues/214231672.
            // Normally only the exiting child should be disabled.
            if (disableInputDuringAnimation && ((items.size > 1) || (nextItems != null))) {
                InputConsumingOverlay(modifier = Modifier.matchParentSize())
            }
        }
    }

    private fun getAnimationItems(newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>?): Map<Any, AnimationItem<C, T>> =
        when {
            (oldStack == null) || (newStack.active.key == oldStack.active.key) ->
                listOf(AnimationItem(child = newStack.active, direction = Direction.ENTER_FRONT, isInitial = true))

            (newStack.size < oldStack.size) && (newStack.active.key in oldStack.backStack) ->
                listOf(
                    AnimationItem(child = newStack.active, direction = Direction.ENTER_BACK, otherChild = oldStack.active),
                    AnimationItem(child = oldStack.active, direction = Direction.EXIT_FRONT, otherChild = newStack.active),
                )

            else ->
                listOf(
                    AnimationItem(child = oldStack.active, direction = Direction.EXIT_BACK, otherChild = newStack.active),
                    AnimationItem(child = newStack.active, direction = Direction.ENTER_FRONT, otherChild = oldStack.active),
                )
        }.associateBy { it.child.key }

    private val ChildStack<*, *>.size: Int
        get() = items.size

    private operator fun <C : Any> Iterable<Child<C, *>>.contains(key: Any): Boolean =
        any { it.key == key }

    protected data class AnimationItem<out C : Any, out T : Any>(
        val child: Child.Created<C, T>,
        val direction: Direction,
        val isInitial: Boolean = false,
        val otherChild: Child.Created<C, T>? = null,
    )
}
