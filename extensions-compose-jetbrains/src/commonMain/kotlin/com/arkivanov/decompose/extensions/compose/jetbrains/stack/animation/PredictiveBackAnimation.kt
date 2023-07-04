package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.absoluteOffset
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.movableContentOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackHandler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlin.time.Duration.Companion.milliseconds

/**
 * Wraps the provided [animation], handles the predictive back gesture and animates
 * the transition from the current [Child] to the previous one.
 * Calls [onBack] when the animation is finished.
 *
 * @param backHandler a source of the predictive back gesture events, see [BackHandler].
 * @param animation a [StackAnimation] for regular transitions.
 * @param exitModifier a function that returns a [Modifier] for every gesture event, for
 * the child being removed (the currently active child).
 * @param enterModifier a function that returns a [Modifier] for every gesture event, for
 * the previous child (behind the currently active child).
 * @param onBack a callback that is called when the gesture is finished.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> predictiveBackAnimation(
    backHandler: BackHandler,
    animation: StackAnimation<C, T>? = null,
    exitModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier = { progress, edge ->
        Modifier.exitModifier(progress = progress, edge = edge)
    },
    enterModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier = { progress, _ ->
        Modifier.enterModifier(progress = progress)
    },
    onBack: () -> Unit,
): StackAnimation<C, T> =
    PredictiveBackAnimation(
        backHandler = backHandler,
        animation = animation ?: emptyStackAnimation(),
        exitModifier = exitModifier,
        enterModifier = enterModifier,
        onBack = onBack,
    )

private fun Modifier.exitModifier(progress: Float, edge: BackEvent.SwipeEdge): Modifier =
    scale(1F - progress * 0.25F)
        .absoluteOffset(
            x = when (edge) {
                BackEvent.SwipeEdge.LEFT -> 32.dp * progress
                BackEvent.SwipeEdge.RIGHT -> (-32).dp * progress
                BackEvent.SwipeEdge.UNKNOWN -> 0.dp
            },
        )
        .alpha(((1F - progress) * 2F).coerceAtMost(1F))
        .clip(RoundedCornerShape(size = 64.dp * progress))

private fun Modifier.enterModifier(progress: Float): Modifier =
    drawWithContent {
        drawContent()
        drawRect(color = Color(red = 0F, green = 0F, blue = 0F, alpha = (1F - progress) / 4F))
    }

private class PredictiveBackAnimation<C : Any, T : Any>(
    private val backHandler: BackHandler,
    private val animation: StackAnimation<C, T>,
    private val exitModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
    private val enterModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
    private val onBack: () -> Unit,
) : StackAnimation<C, T> {

    @Composable
    override fun invoke(stack: ChildStack<C, T>, modifier: Modifier, content: @Composable (child: Child.Created<C, T>) -> Unit) {
        val childContent =
            remember(content) {
                movableContentOf<Child.Created<C, T>> { child ->
                    key(child.configuration) {
                        content(child)
                    }
                }
            }

        val currentKey = remember { Holder(value = 0) }

        var items: List<Item<C, T>> by rememberMutableStateWithLatest(
            key = stack,
            onReplaced = { latestItems -> currentKey.value = latestItems.maxOf(Item<*, *>::key) },
            getValue = { listOf(Item(stack = stack, key = currentKey.value)) },
        )

        Box(modifier = modifier) {
            items.forEach { item ->
                key(item.key) {
                    animation(
                        stack = item.stack,
                        modifier = Modifier.fillMaxSize().then(item.modifier),
                        content = childContent,
                    )
                }
            }
        }

        DisposableEffect(stack) {
            if (stack.backStack.isEmpty()) {
                return@DisposableEffect onDispose {}
            }

            val scope = CoroutineScope(Dispatchers.Main.immediate)

            val callback =
                GestureBackCallback(
                    scope = scope,
                    stack = stack,
                    currentKey = currentKey.value,
                    exitModifier = exitModifier,
                    enterModifier = enterModifier,
                    setItems = { items = it },
                    onFinished = {
                        currentKey.value++
                        onBack()
                    },
                )

            backHandler.register(callback)

            onDispose {
                scope.cancel()
                backHandler.unregister(callback)
            }
        }
    }

    @Composable
    private fun <T : Any> rememberMutableStateWithLatest(
        key: Any,
        onReplaced: (latestValue: T) -> Unit,
        getValue: () -> T,
    ): MutableState<T> {
        val latestValue: Holder<T?> = remember { Holder(value = null) }

        val state =
            remember(key) {
                latestValue.value?.also(onReplaced)
                mutableStateOf(getValue())
            }

        latestValue.value = state.value

        return state
    }

    private data class BackData<out C : Any, out T : Any>(
        val progress: Float,
        val edge: BackEvent.SwipeEdge,
        val exitItem: Item<C, T>,
        val enterItem: Item<C, T>,
    )

    private data class Item<out C : Any, out T : Any>(
        val stack: ChildStack<C, T>,
        val key: Int,
        val modifier: Modifier = Modifier,
    )

    private class Holder<T>(var value: T)

    private class GestureBackCallback<C : Any, T : Any>(
        private val scope: CoroutineScope,
        stack: ChildStack<C, T>,
        currentKey: Int,
        private val exitModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
        private val enterModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
        private val setItems: (List<Item<C, T>>) -> Unit,
        private val onFinished: (newKey: Int) -> Unit,
    ) : BackCallback() {
        private var backData: BackData<C, T> =
            BackData(
                progress = 0F,
                edge = BackEvent.SwipeEdge.UNKNOWN,
                exitItem = Item(stack = stack, key = currentKey),
                enterItem = Item(stack = stack.dropLast(), key = currentKey + 1),
            )

        private fun ChildStack<C, T>.dropLast(): ChildStack<C, T> =
            ChildStack(active = backStack.last(), backStack = backStack.dropLast(1))

        override fun onBackStarted(backEvent: BackEvent) {
            updateData(backEvent)
        }

        private fun updateData(backEvent: BackEvent) {
            backData = backData.withProgress(progress = backEvent.progress, edge = backEvent.swipeEdge)
            setItems(listOf(backData.enterItem, backData.exitItem))
        }

        override fun onBackProgressed(backEvent: BackEvent) {
            updateData(backEvent)
        }

        override fun onBackCancelled() {
            setItems(listOf(backData.exitItem.copy(modifier = Modifier)))
        }

        override fun onBack() {
            scope.launch { continueGesture() }
        }

        private suspend fun CoroutineScope.continueGesture() {
            var progress = backData.progress
            while ((progress <= 1F) && isActive) {
                delay(16.milliseconds)
                progress += 0.075F
                backData = backData.withProgress(progress = progress)
                setItems(listOf(backData.enterItem, backData.exitItem))
            }

            if (isActive) {
                setItems(listOf(backData.enterItem.copy(modifier = Modifier)))
                onFinished(backData.enterItem.key)
            }
        }

        private fun BackData<C, T>.withProgress(
            progress: Float = this.progress,
            edge: BackEvent.SwipeEdge = this.edge,
        ): BackData<C, T> =
            copy(
                progress = progress.coerceIn(0F..1F),
                edge = edge,
                exitItem = exitItem.copy(modifier = exitModifier(progress, edge)),
                enterItem = enterItem.copy(modifier = enterModifier(progress, edge)),
            )
    }
}
