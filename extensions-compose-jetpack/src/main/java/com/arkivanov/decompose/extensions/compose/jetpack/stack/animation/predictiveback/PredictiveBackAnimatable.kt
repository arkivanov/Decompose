package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation.predictiveback

import androidx.compose.foundation.layout.absoluteOffset
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackEvent

/**
 * Animates [exitModifier] and [enterModifier] according to incoming [BackEvent] events.
 *
 * [Animatable][androidx.compose.animation.core.Animatable] can be used for animations.
 */
@ExperimentalDecomposeApi
interface PredictiveBackAnimatable {

    /**
     * Returns a [Modifier] for the child being removed (the currently active child).
     * The property must be Compose-observable, e.g. be backed by a Compose state.
     */
    val exitModifier: Modifier

    /**
     * Returns a [Modifier] for the child being shown (the previous child, behind the currently active child).
     * The property must be Compose-observable, e.g. be backed by a Compose state.
     */
    val enterModifier: Modifier

    /**
     * Animates both [exitModifier] and [enterModifier] according to [event].
     * Any previous animation must be cancelled.
     *
     * @see androidx.compose.animation.core.Animatable
     */
    suspend fun animate(event: BackEvent)

    /**
     * Animates both [exitModifier] and [enterModifier] towards the final state.
     * Any previous animation must be cancelled.
     *
     * @see androidx.compose.animation.core.Animatable
     */
    suspend fun finish()
}

/**
 * Creates a default implementation of [PredictiveBackAnimatable] with customisable exit and enter [Modifier]s.
 *
 * @param initialBackEvent an initial [BackEvent] of the predictive back gesture.
 * @param exitModifier a function that returns a [Modifier] for every gesture event, for
 * the child being removed (the currently active child).
 * @param enterModifier a function that returns a [Modifier] for every gesture event, for
 * the previous child (behind the currently active child).
 */
@ExperimentalDecomposeApi
fun predictiveBackAnimatable(
    initialBackEvent: BackEvent,
    exitModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier = { progress, edge ->
        Modifier.exitModifier(progress = progress, edge = edge)
    },
    enterModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier = { progress, _ ->
        Modifier.enterModifier(progress = progress)
    },
): PredictiveBackAnimatable =
    DefaultPredictiveBackAnimatable(
        initialBackEvent = initialBackEvent,
        getExitModifier = exitModifier,
        getEnterModifier = enterModifier,
    )

private fun Modifier.exitModifier(progress: Float, edge: BackEvent.SwipeEdge): Modifier =
    scale(1F - progress * 0.25F)
        .absoluteOffset(
            x = when (edge) {
                BackEvent.SwipeEdge.LEFT -> 32.dp * progress
                BackEvent.SwipeEdge.RIGHT -> (-32).dp * progress
                BackEvent.SwipeEdge.UNKNOWN -> 0.dp
            },
        )
        .alpha(((1F - progress) * 2F).coerceAtMost(1F))
        .clip(RoundedCornerShape(size = 64.dp * progress))

private fun Modifier.enterModifier(progress: Float): Modifier =
    drawWithContent {
        drawContent()
        drawRect(color = Color(red = 0F, green = 0F, blue = 0F, alpha = (1F - progress) / 4F))
    }
