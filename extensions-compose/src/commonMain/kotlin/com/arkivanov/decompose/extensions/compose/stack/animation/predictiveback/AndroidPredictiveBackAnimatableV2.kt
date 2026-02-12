package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.animation.core.Animatable
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.CompositingStrategy
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.onPlaced
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.toSize
import androidx.compose.ui.util.lerp
import androidx.navigationevent.NavigationEvent
import com.arkivanov.decompose.ExperimentalDecomposeApi
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch

@ExperimentalDecomposeApi
internal class AndroidPredictiveBackAnimatableV2(
    private val initialEvent: NavigationEvent,
    private val exitShape: ((progress: Float, edge: Int) -> Shape)?,
    private val enterShape: ((progress: Float, edge: Int) -> Shape)?,
) : PredictiveBackAnimatable {

    private val finishProgressAnimatable = Animatable(initialValue = 0F)
    private val finishProgress by derivedStateOf { finishProgressAnimatable.value }
    private val progressAnimatable = Animatable(initialValue = initialEvent.progress)
    private val progress by derivedStateOf { progressAnimatable.value }
    private var edge by mutableStateOf(initialEvent.swipeEdge)
    private var touchY by mutableFloatStateOf(initialEvent.touchY)

    override val exitModifier: Modifier
        get() =
            Modifier.composed {
                if (exitShape == null) {
                    withLayoutCorners { corners ->
                        exitModifier(corners.toShape(progress))
                    }
                } else {
                    exitModifier(exitShape.invoke(progress, edge))
                }
            }

    override val enterModifier: Modifier
        get() =
            Modifier
                .drawWithContent {
                    drawContent()
                    drawRect(color = Color.Black.copy(alpha = (1F - finishProgress) * 0.25F))
                }
                .composed {
                    val shapeProgress = lerp(start = progress, stop = 0F, fraction = finishProgress)
                    if (enterShape == null) {
                        withLayoutCorners { corners ->
                            enterModifier(corners.toShape(shapeProgress))
                        }
                    } else {
                        enterModifier(enterShape.invoke(shapeProgress, edge))
                    }
                }

    @Composable
    private fun Modifier.enterModifier(shape: Shape): Modifier {
        var size by remember { mutableStateOf(Size.Zero) }
        val scaleFactor = scaleFactor()
        val density = LocalDensity.current

        return this
            .onPlaced { size = it.size.toSize() }
            .graphicsLayer(
                scaleX = scaleFactor,
                scaleY = scaleFactor,
                translationX = lerp(start = -size.width * 0.2F, stop = 0F, fraction = finishProgress),
                translationY = density.exitOffsetY(height = size.height),
                shape = shape,
                clip = true,
                compositingStrategy = CompositingStrategy.Offscreen,
            ) // Not using `graphicsLayer {}` with lambda due to https://github.com/arkivanov/Decompose/issues/877
    }

    @Composable
    private fun Modifier.exitModifier(shape: Shape): Modifier {
        var size by remember { mutableStateOf(Size.Zero) }
        val scaleFactor = scaleFactor()
        val density = LocalDensity.current

        return this
            .onPlaced { size = it.size.toSize() }
            .graphicsLayer(
                scaleX = scaleFactor,
                scaleY = scaleFactor,
                alpha = 1F - finishProgress,
                translationX = density.exitOffsetX(width = size.width),
                translationY = density.exitOffsetY(height = size.height),
                shape = shape,
                clip = true,
                compositingStrategy = CompositingStrategy.Offscreen,
            ) // Not using `graphicsLayer {}` with lambda due to https://github.com/arkivanov/Decompose/issues/877
    }

    private fun Density.exitOffsetX(width: Float): Float {
        if (width == 0F) {
            return 0F
        }

        val initialOffsetX =
            when (edge) {
                NavigationEvent.EDGE_LEFT -> (width - width * initialScaleFactor()) / 2F - 8.dp.toPx() * progress
                else -> 0F
            }

        return lerp(start = initialOffsetX, stop = width * 0.2F, fraction = finishProgress)
    }

    private fun initialScaleFactor(): Float =
        lerp(start = 1F, stop = 0.9F, fraction = progress)

    private fun scaleFactor(): Float =
        lerp(start = initialScaleFactor(), stop = 1F, fraction = finishProgress)

    private fun Density.exitOffsetY(height: Float): Float {
        if (height == 0F) {
            return 0F
        }

        val translationYLimit = height / 20F - 8.dp.toPx()
        val translationYFactor = ((touchY - initialEvent.touchY) / height) * (progress * 3F).coerceAtMost(1F)

        return lerp(start = translationYLimit * translationYFactor, stop = 0F, fraction = finishProgress)
    }

    override suspend fun animate(event: NavigationEvent) {
        edge = event.swipeEdge
        touchY = event.touchY
        progressAnimatable.animateTo(event.progress)
    }

    override suspend fun finish() {
        val velocityFactor = progressAnimatable.velocity.coerceAtMost(1F) / 1F
        val progress = progressAnimatable.value
        coroutineScope {
            joinAll(
                launch { progressAnimatable.animateTo(progress + (1F - progress) * velocityFactor) },
                launch { finishProgressAnimatable.animateTo(targetValue = 1F) },
            )
        }
    }

    override suspend fun cancel() {
        progressAnimatable.animateTo(0F)
    }
}
