package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

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
import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import androidx.navigationevent.NavigationEventInput
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.WithStackAnimationScope
import com.arkivanov.decompose.extensions.compose.experimental.stack.awaitAll
import com.arkivanov.decompose.extensions.compose.experimental.stack.dropLast
import com.arkivanov.decompose.extensions.compose.experimental.stack.size
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
import com.arkivanov.decompose.extensions.compose.stack.animation.isExit
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.PredictiveBackAnimatable
import com.arkivanov.decompose.router.stack.ChildStack
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

@ExperimentalDecomposeApi
internal class DefaultStackAnimation<C : Any, T : Any>(
    private val disableInputDuringAnimation: Boolean,
    private val predictiveBackParams: (ChildStack<C, T>) -> PredictiveBackParams?,
    private val selector: (
        child: Child.Created<C, T>,
        otherChild: Child.Created<C, T>,
        direction: Direction,
        isPredictiveBack: Boolean,
    ) -> StackAnimator?,
) : StackAnimation<C, T> {

    @Composable
    override operator fun invoke(
        stack: ChildStack<C, T>,
        modifier: Modifier,
        content: @Composable StackAnimationScope.(child: Child.Created<C, T>) -> Unit,
    ) {
        var currentStack by remember { mutableStateOf(stack) }
        var items by remember { mutableStateOf(getAnimationItems(newStack = currentStack)) }
        var nextItems: Map<String, AnimationItem<C, T>>? by remember { mutableStateOf(null) }
        val stackKeys = remember(stack) { stack.items.map { it.key } }
        val currentStackKeys = remember(currentStack) { currentStack.items.map { it.key } }

        if (stack != currentStack) {
            val oldStack = currentStack
            currentStack = stack

            val updateItems =
                when {
                    stack.active.key == oldStack.active.key ->
                        (items.keys.singleOrNull() != stack.active.key) ||
                            (items.values.singleOrNull()?.child?.instance != stack.active.instance)

                    items.size == 1 -> items.keys.single() != stack.active.key
                    else -> items.keys.toList() != stackKeys
                }

            if (updateItems) {
                val newItems = getAnimationItems(newStack = currentStack, oldStack = oldStack)
                if ((items.size == 1) || items.values.last().transitionState.isSeekable()) {
                    items = newItems
                } else {
                    nextItems = newItems
                }
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
                Overlay(modifier = Modifier.matchParentSize())
            }
        }

        if (currentStack.backStack.isNotEmpty()) {
            val predictiveBackParams = remember(currentStackKeys) { predictiveBackParams(currentStack) }
            if (predictiveBackParams != null) {
                key(currentStackKeys) {
                    PredictiveBackController(
                        stack = currentStack,
                        predictiveBackParams = predictiveBackParams,
                        setItems = { items = it },
                    )
                }
            }
        }
    }

    @Composable
    private fun Child(
        item: AnimationItem<C, T>,
        onFinished: () -> Unit,
        content: @Composable StackAnimationScope.(child: Child.Created<C, T>) -> Unit
    ) {
        val transition = rememberTransition(item.transitionState)
        val isTransitionIdle = item.transitionState.isIdle()

        if (isTransitionIdle) {
            LaunchedEffect(Unit) {
                onFinished()
            }
        }

        WithStackAnimationScope(item.direction.takeUnless { isTransitionIdle }, transition) {
            Box(modifier = item.animator?.run { animate(item.direction) } ?: Modifier) {
                content(item.child)
            }
        }
    }

    private fun getAnimationItems(newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>? = null): Map<String, AnimationItem<C, T>> =
        when {
            (oldStack == null) || (newStack.active.key == oldStack.active.key) ->
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
        predictiveBackParams: PredictiveBackParams,
        setItems: (Map<String, AnimationItem<C, T>>) -> Unit,
    ) {
        val scope = rememberCoroutineScope()

        val handler =
            remember {
                PredictiveBackCallback(
                    stack = stack,
                    scope = scope,
                    predictiveBackParams = predictiveBackParams,
                    setItems = setItems,
                )
            }

        DisposableEffect(predictiveBackParams.navigationEventDispatcher, handler) {
            predictiveBackParams.navigationEventDispatcher.addHandler(handler)
            predictiveBackParams.navigationEventDispatcher.addInput(handler.input)

            onDispose {
                scope.cancel() // Ensure the scope is cancelled before unregistering the callback
                handler.remove()
                predictiveBackParams.navigationEventDispatcher.removeInput(handler.input)
            }
        }
    }

    private fun AnimationItem(
        child: Child.Created<C, T>,
        direction: Direction,
        transitionState: TransitionState<EnterExitState>,
        otherChild: Child.Created<C, T>,
        isPredictiveBack: Boolean = false,
        predictiveBackAnimator: StackAnimator? = null,
    ): AnimationItem<C, T> =
        AnimationItem(
            child = child,
            direction = direction,
            transitionState = transitionState,
            animator = predictiveBackAnimator ?: selector(child, otherChild, direction, isPredictiveBack),
        )

    private inner class PredictiveBackCallback(
        private val stack: ChildStack<C, T>,
        private val scope: CoroutineScope,
        private val predictiveBackParams: PredictiveBackParams,
        private val setItems: (Map<String, AnimationItem<C, T>>) -> Unit,
    ) : NavigationEventHandler<NavigationEventInfo>(initialInfo = NavigationEventInfo.None, isBackEnabled = true) {
        val input: DirectNavigationEventInput = DirectNavigationEventInput()

        private var state: DefaultStackAnimation.State = DefaultStackAnimation.State.Idle

        override fun onBackStarted(event: NavigationEvent) {
            if (state is State.Idle) {
                state = State.Started(event)
            }
        }

        override fun onBackProgressed(event: NavigationEvent) {
            startIfNeeded()
            val currentState = state as? State.Progress ?: return

            scope.launch {
                currentState.animationHandler.progress(event)
            }
        }

        private fun startIfNeeded() {
            val currentState = state as? State.Started ?: return
            val backEvent = currentState.initialBackEvent
            val animationHandler = AnimationHandler(animatable = predictiveBackParams.animatable(backEvent))
            state = State.Progress(animationHandler)
            val exitChild = stack.active
            val enterChild = stack.backStack.last()

            setItems(
                keyedItemsOf(
                    AnimationItem(
                        child = enterChild,
                        direction = Direction.ENTER_BACK,
                        transitionState = animationHandler.enterTransitionState,
                        otherChild = exitChild,
                        isPredictiveBack = true,
                        predictiveBackAnimator = animationHandler.animatable?.let { anim -> SimpleStackAnimator { anim.enterModifier } },
                    ),
                    AnimationItem(
                        child = exitChild,
                        direction = Direction.EXIT_FRONT,
                        transitionState = animationHandler.exitTransitionState,
                        otherChild = enterChild,
                        isPredictiveBack = true,
                        predictiveBackAnimator = animationHandler.animatable?.let { anim -> SimpleStackAnimator { anim.exitModifier } },
                    ),
                )
            )

            scope.launch {
                animationHandler.progress(backEvent)
            }
        }

        override fun onBackCancelled() {
            val currentState = state
            if (currentState is State.Progress) {
                state = State.Finishing

                scope.launch {
                    currentState.animationHandler.cancel()
                    state = State.Idle
                    setItems(getAnimationItems(newStack = stack))
                }
            } else if (currentState !is State.Finishing) {
                state = State.Idle
            }
        }

        override fun onBackCompleted() {
            val currentState = state
            if (currentState is State.Progress) {
                state = State.Finishing

                scope.launch {
                    currentState.animationHandler.finish()
                    state = State.Idle
                    setItems(getAnimationItems(newStack = stack.dropLast()))

                    // FIXME: fix
                    isBackEnabled = false
                    input.backCompleted()
                    isBackEnabled = true
                }
            } else if (currentState !is State.Finishing) {
                state = State.Idle
                // FIXME: fix
                isBackEnabled = false
                input.backCompleted()
                isBackEnabled = true
            }
        }
    }

    private sealed interface State {
        data object Idle : State
        data class Started(val initialBackEvent: BackEvent) : State
        data class Progress(val animationHandler: AnimationHandler) : State
        data object Finishing : State
    }

    private class AnimationHandler(
        val animatable: PredictiveBackAnimatable?,
    ) {
        val exitTransitionState: SeekableTransitionState<EnterExitState> = SeekableTransitionState(EnterExitState.Visible)
        val enterTransitionState: SeekableTransitionState<EnterExitState> = SeekableTransitionState(EnterExitState.PreEnter)

        suspend fun progress(backEvent: NavigationEvent) {
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
private fun <C : Any, T : Any> keyedItemsOf(vararg items: AnimationItem<C, T>): Map<String, AnimationItem<C, T>> =
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
    override fun StackAnimationScope.animate(direction: Direction): Modifier =
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

private fun TransitionState<*>.isSeekable(): Boolean =
    this is SeekableTransitionState
