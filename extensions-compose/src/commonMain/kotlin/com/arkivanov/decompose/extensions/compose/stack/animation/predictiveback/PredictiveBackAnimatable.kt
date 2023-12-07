package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.ui.Modifier
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
 * The gesture progress follows the events from the system. Automatically animates the progress towards 1.0
 * once the gesture is confirmed.
 *
 * If the behaviour of the returned default [PredictiveBackAnimatable] is undesired or the API is not suitable for
 * your use case, then consider implementing [PredictiveBackAnimatable] manually.
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
    exitModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
    enterModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
): PredictiveBackAnimatable =
    DefaultPredictiveBackAnimatable(
        initialBackEvent = initialBackEvent,
        getExitModifier = exitModifier,
        getEnterModifier = enterModifier,
    )
