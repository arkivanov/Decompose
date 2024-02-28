package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.animation.core.Animatable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.GraphicsLayerScope
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.graphicsLayer
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
 * @param switchProgressThreshold a progress threshold where the exiting screen switches to the entering one and back.
 * @param exitShape an optional clipping shape of the child being removed (the currently active child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * @param enterShape an optional clipping shape of the child being shown (the previous child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 */
@ExperimentalDecomposeApi
fun androidPredictiveBackAnimatable(
    initialBackEvent: BackEvent,
    switchProgressThreshold: Float = 0.05F,
    exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
    enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
): PredictiveBackAnimatable =
    AndroidPredictiveBackAnimatable(
        initialEvent = initialBackEvent,
        switchProgressThreshold = switchProgressThreshold,
        exitShape = exitShape,
        enterShape = enterShape,
    )

@ExperimentalDecomposeApi
private class AndroidPredictiveBackAnimatable(
    initialEvent: BackEvent,
    private val switchProgressThreshold: Float,
    private val exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)?,
    private val enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)?,
) : PredictiveBackAnimatable {

    private val exitProgressAnimatable = Animatable(initialValue = initialEvent.progress.exitProgress())
    private val exitProgress: Float by derivedStateOf { exitProgressAnimatable.value }
    private val enterProgressAnimatable = Animatable(initialValue = initialEvent.progress.enterProgress())
    private val enterProgress: Float by derivedStateOf { enterProgressAnimatable.value }
    private val enterFinishProgressAnimatable = Animatable(initialValue = 0F)
    private val enterFinishProgress: Float by derivedStateOf { enterFinishProgressAnimatable.value }
    private var edge by mutableStateOf(initialEvent.swipeEdge)

    override val exitModifier: Modifier
        get() =
            if (exitShape == null) {
                Modifier.withLayoutCorners { corners ->
                    graphicsLayer {
                        setupExitGraphicLayer { progress, _ -> corners.toShape(progress) }
                    }
                }
            } else {
                Modifier.graphicsLayer {
                    setupExitGraphicLayer(exitShape)
                }
            }

    override val enterModifier: Modifier
        get() =
            if (enterShape == null) {
                Modifier.withLayoutCorners { corners ->
                    graphicsLayer {
                        setupEnterGraphicLayer { progress, _ -> corners.toShape(progress) }
                    }
                }
            } else {
                Modifier.graphicsLayer {
                    setupEnterGraphicLayer(enterShape)
                }
            }

    private fun GraphicsLayerScope.setupExitGraphicLayer(layoutShape: (progress: Float, edge: BackEvent.SwipeEdge) -> Shape) {
        alpha = 1F - exitProgress
        scaleX = 1F - exitProgress * 0.1F
        scaleY = scaleX
        translationX = size.width * 0.5F * exitProgress
        shape = layoutShape(exitProgress, edge)
        clip = true
    }

    private fun GraphicsLayerScope.setupEnterGraphicLayer(layoutShape: (progress: Float, edge: BackEvent.SwipeEdge) -> Shape) {
        val totalProgress = lerp(start = enterProgress, stop = 1F, fraction = enterFinishProgress)
        alpha = totalProgress
        scaleX = lerp(start = lerp(start = 0.95F, stop = 0.90F, fraction = enterProgress), stop = 1F, fraction = enterFinishProgress)
        scaleY = scaleX
        translationX = lerp(start = -size.width * 0.15F, stop = 0F, fraction = totalProgress)
        shape = layoutShape(totalProgress, edge)
        clip = true
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
            { enterFinishProgressAnimatable.animateTo(targetValue = 1F) },
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
        if (this < switchProgressThreshold) this else 1F

    private fun Float.enterProgress(): Float =
        if (this < switchProgressThreshold) {
            0F
        } else {
            lerp(start = 0.4F, stop = 1F, fraction = (this - switchProgressThreshold) / (1F - switchProgressThreshold))
        }
}
