package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.animation.core.Animatable
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.graphics.CompositingStrategy
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.onPlaced
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.lerp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.backhandler.BackEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch

@ExperimentalDecomposeApi
internal class AndroidPredictiveBackAnimatableV1(
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
                        enterModifier { progress, _ -> corners.toShape(progress) }
                    }
                } else {
                    enterModifier(enterShape)
                }
            }

    @Composable
    private fun Modifier.exitModifier(layoutShape: (progress: Float, edge: BackEvent.SwipeEdge) -> Shape): Modifier {
        var size by remember { mutableStateOf(IntSize.Zero) }
        val scaleFactor = 1F - exitProgress * 0.1F

        return this
            .onPlaced { size = it.size }
            .graphicsLayer(
                scaleX = scaleFactor,
                scaleY = scaleFactor,
                alpha = 1F - exitProgress,
                translationX = size.width * 0.5F * exitProgress,
                shape = layoutShape(exitProgress, edge),
                clip = true,
                compositingStrategy = CompositingStrategy.Offscreen,
            )
    }

    @Composable
    private fun Modifier.enterModifier(layoutShape: (progress: Float, edge: BackEvent.SwipeEdge) -> Shape): Modifier {
        val totalProgress = lerp(start = enterProgress, stop = 1F, fraction = finishProgress)
        var size by remember { mutableStateOf(IntSize.Zero) }
        val scaleFactor = lerp(start = lerp(start = 0.95F, stop = 0.90F, fraction = enterProgress), stop = 1F, fraction = finishProgress)

        return this
            .onPlaced { size = it.size }
            .graphicsLayer(
                scaleX = scaleFactor,
                scaleY = scaleFactor,
                alpha = totalProgress,
                translationX = lerp(start = -size.width * 0.15F, stop = 0F, fraction = totalProgress),
                shape = layoutShape(lerp(start = enterProgress, stop = 0F, fraction = finishProgress), edge),
                clip = true,
                compositingStrategy = CompositingStrategy.Offscreen,
            ) // Not using `graphicsLayer {}` with lambda due to https://github.com/arkivanov/Decompose/issues/877
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
