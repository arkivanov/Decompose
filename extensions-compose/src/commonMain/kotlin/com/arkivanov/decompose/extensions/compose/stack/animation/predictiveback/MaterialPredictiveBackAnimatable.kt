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
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackEvent
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the
 * [predictive back design for Android](https://developer.android.com/design/ui/mobile/guides/patterns/predictive-back).
 *
 * @param initialBackEvent an initial [BackEvent] of the predictive back gesture.
 * @param shape an optional clipping shape of the child being removed (the currently active child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 */
@ExperimentalDecomposeApi
fun materialPredictiveBackAnimatable(
    initialBackEvent: BackEvent,
    shape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
): PredictiveBackAnimatable =
    MaterialPredictiveBackAnimatable(
        initialEvent = initialBackEvent,
        exitShape = shape,
    )

@ExperimentalDecomposeApi
private class MaterialPredictiveBackAnimatable(
    private val initialEvent: BackEvent,
    private val exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
) : PredictiveBackAnimatable {

    private val finishProgressAnimatable = Animatable(initialValue = 1F)
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
            Modifier.drawWithContent {
                drawContent()
                drawRect(color = Color.Black.copy(alpha = finishProgress * 0.25F))
            }

    @Composable
    private fun Modifier.exitModifier(shape: Shape): Modifier {
        var size by remember { mutableStateOf(Size.Zero) }
        val scaleFactor = 1F - progress / 10F
        val density = LocalDensity.current

        return this
            .onPlaced { size = it.size.toSize() }
            .graphicsLayer(
                scaleX = scaleFactor,
                scaleY = scaleFactor,
                alpha = finishProgress,
                translationX = density.exitOffsetX(width = size.width, scaleFactor = scaleFactor),
                translationY = density.exitOffsetY(height = size.height),
                shape = shape,
                clip = true,
                compositingStrategy = CompositingStrategy.Offscreen,
            ) // Not using `graphicsLayer {}` with lambda due to https://github.com/arkivanov/Decompose/issues/877
    }

    private fun Density.exitOffsetX(width: Float, scaleFactor: Float): Float {
        if (width == 0F) {
            return 0F
        }

        val scaledWidth = width * scaleFactor

        return when (edge) {
            BackEvent.SwipeEdge.LEFT -> (width - scaledWidth) / 2F - 8.dp.toPx() * progress
            BackEvent.SwipeEdge.RIGHT -> (scaledWidth - width) / 2F + 8.dp.toPx() * progress
            BackEvent.SwipeEdge.UNKNOWN -> 0F
        }
    }

    private fun Density.exitOffsetY(height: Float): Float {
        if (height == 0F) {
            return 0F
        }

        val translationYLimit = height / 20F - 8.dp.toPx()
        val translationYFactor = ((touchY - initialEvent.touchY) / height) * (progress * 3F).coerceAtMost(1f)

        return translationYLimit * translationYFactor
    }

    override suspend fun animate(event: BackEvent) {
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
                launch { finishProgressAnimatable.animateTo(targetValue = 0F) },
            )
        }
    }

    override suspend fun cancel() {
        progressAnimatable.animateTo(targetValue = 0F)
    }
}
