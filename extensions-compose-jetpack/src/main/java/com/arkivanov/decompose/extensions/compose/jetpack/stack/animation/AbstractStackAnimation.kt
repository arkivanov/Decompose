package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.pointer.pointerInput
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.stack.ChildStack

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
        var activePage by remember { mutableStateOf(stack.activePage()) }
        var items by remember { mutableStateOf(getAnimationItems(newPage = activePage, oldPage = null)) }

        if (stack.active.configuration != activePage.child.configuration) {
            val oldPage = activePage
            activePage = stack.activePage()
            items = getAnimationItems(newPage = activePage, oldPage = oldPage)
        }

        Box(modifier = modifier) {
            items.forEach { (configuration, item) ->
                key(configuration) {
                    Child(
                        item = item,
                        onFinished = {
                            if (item.direction.isExit) {
                                items -= configuration
                            } else {
                                items += (configuration to item.copy(otherChild = null))
                            }
                        },
                        content = content,
                    )
                }
            }

            // A workaround until https://issuetracker.google.com/issues/214231672.
            // Normally only the exiting child should be disabled.
            if (disableInputDuringAnimation && (items.size > 1)) {
                Overlay(modifier = Modifier.matchParentSize())
            }
        }
    }

    @Composable
    private fun Overlay(modifier: Modifier) {
        Box(
            modifier = modifier.pointerInput(Unit) {
                awaitPointerEventScope {
                    while (true) {
                        val event = awaitPointerEvent()
                        event.changes.forEach { it.consume() }
                    }
                }
            }
        )
    }

    private fun ChildStack<C, T>.activePage(): Page<C, T> =
        Page(child = active, index = items.lastIndex)

    private fun getAnimationItems(newPage: Page<C, T>, oldPage: Page<C, T>?): Map<C, AnimationItem<C, T>> =
        when {
            oldPage == null ->
                listOf(AnimationItem(child = newPage.child, direction = Direction.ENTER_FRONT, isInitial = true))

            newPage.index >= oldPage.index ->
                listOf(
                    AnimationItem(child = oldPage.child, direction = Direction.EXIT_BACK, otherChild = newPage.child),
                    AnimationItem(child = newPage.child, direction = Direction.ENTER_FRONT, otherChild = oldPage.child),
                )

            else ->
                listOf(
                    AnimationItem(child = newPage.child, direction = Direction.ENTER_BACK, otherChild = oldPage.child),
                    AnimationItem(child = oldPage.child, direction = Direction.EXIT_FRONT, otherChild = newPage.child),
                )
        }.associateBy { it.child.configuration }

    protected data class AnimationItem<out C : Any, out T : Any>(
        val child: Child.Created<C, T>,
        val direction: Direction,
        val isInitial: Boolean = false,
        val otherChild: Child.Created<C, T>? = null,
    )

    private class Page<out C : Any, out T : Any>(
        val child: Child.Created<C, T>,
        val index: Int,
    )
}
