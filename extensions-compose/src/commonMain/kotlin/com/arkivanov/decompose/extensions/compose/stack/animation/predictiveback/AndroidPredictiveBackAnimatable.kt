package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.ui.graphics.Shape
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackEvent

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the first version of the
 * standard animation on some Android Upside Down Cake (API 34) devices (e.g. in system settings on Pixel phones).
 *
 * Deprecated: please use [androidPredictiveBackAnimatableV1] or [androidPredictiveBackAnimatableV2].
 *
 * @param initialBackEvent an initial [BackEvent] of the predictive back gesture.
 * @param exitShape an optional clipping shape of the child being removed (the currently active child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating from 0 to 1 when the gesture is confirmed.
 * @param enterShape an optional clipping shape of the child being shown (the previous child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating between 0 and 1 while the gesture is being performed.
 */
@Deprecated(
    message = "Please use androidPredictiveBackAnimatableV1() or androidPredictiveBackAnimatableV2() functions",
    replaceWith = ReplaceWith(
        "androidPredictiveBackAnimatableV1(initialBackEvent, exitShape, enterShape)",
        "com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.androidPredictiveBackAnimatableV1",
    )
)
@ExperimentalDecomposeApi
fun androidPredictiveBackAnimatable(
    initialBackEvent: BackEvent,
    exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
    enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
): PredictiveBackAnimatable =
    androidPredictiveBackAnimatableV1(
        initialBackEvent = initialBackEvent,
        exitShape = exitShape,
        enterShape = enterShape,
    )

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the first version of the
 * standard animation on some Android Upside Down Cake (API 34) devices (e.g. in system settings on Pixel phones).
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
fun androidPredictiveBackAnimatableV1(
    initialBackEvent: BackEvent,
    exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
    enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
): PredictiveBackAnimatable =
    AndroidPredictiveBackAnimatableV1(
        initialEvent = initialBackEvent,
        exitShape = exitShape,
        enterShape = enterShape
    )

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the second version of the
 * standard animation on some Android Vanilla Ice Cream and Baklava (API 35 and 36) devices
 * (e.g. in system settings on Pixel phones).
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
fun androidPredictiveBackAnimatableV2(
    initialBackEvent: BackEvent,
    exitShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
    enterShape: ((progress: Float, edge: BackEvent.SwipeEdge) -> Shape)? = null,
): PredictiveBackAnimatable =
    AndroidPredictiveBackAnimatableV2(
        initialEvent = initialBackEvent,
        exitShape = exitShape,
        enterShape = enterShape,
    )
