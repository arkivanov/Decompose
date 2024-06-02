package com.arkivanov.sample.shared.cards

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.MutableTransitionState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.animateOffsetAsState
import androidx.compose.animation.core.snap
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredWidthIn
import androidx.compose.foundation.layout.statusBars
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.TransformOrigin
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onPlaced
import androidx.compose.ui.layout.positionInParent
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.round
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.cards.card.CardComponent
import com.arkivanov.sample.shared.cards.card.CardContent
import com.arkivanov.sample.shared.utils.TopAppBar
import com.arkivanov.sample.shared.utils.toPx

@Composable
internal fun CardsContent(component: CardsComponent, modifier: Modifier = Modifier) {
    val stack by component.stack.subscribeAsState()

    Column(modifier = modifier) {
        TopAppBar(title = "Cards")

        Box(modifier = Modifier.fillMaxSize().padding(16.dp).consumeWindowInsets(WindowInsets.statusBars)) {
            IconButton(
                onClick = component::onRemoveClicked,
                modifier = Modifier.align(Alignment.TopStart)
            ) {
                Icon(
                    imageVector = Icons.Default.Delete,
                    contentDescription = "Remove",
                )
            }

            IconButton(
                onClick = component::onAddClicked,
                modifier = Modifier.align(Alignment.TopEnd)
            ) {
                Icon(
                    imageVector = Icons.Default.Add,
                    contentDescription = "Add",
                )
            }

            DraggableCards(
                items = stack.items,
                onSwiped = component::onCardSwiped,
                modifier = Modifier.fillMaxSize(),
            )
        }
    }
}

@Composable
private fun DraggableCards(
    items: List<Child.Created<*, CardComponent>>,
    onSwiped: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
) {
    var lastItems: List<Item<CardComponent>> by remember {
        mutableStateOf(
            items.map { (configuration, instance) ->
                Item(
                    configuration = configuration,
                    instance = instance,
                    transitionState = MutableTransitionState(initialState = true),
                )
            }
        )
    }

    DisposableEffect(items) {
        lastItems = lastItems.diff(items)
        onDispose {}
    }

    var layoutSize by remember { mutableStateOf(IntSize.Zero) }

    Box(
        modifier = modifier.onPlaced { layoutSize = it.size },
        contentAlignment = Alignment.BottomCenter,
    ) {
        lastItems.forEachIndexed { index, (configuration, instance, transitionState) ->
            key(configuration) {
                val indexFromEnd = lastItems.lastIndex - index

                DraggableCard(
                    layoutSize = layoutSize,
                    offsetY = indexFromEnd * -16.dp.toPx(),
                    scale = 1F - indexFromEnd.toFloat() / 20F,
                    onSwiped = { onSwiped(index) },
                ) {
                    AnimatedVisibility(
                        visibleState = transitionState,
                        enter = fadeIn() + scaleIn(),
                        exit = fadeOut() + scaleOut(),
                    ) {
                        CardContent(
                            component = instance,
                            modifier = Modifier.fillMaxSize(),
                        )

                        DisposableEffect(Unit) {
                            onDispose {
                                lastItems = lastItems.filterNot { it.configuration == configuration }
                            }
                        }
                    }
                }
            }
        }
    }
}

private fun <T : Any> List<Item<T>>.diff(items: List<Child.Created<*, T>>): List<Item<T>> {
    val configs = items.map(Child.Created<*, *>::configuration)
    val missingItems = filterNot { it.configuration in configs }
    missingItems.forEach { it.transitionState.targetState = false }
    val lastTransitionStates = associateBy(keySelector = Item<*>::configuration, valueTransform = Item<*>::transitionState)

    return items.map { (configuration, instance) ->
        Item(
            configuration = configuration,
            instance = instance,
            transitionState = lastTransitionStates[configuration]
                ?: MutableTransitionState(initialState = false).apply { targetState = true },
        )
    } + missingItems
}

