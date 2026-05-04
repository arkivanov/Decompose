package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.ui.graphics.Shape
import androidx.navigationevent.NavigationEvent
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the first version of the
 * standard animation on some Android Upside Down Cake (API 34) devices (e.g. in system settings on Pixel phones).
 *
 * Deprecated: please use [androidPredictiveBackAnimatableV1] or [androidPredictiveBackAnimatableV2].
 *
 * @param initialNavigationEvent an initial [BackEvent] of the predictive back gesture.
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
    initialNavigationEvent: NavigationEvent,
    exitShape: ((progress: Float, edge: Int) -> Shape)? = null,
    enterShape: ((progress: Float, edge: Int) -> Shape)? = null,
): PredictiveBackAnimatable =
    androidPredictiveBackAnimatableV1(
        initialNavigationEvent = initialNavigationEvent,
        exitShape = exitShape,
        enterShape = enterShape,
    )

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the first version of the
 * standard animation on some Android Upside Down Cake (API 34) devices (e.g. in system settings on Pixel phones).
 *
 * @param initialNavigationEvent an initial [BackEvent] of the predictive back gesture.
 * @param exitShape an optional clipping shape of the child being removed (the currently active child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating from 0 to 1 when the gesture is confirmed.
 * @param enterShape an optional clipping shape of the child being shown (the previous child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating between 0 and 1 while the gesture is being performed.
 */
@ExperimentalDecomposeApi
fun androidPredictiveBackAnimatableV1(
    initialNavigationEvent: NavigationEvent,
    exitShape: ((progress: Float, edge: Int) -> Shape)? = null,
    enterShape: ((progress: Float, edge: Int) -> Shape)? = null,
): PredictiveBackAnimatable =
    AndroidPredictiveBackAnimatableV1(
        initialEvent = initialNavigationEvent,
        exitShape = exitShape,
        enterShape = enterShape
    )

/**
 * Creates an implementation of [PredictiveBackAnimatable] that resembles the second version of the
 * standard animation on some Android Vanilla Ice Cream and Baklava (API 35 and 36) devices
 * (e.g. in system settings on Pixel phones).
 *
 * @param initialNavigationEvent an initial [BackEvent] of the predictive back gesture.
 * @param exitShape an optional clipping shape of the child being removed (the currently active child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating from 0 to 1 when the gesture is confirmed.
 * @param enterShape an optional clipping shape of the child being shown (the previous child).
 * If not supplied then a [RoundedCornerShape][androidx.compose.foundation.shape.RoundedCornerShape] will be applied.
 * The `progress` argument is animating between 0 and 1 while the gesture is being performed.
 */
@ExperimentalDecomposeApi
fun androidPredictiveBackAnimatableV2(
    initialNavigationEvent: NavigationEvent,
    exitShape: ((progress: Float, edge: Int) -> Shape)? = null,
    enterShape: ((progress: Float, edge: Int) -> Shape)? = null,
): PredictiveBackAnimatable =
    AndroidPredictiveBackAnimatableV2(
        initialEvent = initialNavigationEvent,
        exitShape = exitShape,
        enterShape = enterShape,
    )
