package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.animation.AnimatedVisibilityScope
import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.MutableTransitionState
import androidx.compose.animation.core.SeekableTransitionState
import androidx.compose.animation.core.TransitionState
import androidx.compose.animation.core.rememberTransition
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.pointer.pointerInput
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.WithAnimatedVisibilityScope
import com.arkivanov.decompose.extensions.compose.experimental.stack.awaitAll
import com.arkivanov.decompose.extensions.compose.experimental.stack.dropLast
import com.arkivanov.decompose.extensions.compose.experimental.stack.size
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
import com.arkivanov.decompose.extensions.compose.stack.animation.isExit
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.PredictiveBackAnimatable
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

@ExperimentalDecomposeApi
internal class DefaultStackAnimation<C : Any, T : Any>(
    private val disableInputDuringAnimation: Boolean,
    private val predictiveBackParams: PredictiveBackParams<C, T>?,
    private val selector: (child: Child.Created<C, T>, otherChild: Child.Created<C, T>, direction: Direction) -> StackAnimator?,
) : StackAnimation<C, T> {

    @Composable
    override operator fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable AnimatedVisibilityScope.(child: Child.Created<C, T>) -> Unit,
    ) {
        var currentStack by remember { mutableStateOf(stack) }
        var items by remember { mutableStateOf(getAnimationItems(newStack = currentStack)) }
        val stackKeys = remember(stack) { stack.items.map { it.key } }
        val currentStackKeys = remember(currentStack) { currentStack.items.map { it.key } }

        if (stackKeys != currentStackKeys) {
            val oldStack = currentStack
            currentStack = stack

            val updateItems =
                if (stack.active.key == oldStack.active.key) {
                    items.keys.singleOrNull() != stack.active.key
                } else {
                    items.keys.toList() != stackKeys
                }

            if (updateItems) {
                items = getAnimationItems(newStack = currentStack, oldStack = oldStack)
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
                                items += (key to item.copy(animator = null))
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

        if ((predictiveBackParams != null) && currentStack.backStack.isNotEmpty()) {
            key(currentStackKeys) {
                PredictiveBackController(
                    stack = currentStack,
                    predictiveBackParams = predictiveBackParams,
                    setItems = { items = it },
                )
            }
        }
    }

    @Composable
    private fun Child(
        item: AnimationItem<C, T>,
        onFinished: () -> Unit,
        content: @Composable AnimatedVisibilityScope.(child: Child.Created<C, T>) -> Unit
    ) {
        val transition = rememberTransition(item.transitionState)

        if (item.transitionState.isIdle()) {
            LaunchedEffect(Unit) {
                onFinished()
            }
        }

        WithAnimatedVisibilityScope(transition) {
            Box(modifier = item.animator?.run { animate(item.direction) } ?: Modifier) {
                content(item.child)
            }
        }
    }

    private fun getAnimationItems(newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>? = null): Map<Any, AnimationItem<C, T>> =
        when {
            oldStack == null ->
                keyedItemsOf(
                    AnimationItem(
                        child = newStack.active,
                        direction = Direction.ENTER_FRONT,
                        transitionState = MutableTransitionState(EnterExitState.Visible),
                    )
                )

            (newStack.size < oldStack.size) && oldStack.backStack.any { it.key == newStack.active.key } ->
                keyedItemsOf(
                    AnimationItem(
                        child = newStack.active,
                        direction = Direction.ENTER_BACK,
                        transitionState = EnterExitState.PreEnter transitionTo EnterExitState.Visible,
                        otherChild = oldStack.active,
                    ),
                    AnimationItem(
                        child = oldStack.active,
                        direction = Direction.EXIT_FRONT,
                        transitionState = EnterExitState.Visible transitionTo EnterExitState.PostExit,
                        otherChild = newStack.active,
                    ),
                )

            else ->
                keyedItemsOf(
                    AnimationItem(
                        child = oldStack.active,
                        direction = Direction.EXIT_BACK,
                        transitionState = EnterExitState.Visible transitionTo EnterExitState.PostExit,
                        otherChild = newStack.active,
                    ),
                    AnimationItem(
                        child = newStack.active,
                        direction = Direction.ENTER_FRONT,
                        transitionState = EnterExitState.PreEnter transitionTo EnterExitState.Visible,
                        otherChild = oldStack.active,
                    ),
                )
        }

    @ExperimentalDecomposeApi
    @Composable
    private fun PredictiveBackController(
        stack: ChildStack<C, T>,
        predictiveBackParams: PredictiveBackParams<C, T>,
        setItems: (Map<Any, AnimationItem<C, T>>) -> Unit,
    ) {
        val scope = rememberCoroutineScope()

        val callback =
            remember {
                PredictiveBackCallback(
                    stack = stack,
                    scope = scope,
                    predictiveBackParams = predictiveBackParams,
                    setItems = setItems,
                )
            }

        DisposableEffect(predictiveBackParams.backHandler, callback) {
            predictiveBackParams.backHandler.register(callback)

            onDispose {
                scope.cancel() // Ensure the scope is cancelled before unregistering the callback
                predictiveBackParams.backHandler.unregister(callback)
            }
        }
    }

    private fun AnimationItem(
        child: Child.Created<C, T>,
        direction: Direction,
        transitionState: TransitionState<EnterExitState>,
        otherChild: Child.Created<C, T>,
        predictiveBackAnimator: StackAnimator? = null,
    ): AnimationItem<C, T> =
        AnimationItem(
            child = child,
            direction = direction,
            transitionState = transitionState,
            animator = predictiveBackAnimator ?: selector(child, otherChild, direction),
        )

    private inner class PredictiveBackCallback(
        private val stack: ChildStack<C, T>,
        private val scope: CoroutineScope,
        private val predictiveBackParams: PredictiveBackParams<C, T>,
        private val setItems: (Map<Any, AnimationItem<C, T>>) -> Unit,
    ) : BackCallback() {
        private val exitChild = stack.active
        private val enterChild = stack.backStack.last()
        private var animationHandler: AnimationHandler? = null

        override fun onBackStarted(backEvent: BackEvent) {
            val animationHandler = AnimationHandler(animatable = predictiveBackParams.animatableSelector(backEvent, exitChild, enterChild))
            this.animationHandler = animationHandler

            setItems(
                keyedItemsOf(
                    AnimationItem(
                        child = enterChild,
                        direction = Direction.ENTER_BACK,
                        transitionState = animationHandler.enterTransitionState,
                        otherChild = exitChild,
                        predictiveBackAnimator = animationHandler.animatable?.let { anim -> SimpleStackAnimator { anim.enterModifier } },
                    ),
                    AnimationItem(
                        child = exitChild,
                        direction = Direction.EXIT_FRONT,
                        transitionState = animationHandler.exitTransitionState,
                        otherChild = enterChild,
                        predictiveBackAnimator = animationHandler.animatable?.let { anim -> SimpleStackAnimator { anim.exitModifier } },
                    ),
                )
            )

            scope.launch {
                animationHandler.start(backEvent)
            }
        }

        override fun onBackProgressed(backEvent: BackEvent) {
            scope.launch {
                animationHandler?.progress(backEvent)
            }
        }

        override fun onBackCancelled() {
            scope.launch {
                animationHandler?.cancel()
                animationHandler = null
                setItems(getAnimationItems(newStack = stack))
            }
        }

        override fun onBack() {
            scope.launch {
                animationHandler?.finish()
                animationHandler = null
                setItems(getAnimationItems(newStack = stack.dropLast()))
                predictiveBackParams.onBack()
            }
        }
    }

    private class AnimationHandler(
        val animatable: PredictiveBackAnimatable?,
    ) {
        val exitTransitionState: SeekableTransitionState<EnterExitState> = SeekableTransitionState(EnterExitState.Visible)
        val enterTransitionState: SeekableTransitionState<EnterExitState> = SeekableTransitionState(EnterExitState.PreEnter)

        suspend fun start(backEvent: BackEvent) {
            awaitAll(
                { exitTransitionState.seekTo(fraction = backEvent.progress, targetState = EnterExitState.PostExit) },
                { enterTransitionState.seekTo(fraction = backEvent.progress, targetState = EnterExitState.Visible) },
                { animatable?.animate(backEvent) },
            )
        }

        suspend fun progress(backEvent: BackEvent) {
            animatable?.run {
                animate(backEvent)
                return@progress // Don't animate transition states on back progress if there is PredictiveBackAnimatable
            }

            awaitAll(
                { exitTransitionState.seekTo(fraction = backEvent.progress, targetState = EnterExitState.PostExit) },
                { enterTransitionState.seekTo(fraction = backEvent.progress, targetState = EnterExitState.Visible) },
            )
        }

        suspend fun cancel() {
            awaitAll(
                { exitTransitionState.snapTo(EnterExitState.Visible) },
                { enterTransitionState.snapTo(EnterExitState.PreEnter) },
                { animatable?.cancel() },
            )
        }

        suspend fun finish() {
            awaitAll(
                { exitTransitionState.animateTo(EnterExitState.PostExit) },
                { enterTransitionState.animateTo(EnterExitState.Visible) },
                { animatable?.finish() },
            )
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
        },
    )
}

@ExperimentalDecomposeApi
private data class AnimationItem<out C : Any, out T : Any>(
    val child: Child.Created<C, T>,
    val direction: Direction,
    val transitionState: TransitionState<EnterExitState>,
    val animator: StackAnimator? = null,
)

@ExperimentalDecomposeApi
private fun <C : Any, T : Any> keyedItemsOf(vararg items: AnimationItem<C, T>): Map<Any, AnimationItem<C, T>> =
    items.associateBy { it.child.key }

/*
 * Can't be anonymous. See:
 * https://github.com/JetBrains/compose-jb/issues/2688
 * https://github.com/JetBrains/compose-jb/issues/2612
 */
@ExperimentalDecomposeApi
private class SimpleStackAnimator(
    private val modifier: () -> Modifier,
) : StackAnimator {
    @Composable
    override fun AnimatedVisibilityScope.animate(direction: Direction): Modifier =
        modifier()
}

private infix fun <S> S.transitionTo(targetState: S): MutableTransitionState<S> =
    MutableTransitionState(this).apply {
        this.targetState = targetState
    }


private fun TransitionState<*>.isIdle(): Boolean =
    when (this) {
        is MutableTransitionState -> isIdle
        is SeekableTransitionState -> false
        else -> false
    }
