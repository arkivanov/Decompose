package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.pointer.AwaitPointerEventScope
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.layout
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackDispatcher.PredictiveBackDispatcher
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackEvent.SwipeEdge

/**
 * Handles back gestures on both edges of the screen and drives the provided [backDispatcher] accordingly,
 * while showing the provided [backIcon].
 *
 * @param backDispatcher [BackDispatcher] where callbacks should be registered.
 * @param backIcon an icon to be shown while the gesture is being performed. A default icon can be shown
 * using [PredictiveBackGestureIcon].
 * @param modifier a [Modifier] to applied to the overlay.
 * @param startEdgeEnabled controls whether the start edge is enabled or not,
 * left in LTR mode and right in RTL mode.
 * @param endEdgeEnabled controls whether the end edge is enabled or not,
 * right in LTR mode and left in RTL mode.
 * @param edgeWidth the width in [Dp] from the screen edge where the gesture first down touch is recognized.
 * @param activationOffsetThreshold a distance threshold in [Dp] from the initial touch point in the direction
 * of gesture. The gesture is initiated once this threshold is surpassed.
 * @param confirmationProgressThreshold a threshold of progress that needs to be reached for the gesture
 * to be confirmed once the touch is completed. The gesture is cancelled if the touch is completed without
 * reaching the threshold.
 * @param onClose if supplied, then the back gesture is also handled when there are no other enabled back
 * callbacks registered in [backDispatcher], can be used to close the application.
 * @param content a content to be shown under the overlay.
 */
@ExperimentalDecomposeApi
@Composable
fun PredictiveBackGestureOverlay(
    backDispatcher: BackDispatcher,
    backIcon: (@Composable (progress: Float, edge: SwipeEdge) -> Unit)?,
    modifier: Modifier = Modifier,
    startEdgeEnabled: Boolean = true,
    endEdgeEnabled: Boolean = true,
    edgeWidth: Dp = 16.dp,
    activationOffsetThreshold: Dp = 16.dp,
    confirmationProgressThreshold: Float = 0.2F,
    onClose: (() -> Unit)? = null,
    content: @Composable () -> Unit,
) {
    val iconState: MutableState<IconState> = remember { mutableStateOf(IconState()) }
    val layoutDirection = LocalLayoutDirection.current

    Box(
        modifier = modifier.handleBackGestures(
            backDispatcher = backDispatcher,
            leftEdgeEnabled = when (layoutDirection) {
                LayoutDirection.Ltr -> startEdgeEnabled
                LayoutDirection.Rtl -> endEdgeEnabled
            },
            rightEdgeEnabled = when (layoutDirection) {
                LayoutDirection.Ltr -> endEdgeEnabled
                LayoutDirection.Rtl -> startEdgeEnabled
            },
            edgeWidth = edgeWidth,
            activationOffsetThreshold = activationOffsetThreshold,
            confirmationProgressThreshold = confirmationProgressThreshold,
            onIconMoved = { position, progress, edge ->
                iconState.value =
                    IconState(
                        position = position,
                        progress = progress,
                        edge = edge,
                        isVisible = true,
                    )
            },
            onIconHidden = { iconState.value = iconState.value.copy(isVisible = false) }
        ),
    ) {
        content()

        if (backIcon != null) {
            val (position, progress, edge, isVisible) = iconState.value

            AnimatedVisibility(
                visible = isVisible,
                modifier = Modifier.backIconOffset(position = position),
                enter = fadeIn(),
                exit = fadeOut(),
                content = { backIcon(progress, edge.toSwipeEdge()) },
            )
        }
    }

    if (onClose != null) {
        DisposableEffect(backDispatcher, onClose) {
            val callback = BackCallback(priority = BackCallback.PRIORITY_MIN, onBack = onClose)
            backDispatcher.register(callback)
            onDispose { backDispatcher.unregister(callback) }
        }
    }
}

private fun Modifier.handleBackGestures(
    backDispatcher: BackDispatcher,
    leftEdgeEnabled: Boolean,
    rightEdgeEnabled: Boolean,
    edgeWidth: Dp,
    activationOffsetThreshold: Dp,
    confirmationProgressThreshold: Float,
    onIconMoved: (position: Offset, progress: Float, BackGestureHandler.Edge) -> Unit,
    onIconHidden: () -> Unit,
): Modifier =
    pointerInput(backDispatcher, leftEdgeEnabled, rightEdgeEnabled) {
        awaitEachGesture {
            onIconHidden()

            val down = awaitFirstDown(pass = PointerEventPass.Initial)
            val startPosition = down.position

            val isLeftInvalid = !leftEdgeEnabled || (startPosition.x > edgeWidth.toPx())
            val isRightInvalid = !rightEdgeEnabled || (startPosition.x < size.width - edgeWidth.toPx())

            if (isLeftInvalid && isRightInvalid) {
                return@awaitEachGesture
            }

            val handler =
                BackGestureHandler(
                    startPosition = startPosition,
                    size = size,
                    offsetIgnoreThreshold = 16.dp.toPx(),
                    activationOffsetThreshold = activationOffsetThreshold.toPx(),
                    progressConfirmationThreshold = confirmationProgressThreshold,
                    backDispatcher = backDispatcher,
                    onIconMoved = onIconMoved,
                )

            with(handler) { handleGesture() }
        }
    }

