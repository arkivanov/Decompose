package com.arkivanov.sample.shared.customnavigation

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.animateIntOffsetAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent.Children
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent.Mode
import com.arkivanov.sample.shared.utils.Degrees
import com.arkivanov.sample.shared.utils.TopAppBar
import com.arkivanov.sample.shared.utils.Vector
import com.arkivanov.sample.shared.utils.minus
import com.arkivanov.sample.shared.utils.plus
import com.arkivanov.sample.shared.utils.rotate
import com.arkivanov.sample.shared.utils.times
import com.arkivanov.sample.shared.utils.toRadians
import kotlin.math.min

@Composable
internal fun CustomNavigationContent(
    component: CustomNavigationComponent,
    modifier: Modifier = Modifier,
) {
    val children by component.children.subscribeAsState()

    Column(modifier = modifier) {
        TopAppBar(
            title = "Custom Navigation",
            onCloseClick = component::onCloseClicked,
        )

        Box(modifier = Modifier.fillMaxSize().clipToBounds()) {
            ChildItems(
                children = children,
                modifier = Modifier.fillMaxSize(),
            )

            Buttons(
                component = component,
                mode = children.mode,
                modifier = Modifier.align(Alignment.BottomCenter).navigationBarsPadding(),
            )
        }
    }
}

@Composable
private fun Buttons(
    component: CustomNavigationComponent,
    mode: Mode,
    modifier: Modifier,
) {
    Row(
        modifier = modifier,
        horizontalArrangement = Arrangement.spacedBy(8.dp, Alignment.CenterHorizontally),
    ) {
        when (mode) {
            Mode.CAROUSEL ->
                Button(onClick = component::onSwitchToPagerClicked) {
                    Text(text = "Pager")
                }

            Mode.PAGER ->
                Button(onClick = component::onSwitchToCarouselClicked) {
                    Text(text = "Carousel")
                }
        }

        Button(onClick = component::onBackwardClicked) {
            Text(text = "Back")
        }

        Button(onClick = component::onForwardClicked) {
            Text(text = "Fwd")
        }

        if (mode == Mode.CAROUSEL) {
            Button(onClick = component::onShuffleClicked) {
                Text(text = "Shuffle")
            }
        }
    }
}

@Composable
private fun ChildItems(
    children: Children<*, KittenComponent>,
    modifier: Modifier,
) {
    BoxWithConstraints(modifier = modifier) {
        children.items.forEachIndexed { index, child ->
            key(child.configuration) {
                val childModifier =
                    getChildModifier(
                        activeIndex = children.index,
                        childIndex = index,
                        childCount = children.items.size,
                        mode = children.mode,
                        constraints = constraints,
                    )

                when (children.mode) {
                    Mode.CAROUSEL ->
                        KittenContent(
                            component = child.instance,
                            textStyle = MaterialTheme.typography.caption,
                            modifier = childModifier.clip(RoundedCornerShape(size = 16.dp)),
                        )

                    Mode.PAGER ->
                        KittenContent(
                            component = child.instance,
                            textStyle = MaterialTheme.typography.h6,
                            modifier = childModifier,
                        )
                }
            }
        }
    }
}

@Composable
private fun getChildModifier(
    activeIndex: Int,
    childIndex: Int,
    childCount: Int,
    mode: Mode,
    constraints: Constraints,
): Modifier {
    val constraintSize = min(constraints.maxWidth, constraints.maxHeight)
    val centerIndex = childCount / 2
    val tileSize = constraintSize / (if (childIndex == activeIndex) 5F else 6F)

    val virtualIndex =
        when {
            activeIndex < centerIndex -> (childIndex + centerIndex - activeIndex) % childCount
            activeIndex > centerIndex -> (childIndex - (activeIndex - centerIndex) + childCount) % childCount
            else -> childIndex
        }

    val targetOffset =
        when (mode) {
            Mode.CAROUSEL -> {
                val angleDegrees = Degrees(value = (childIndex - activeIndex).toFloat() * 360F / childCount.toFloat())

                val point =
                    Vector(x = 0F, y = -1F)
                        .rotate(radians = angleDegrees.toRadians()) *
                        (constraintSize / 3F) +
                        Vector(x = constraints.maxWidth / 2F, y = constraints.maxHeight / 2F) -
                        Vector(x = tileSize / 2F, y = tileSize / 2F)

                IntOffset(x = point.x.toInt(), y = point.y.toInt())
            }

            Mode.PAGER ->
                when {
                    virtualIndex < centerIndex -> IntOffset(x = -constraints.maxWidth, y = 0)
                    virtualIndex > centerIndex -> IntOffset(x = constraints.maxWidth, y = 0)
                    else -> IntOffset(x = 0, y = 0)
                }
        }

    val offset by animateIntOffsetAsState(targetValue = targetOffset)

    val targetSize =
        when (mode) {
            Mode.CAROUSEL -> DpSize(width = tileSize.toDp(), height = tileSize.toDp())
            Mode.PAGER -> DpSize(width = constraints.maxWidth.toDp(), height = constraints.maxHeight.toDp())
        }

    val widthDp by animateDpAsState(targetValue = targetSize.width)
    val heightDp by animateDpAsState(targetValue = targetSize.height)

    val targetAlpha =
        when (mode) {
            Mode.CAROUSEL -> 1F

            Mode.PAGER ->
                if ((virtualIndex >= centerIndex - 1) && (virtualIndex <= centerIndex + 1)) {
                    1F
                } else {
                    0F
                }
        }

    val alpha by animateFloatAsState(targetValue = targetAlpha)

    return Modifier.size(width = widthDp, height = heightDp).offset { offset }.alpha(alpha)
}

@Composable
private fun Int.toDp(): Dp =
    with(LocalDensity.current) { toDp() }

@Composable
private fun Float.toDp(): Dp =
    with(LocalDensity.current) { toDp() }

@Composable
private fun Dp.toPx(): Float =
    with(LocalDensity.current) { toPx() }
