package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.animation.core.Animatable
import androidx.compose.foundation.layout.offset
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.layout.onPlaced
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.lerp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the standard animation on
 * some Android devices (e.g. in system settings on Pixel phones).
 *
 * @param initialBackEvent an initial [BackEvent] of the predictive back gesture.
 * @param exitShape an optional clipping shape of the child being removed (the currently active child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating from 0 to 1 when the gesture is confirmed.
 * @param enterShape an optional clipping shape of the child being shown (the previous child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating between 0 and 1 while the gesture is being performed.
 */
@ExperimentalDecomposeApi
fun androidPredictiveBackAnimatable(
    initialBackEvent: BackEvent,
    exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
    enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
): PredictiveBackAnimatable =
    AndroidPredictiveBackAnimatable(
        initialEvent = initialBackEvent,
        exitShape = exitShape,
        enterShape = enterShape,
    )

@ExperimentalDecomposeApi
private class AndroidPredictiveBackAnimatable(
    initialEvent: BackEvent,
    private val exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
    private val enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
) : PredictiveBackAnimatable {

    private val exitProgressAnimatable = Animatable(initialValue = initialEvent.progress.exitProgress())
    private val exitProgress: Float by derivedStateOf { exitProgressAnimatable.value }
    private val enterProgressAnimatable = Animatable(initialValue = initialEvent.progress.enterProgress())
    private val enterProgress: Float by derivedStateOf { enterProgressAnimatable.value }
    private val finishProgressAnimatable = Animatable(initialValue = 0F)
    private val finishProgress: Float by derivedStateOf { finishProgressAnimatable.value }
    private var edge by mutableStateOf(initialEvent.swipeEdge)

    override val exitModifier: Modifier
        get() =
            Modifier.composed {
                if (exitShape == null) {
                    withLayoutCorners { corners ->
                        exitModifier { progress, _ -> corners.toShape(progress) }
                    }
                } else {
                    exitModifier(exitShape)
                }
            }

    override val enterModifier: Modifier
        get() =
            Modifier.composed {
                if (enterShape == null) {
                    withLayoutCorners { corners ->
                        enterModifier { progress, _ -> corners.toShape(1F - progress) }
                    }
                } else {
                    enterModifier(enterShape)
                }
            }

    @Composable
    private fun Modifier.exitModifier(layoutShape: (progress: Float, edge: BackEvent.SwipeEdge) -> Shape): Modifier {
        var size by remember { mutableStateOf(IntSize.Zero) }

        return this
            .scale(1F - exitProgress * 0.1F)
            .onPlaced { size = it.size }
            .offset { IntOffset(x = (size.width * 0.5F * exitProgress).toInt(), y = 0) }
            .alpha(1F - exitProgress)
            .clip(layoutShape(exitProgress, edge))
    }

    @Composable
    private fun Modifier.enterModifier(layoutShape: (progress: Float, edge: BackEvent.SwipeEdge) -> Shape): Modifier {
        val totalProgress = lerp(start = enterProgress, stop = 1F, fraction = finishProgress)
        var size by remember { mutableStateOf(IntSize.Zero) }

        return this
            .scale(lerp(start = lerp(start = 0.95F, stop = 0.90F, fraction = enterProgress), stop = 1F, fraction = finishProgress))
            .onPlaced { size = it.size }
            .offset { IntOffset(x = lerp(start = -size.width * 0.15F, stop = 0F, fraction = totalProgress).toInt(), y = 0) }
            .alpha(totalProgress)
            .clip(layoutShape(finishProgress, edge))
    }

    override suspend fun animate(event: BackEvent) {
        edge = event.swipeEdge

        awaitAll(
            { exitProgressAnimatable.animateTo(targetValue = event.progress.exitProgress()) },
            { enterProgressAnimatable.animateTo(targetValue = event.progress.enterProgress()) },
        )
    }

    override suspend fun finish() {
        awaitAll(
            { exitProgressAnimatable.animateTo(targetValue = 1F) },
            { finishProgressAnimatable.animateTo(targetValue = 1F) },
        )
    }

    override suspend fun cancel() {
        awaitAll(
            { exitProgressAnimatable.animateTo(targetValue = 0F) },
            { enterProgressAnimatable.animateTo(targetValue = 0F) },
        )
    }

    private suspend fun awaitAll(vararg actions: suspend CoroutineScope.() -> Unit) {
        coroutineScope {
            actions.map { launch(block = it) }.joinAll()
        }
    }

    private fun Float.exitProgress(): Float =
        if (this < PROGRESS_THRESHOLD) this else 1F

    private fun Float.enterProgress(): Float =
        if (this < PROGRESS_THRESHOLD) {
            0F
        } else {
            lerp(start = 0.4F, stop = 1F, fraction = (this - PROGRESS_THRESHOLD) / (1F - PROGRESS_THRESHOLD))
        }

    private companion object {
        private const val PROGRESS_THRESHOLD = 0.05F
    }
}