private fun Modifier.backIconOffset(position: Offset): Modifier =
    layout { measurable, constraints ->
        val placeable = measurable.measure(constraints.copy(minWidth = 0, minHeight = 0))
        layout(constraints.maxWidth, constraints.minHeight) {
            placeable.placeRelative(
                x = (position.x.toInt() - placeable.width / 2),
                y = (position.y.toInt() - 48.dp.roundToPx()).coerceAtLeast(64.dp.roundToPx()),
            )
        }
    }

private fun BackGestureHandler.Edge.toSwipeEdge(): SwipeEdge =
    when (this) {
        BackGestureHandler.Edge.LEFT -> SwipeEdge.LEFT
        BackGestureHandler.Edge.RIGHT -> SwipeEdge.RIGHT
    }

private data class IconState(
    val position: Offset = Offset.Zero,
    val progress: Float = 0F,
    val edge: BackGestureHandler.Edge = BackGestureHandler.Edge.RIGHT,
    val isVisible: Boolean = false,
)

private class BackGestureHandler(
    private val startPosition: Offset,
    private val size: IntSize,
    private val offsetIgnoreThreshold: Float,
    private val activationOffsetThreshold: Float,
    private val progressConfirmationThreshold: Float,
    private val backDispatcher: BackDispatcher,
    private val onIconMoved: (position: Offset, progress: Float, Edge) -> Unit,
) {

    private val edge = if (startPosition.x < size.width / 2F) Edge.LEFT else Edge.RIGHT
    private var changesIterator: Iterator<PointerInputChange>? = null

    private suspend fun AwaitPointerEventScope.awaitChange(): PointerInputChange {
        var iterator = changesIterator

        if ((iterator == null) || !iterator.hasNext()) {
            iterator = awaitPointerEvent(pass = PointerEventPass.Initial).changes.iterator()
            changesIterator = iterator
        }

        return iterator.next()
    }

    suspend fun AwaitPointerEventScope.handleGesture() {
        val dispatcher: PredictiveBackDispatcher = awaitStart() ?: return
        processGesture(dispatcher)
    }

    private suspend fun AwaitPointerEventScope.awaitStartChange(): PointerInputChange? {
        while (true) {
            val change = awaitChange()
            val position = change.position

            if ((position.y < startPosition.y - offsetIgnoreThreshold) || (position.y > startPosition.y + offsetIgnoreThreshold)) {
                return null
            }

            when (edge) {
                Edge.LEFT ->
                    if (position.x > startPosition.x + activationOffsetThreshold) {
                        return change
                    }

                Edge.RIGHT ->
                    if (position.x < startPosition.x - activationOffsetThreshold) {
                        return change
                    }
            }
        }
    }

    private suspend fun AwaitPointerEventScope.awaitStart(): PredictiveBackDispatcher? {
        val change = awaitStartChange() ?: return null
        val position = change.position

        val dispatcher =
            backDispatcher.startPredictiveBack(
                BackEvent(
                    progress = getProgress(position = position),
                    swipeEdge = edge.toSwipeEdge(),
                    touchX = position.x,
                    touchY = position.y,
                )
            ) ?: return null

        change.consume()

        return dispatcher
    }

    private suspend fun AwaitPointerEventScope.processGesture(dispatcher: PredictiveBackDispatcher) {
        while (true) {
            val change = awaitChange()
            val position = change.position
            change.consume()

            val progress = getProgress(position = position)

            dispatcher.progress(
                BackEvent(
                    progress = progress,
                    swipeEdge = edge.toSwipeEdge(),
                    touchX = position.x,
                    touchY = position.y,
                )
            )

            println("Progress: $progress")
            if (!change.pressed) {
                if (progress > progressConfirmationThreshold) {
                    dispatcher.finish()
                } else {
                    dispatcher.cancel()
                }

                return
            }

            onIconMoved(getIconOffset(progress = progress, position = position), progress, edge)
        }
    }

    private fun getProgress(position: Offset): Float =
        when (edge) {
            Edge.LEFT -> {
                val startX = startPosition.x + activationOffsetThreshold
                (position.x - startX) / (size.width - startX)
            }

            Edge.RIGHT -> {
                val startX = startPosition.x - activationOffsetThreshold
                (startX - position.x) / startX
            }
        }.coerceIn(0F, 1F)

    private fun getIconOffset(progress: Float, position: Offset): Offset =
        Offset(
            x = getChevronPositionX(progress = progress, position = position),
            y = getChevronPositionY(position = position),
        )

    private fun getChevronPositionX(progress: Float, position: Offset): Float {
        val factor = 2F + 3F * progress

        return when (edge) {
            Edge.LEFT -> position.x / factor
            Edge.RIGHT -> startPosition.x + (position.x - startPosition.x) / factor
        }
    }

    private fun getChevronPositionY(position: Offset): Float =
        startPosition.y + (position.y - startPosition.y) / 4F

    private fun Edge.toSwipeEdge(): SwipeEdge =
        when (this) {
            Edge.LEFT -> SwipeEdge.LEFT
            Edge.RIGHT -> SwipeEdge.RIGHT
        }

    enum class Edge {
        LEFT,
        RIGHT,
    }
}
