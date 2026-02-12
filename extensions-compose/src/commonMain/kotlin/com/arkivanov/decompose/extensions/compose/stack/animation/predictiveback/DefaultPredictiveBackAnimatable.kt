package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.animation.core.Animatable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.navigationevent.NavigationEvent
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
internal class DefaultPredictiveBackAnimatable(
    initialNavigationEvent: NavigationEvent,
    private val getExitModifier: (progress: Float, edge: Int) -> Modifier,
    private val getEnterModifier: (progress: Float, edge: Int) -> Modifier,
) : PredictiveBackAnimatable {

    private val progressAnimatable = Animatable(initialValue = initialNavigationEvent.progress)
    private var swipeEdge by mutableStateOf(initialNavigationEvent.swipeEdge)
    override val exitModifier: Modifier get() = getExitModifier(progressAnimatable.value, swipeEdge)
    override val enterModifier: Modifier get() = getEnterModifier(progressAnimatable.value, swipeEdge)

    override suspend fun animate(event: NavigationEvent) {
        swipeEdge = event.swipeEdge
        progressAnimatable.snapTo(targetValue = event.progress)
    }

    override suspend fun finish() {
        progressAnimatable.animateTo(targetValue = 1F)
    }

    override suspend fun cancel() {
        progressAnimatable.animateTo(targetValue = 0F)
    }
}
