package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.absoluteOffset
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
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
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> predictiveBackAnimation(
    backHandler: BackHandler,
    animation: StackAnimation<C, T>? = null,
    activeModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier = ::getPredictiveBackGestureAnimationModifier,
    onBack: () -> Unit,
): StackAnimation<C, T> =
    PredictiveBackAnimation(
        backHandler = backHandler,
        animation = animation ?: emptyStackAnimation(),
        activeModifier = activeModifier,
        onBack = onBack,
    )

@SuppressLint("ModifierFactoryExtensionFunction")
private fun getPredictiveBackGestureAnimationModifier(
    progress: Float,
    edge: BackEvent.SwipeEdge,
): Modifier =
    Modifier
        .scale(1F - progress * 0.25F)
        .absoluteOffset(
            x = when (edge) {
                BackEvent.SwipeEdge.LEFT -> 32.dp * progress
                BackEvent.SwipeEdge.RIGHT -> (-32).dp * progress
                BackEvent.SwipeEdge.UNKNOWN -> 0.dp
            },
        )
        .alpha(((1F - progress) * 2F).coerceAtMost(1F))
        .clip(RoundedCornerShape(percent = 10))

private class PredictiveBackAnimation<C : Any, T : Any>(
    private val backHandler: BackHandler,
    private val animation: StackAnimation<C, T>,
    private val activeModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
    private val onBack: () -> Unit,
) : StackAnimation<C, T> {

    @Composable
    override fun invoke(stack: ChildStack<C, T>, modifier: Modifier, content: @Composable (child: Child.Created<C, T>) -> Unit) {
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
                        modifier = Modifier.fillMaxSize().then(item.progressData?.toProgressModifier() ?: Modifier),
                        content = content,
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

    private fun ProgressData.toProgressModifier(): Modifier =
        activeModifier(progress, edge)

    private data class Item<out C : Any, out T : Any>(
        val stack: ChildStack<C, T>,
        val key: Int,
        val progressData: ProgressData? = null,
    )

    private data class ProgressData(
        val progress: Float,
        val edge: BackEvent.SwipeEdge,
    )

    private class Holder<T>(var value: T)

    private class GestureBackCallback<C : Any, T : Any>(
        private val scope: CoroutineScope,
        stack: ChildStack<C, T>,
        currentKey: Int,
        private val setItems: (List<Item<C, T>>) -> Unit,
        private val onFinished: (newKey: Int) -> Unit,
    ) : BackCallback() {
        private val nextKey = currentKey + 1

        private val previousItem =
            Item(
                stack = ChildStack(
                    active = stack.backStack.last(),
                    backStack = stack.backStack.dropLast(1),
                ),
                key = nextKey,
            )

        private var currentItem = Item(stack = stack, key = currentKey)

        override fun onBackStarted(backEvent: BackEvent) {
            currentItem = currentItem.copy(progressData = backEvent.toProgressData())
            setItems(listOf(previousItem, currentItem))
        }

        override fun onBackProgressed(backEvent: BackEvent) {
            currentItem = currentItem.copy(progressData = backEvent.toProgressData())
            setItems(listOf(previousItem, currentItem))
        }

        override fun onBackCancelled() {
            setItems(listOf(currentItem.copy(progressData = null)))
        }

        override fun onBack() {
            scope.launch { continueGesture() }
        }

        private suspend fun CoroutineScope.continueGesture() {
            currentItem.progressData?.also { progressData ->
                var progress = progressData.progress
                while ((progress <= 1F) && isActive) {
                    delay(16.milliseconds)
                    progress += 0.075F
                    currentItem = currentItem.copy(progressData = progressData.copy(progress = progress))
                    setItems(listOf(previousItem, currentItem))
                }
            }

            if (isActive) {
                setItems(listOf(previousItem))
                onFinished(nextKey)
            }
        }

        private fun BackEvent.toProgressData(): ProgressData =
            ProgressData(progress = progress, edge = swipeEdge)
    }
}