@Composable
internal fun DraggableCard(
    layoutSize: IntSize,
    offsetY: Float,
    scale: Float,
    onSwiped: () -> Unit,
    content: @Composable () -> Unit,
) {
    var cardPosition: Offset by remember { mutableStateOf(Offset.Zero) }
    var cardSize: IntSize by remember { mutableStateOf(IntSize.Zero) }
    val minOffsetX: Float = -cardPosition.x - cardSize.width
    val maxOffsetX: Float = layoutSize.width - cardPosition.x
    val maxOffsetY: Float = -cardPosition.y

    var mode by remember { mutableStateOf(Mode.IDLE) }
    var startTouchPosition: Offset by remember { mutableStateOf(Offset.Zero) }
    var dragTotalOffset: Offset by remember { mutableStateOf(Offset.Zero) }
    var dragLastOffset: Offset by remember { mutableStateOf(Offset.Zero) }
    val dragDistanceThreshold = 3.dp.toPx()

    val animatedOffset by animateOffsetAsState(
        targetValue = when (mode) {
            Mode.DRAG -> dragTotalOffset + Offset(x = 0F, y = offsetY)

            Mode.UP -> {
                val (x1, y1) = dragTotalOffset
                val x2 = x1 + dragLastOffset.x
                val y2 = y1 + dragLastOffset.y
                val upperOffsetX = ((maxOffsetY - y1) * (x2 - x1) / (y2 - y1) + x1).coerceIn(minOffsetX, maxOffsetX)
                Offset(x = upperOffsetX, y = maxOffsetY)
            }

            Mode.IDLE,
            Mode.DOWN -> Offset(x = 0F, y = offsetY)
        },
        animationSpec = if (mode == Mode.DRAG) snap() else tween()
    )

    val animatedScale by animateFloatAsState(targetValue = scale, animationSpec = tween())

    DisposableEffect(animatedOffset, mode, offsetY) {
        if ((mode == Mode.UP) && (animatedOffset.y == maxOffsetY)) {
            onSwiped()
            mode = Mode.DOWN
        } else if ((mode == Mode.DOWN) && (animatedOffset.y == offsetY)) {
            mode = Mode.IDLE
        }

        onDispose {}
    }

    Box(
        modifier = Modifier
            .onPlaced {
                cardPosition = it.positionInParent()
                cardSize = it.size
            }
            .requiredWidthIn(max = 256.dp)
            .offset { animatedOffset.round() }
            .aspectRatio(ratio = 1.5882353F)
            .pointerInput(Unit) {
                detectDragGestures(
                    onDragStart = { position ->
                        startTouchPosition = position
                        dragTotalOffset = Offset.Zero
                        mode = Mode.DRAG
                    },
                    onDragEnd = { mode = if (dragLastOffset.getDistance() > dragDistanceThreshold) Mode.UP else Mode.DOWN },
                    onDrag = { change, dragAmount ->
                        change.consume()
                        dragTotalOffset += dragAmount
                        dragLastOffset = dragAmount
                    },
                )
            }
            .scale(animatedScale)
            .graphicsLayer {
                if (mode == Mode.IDLE) {
                    return@graphicsLayer
                }

                transformOrigin =
                    TransformOrigin(
                        pivotFractionX = startTouchPosition.x / size.width,
                        pivotFractionY = startTouchPosition.y / size.height,
                    )

                val verticalFactor = (animatedOffset.y - offsetY) / (maxOffsetY - offsetY)
                val horizontalFactor = transformOrigin.pivotFractionX * 2F - 1F
                rotationZ = verticalFactor * horizontalFactor * -30F
            }
    ) {
        content()
    }
}

private enum class Mode {
    IDLE, DRAG, UP, DOWN
}

private data class Item<out T : Any>(
    val configuration: Any,
    val instance: T,
    val transitionState: MutableTransitionState<Boolean>,
)

@Preview
@Composable
internal fun CardsContentPreview() {
    CardsContent(PreviewCardsComponent())
}
