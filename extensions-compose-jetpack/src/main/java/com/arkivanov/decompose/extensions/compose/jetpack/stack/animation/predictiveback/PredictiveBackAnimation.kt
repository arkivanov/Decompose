package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.predictiveback

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.movableContentOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.emptyStackAnimation
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackHandler
import kotlinx.coroutines.launch

/**
 * Wraps the provided [animation], handles the predictive back gesture and animates
 * the transition from the current [Child] to the previous one.
 * Calls [onBack] when the animation is finished.
 *
 * @param backHandler a source of the predictive back gesture events, see [BackHandler].
 * @param animation a [StackAnimation] for regular transitions.
 * @param selector a selector function that is called when the predictive back gesture begins,
 * returns [PredictiveBackAnimatable] responsible for animations.
 * @param onBack a callback that is called when the gesture is finished.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> predictiveBackAnimation(
    backHandler: BackHandler,
    animation: StackAnimation<C, T>? = null,
    selector: (
        initialBackEvent: BackEvent,
        exitChild: Child.Created<C, T>,
        enterChild: Child.Created<C, T>,
    ) -> PredictiveBackAnimatable = { initialBackEvent, _, _ ->
        materialPredictiveBackAnimatable(initialBackEvent = initialBackEvent)
    },
    onBack: () -> Unit,
): StackAnimation<C, T> =
    PredictiveBackAnimation(
        backHandler = backHandler,
        animation = animation ?: emptyStackAnimation(),
        selector = selector,
        onBack = onBack,
    )

@OptIn(ExperimentalDecomposeApi::class)
private class PredictiveBackAnimation<C : Any, T : Any>(
    private val backHandler: BackHandler,
    private val animation: StackAnimation<C, T>,
    private val selector: (BackEvent, exitChild: Child.Created<C, T>, enterChild: Child.Created<C, T>) -> PredictiveBackAnimatable,
    private val onBack: () -> Unit,
) : StackAnimation<C, T> {

    @Composable
    override fun invoke(stack: ChildStack<C, T>, modifier: Modifier, content: @Composable (child: Child.Created<C, T>) -> Unit) {
        var activeConfigurations: Set<C> by remember { mutableStateOf(emptySet()) }

        val childContent =
            remember(content) {
                movableContentOf<Child.Created<C, T>> { child ->
                    key(child.configuration) {
                        content(child)

                        DisposableEffect(Unit) {
                            activeConfigurations += child.configuration
                            onDispose { activeConfigurations -= child.configuration }
                        }
                    }
                }
            }

        var data: Data<C, T> by rememberMutableStateWithLatest(key = stack) { latestData ->
            Data(stack = stack, key = latestData?.nextKey ?: 0)
        }

        val (dataStack, dataKey, dataAnimatable) = data

        val items =
            if (dataAnimatable == null) {
                listOf(Item(stack = dataStack, key = dataKey, modifier = Modifier))
            } else {
                listOf(
                    Item(stack = dataStack.dropLast(), key = dataKey + 1, modifier = dataAnimatable.enterModifier),
                    Item(stack = dataStack, key = dataKey, modifier = dataAnimatable.exitModifier),
                )
            }

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

        val isBackEnabled = dataStack.backStack.isNotEmpty()
        val isBackGestureEnabled = isBackEnabled && ((dataAnimatable != null) || (activeConfigurations.size == 1))

        if (isBackEnabled) {
            if (isBackGestureEnabled) {
                val scope = rememberCoroutineScope()

                BackGestureHandler(
                    backHandler = backHandler,
                    onBackStarted = {
                        data = data.copy(animatable = selector(it, data.stack.active, data.stack.backStack.last()))
                    },
                    onBackProgressed = {
                        scope.launch { data.animatable?.animate(it) }
                    },
                    onBackCancelled = {
                        data = data.copy(animatable = null)
                    },
                    onBack = {
                        if (data.animatable == null) {
                            onBack()
                        } else {
                            scope.launch {
                                data.animatable?.finish()
                                onBack()
                            }
                        }
                    }
                )
            } else {
                BackGestureHandler(backHandler = backHandler, onBack = onBack)
            }
        }
    }

    @Composable
    private fun <T : Any> rememberMutableStateWithLatest(
        key: Any,
        getValue: (latestValue: T?) -> T,
    ): MutableState<T> {
        val latestValue: Holder<T?> = remember { Holder(value = null) }
        val state = remember(key) { mutableStateOf(getValue(latestValue.value)) }
        latestValue.value = state.value

        return state
    }

    private fun <C : Any, T : Any> ChildStack<C, T>.dropLast(): ChildStack<C, T> =
        ChildStack(active = backStack.last(), backStack = backStack.dropLast(1))

    private data class Data<out C : Any, out T : Any>(
        val stack: ChildStack<C, T>,
        val key: Int,
        val animatable: PredictiveBackAnimatable? = null,
    ) {
        val nextKey: Int get() = if (animatable == null) key else key + 1
    }

    private data class Item<out C : Any, out T : Any>(
        val stack: ChildStack<C, T>,
        val key: Int,
        val modifier: Modifier,
    )

    private class Holder<T>(var value: T)
}
