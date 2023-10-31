package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.predictiveback

import androidx.compose.animation.core.Animatable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackEvent

@ExperimentalDecomposeApi
internal class DefaultPredictiveBackAnimatable(
    initialBackEvent: BackEvent,
    private val getExitModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
    private val getEnterModifier: (progress: Float, edge: BackEvent.SwipeEdge) -> Modifier,
) : PredictiveBackAnimatable {

    private val progressAnimatable = Animatable(initialValue = initialBackEvent.progress)
    private var swipeEdge by mutableStateOf(initialBackEvent.swipeEdge)
    override val exitModifier: Modifier get() = getExitModifier(progressAnimatable.value, swipeEdge)
    override val enterModifier: Modifier get() = getEnterModifier(progressAnimatable.value, swipeEdge)

    override suspend fun animate(event: BackEvent) {
        swipeEdge = event.swipeEdge
        progressAnimatable.snapTo(targetValue = event.progress)
    }

    override suspend fun finish() {
        progressAnimatable.animateTo(targetValue = 1F)
    }
}
