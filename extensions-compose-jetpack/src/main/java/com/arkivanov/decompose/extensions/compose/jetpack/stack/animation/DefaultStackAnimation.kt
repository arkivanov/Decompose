@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.movableContentOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.pointer.consumeAllChanges
import androidx.compose.ui.input.pointer.pointerInput
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack

@ExperimentalDecomposeApi
internal class DefaultStackAnimation<C : Any, T : Any>(
    private val selector: (child: Child.Created<C, T>, otherChild: Child.Created<C, T>, direction: Direction) -> StackAnimator?,
) : StackAnimation<C, T> {

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
                    Item(
                        item = item,
                        onFinished = { direction ->
                            items =
                                when (direction) {
                                    Direction.EXIT_FRONT,
                                    Direction.EXIT_BACK -> items - configuration
                                    Direction.ENTER_FRONT,
                                    Direction.ENTER_BACK -> items + (configuration to AnimationItem.Single(item.child))
                                }
                        },
                        content = content,
                    )
                }
            }

            // A workaround until https://issuetracker.google.com/issues/214231672.
            // Normally only the exiting child be disabled.
            if (items.size > 1) {
                Overlay(modifier = Modifier.matchParentSize())
            }
        }
    }

    @Composable
    private fun Item(
        item: AnimationItem<C, T>,
        onFinished: (Direction) -> Unit,
        content: @Composable (child: Child.Created<C, T>) -> Unit,
    ) {
        val childContent =
            remember {
                movableContentOf<Modifier> { modifier ->
                    Box(modifier = modifier) {
                        content(item.child)
                    }
                }
            }

        when (item) {
            is AnimationItem.Single -> childContent(Modifier)
            is AnimationItem.Pair -> ItemPair(item = item, onFinished = onFinished, content = childContent)
        }
    }

    @Composable
    private fun ItemPair(
        item: AnimationItem.Pair<C, T>,
        onFinished: (Direction) -> Unit,
        content: @Composable (Modifier) -> Unit,
    ) {
        val direction = item.direction
        val animator: StackAnimator? = remember(direction) { selector(item.child, item.otherChild, direction) }

        if (animator == null) {
            if (direction.isEnter) {
                content(Modifier)
            }

            DisposableEffect(Unit) {
                onFinished(direction)
                onDispose {}
            }
        } else {
            animator(
                direction = direction,
                onFinished = { onFinished(direction) },
                content = content,
            )
        }
    }

    @Composable
    private fun Overlay(modifier: Modifier) {
        Box(
            modifier = modifier.pointerInput(Unit) {
                awaitPointerEventScope {
                    while (true) {
                        val event = awaitPointerEvent()
                        event.changes.forEach { it.consumeAllChanges() }
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
                listOf(AnimationItem.Single(newPage.child))

            newPage.index >= oldPage.index ->
                listOf(
                    AnimationItem.Pair(oldPage.child, newPage.child, Direction.EXIT_BACK),
                    AnimationItem.Pair(newPage.child, oldPage.child, Direction.ENTER_FRONT),
                )

            else ->
                listOf(
                    AnimationItem.Pair(newPage.child, oldPage.child, Direction.ENTER_BACK),
                    AnimationItem.Pair(oldPage.child, newPage.child, Direction.EXIT_FRONT),
                )
        }.associateBy { it.child.configuration }

    private sealed interface AnimationItem<out C : Any, out T : Any> {
        val child: Child.Created<C, T>

        data class Single<out C : Any, out T : Any>(
            override val child: Child.Created<C, T>,
        ) : AnimationItem<C, T>

        data class Pair<out C : Any, out T : Any>(
            override val child: Child.Created<C, T>,
            val otherChild: Child.Created<C, T>,
            val direction: Direction,
        ) : AnimationItem<C, T>
    }

    private class Page<out C : Any, out T : Any>(
        val child: Child.Created<C, T>,
        val index: Int,
    )
}
