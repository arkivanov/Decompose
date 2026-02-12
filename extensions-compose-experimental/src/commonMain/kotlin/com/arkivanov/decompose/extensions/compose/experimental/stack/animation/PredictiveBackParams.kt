package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.PredictiveBackAnimatable
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackHandler

/**
 * Contains configuration parameters for the predictive back gesture.
 *
 * @param backHandler A [BackHandler] for observing back events, usually taken from the
 * corresponding child [ComponentContext][com.arkivanov.decompose.ComponentContext].
 * @param onBack a callback to be called when the back gesture is confirmed (finished),
 * it should usually call [StackNavigator#pop][com.arkivanov.decompose.router.stack.pop].
 * @param animatable a function that returns a [PredictiveBackAnimatable] for the given
 * initial [BackEvent]. If not provided, then a default animation will be used for back gestures
 * (see [ChildStack][com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack]).
 *
 * @see com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
 * @see com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.androidPredictiveBackAnimatableV1
 * @see com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.androidPredictiveBackAnimatableV2
 */
@ExperimentalDecomposeApi
class PredictiveBackParams(
    val navigationEventDispatcher: NavigationEventDispatcher,
    val animatable: (initialNavigationEvent: NavigationEvent) -> PredictiveBackAnimatable? = { null },
) {

    internal fun copy(
        navigationEventDispatcher: NavigationEventDispatcher = this.navigationEventDispatcher,
        animatable: (initialNavigationEvent: NavigationEvent) -> PredictiveBackAnimatable? = this.animatable,
    ): PredictiveBackParams =
        PredictiveBackParams(
            navigationEventDispatcher = navigationEventDispatcher,
            animatable = animatable,
        )
}
