package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.core.AnimationState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.animateTo
import androidx.compose.animation.core.isFinished
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
internal class DefaultChildAnimator(
    private val animationSpec: FiniteAnimationSpec<Float> = tween(),
    private val frame: @Composable (factor: Float, direction: Direction, content: @Composable (Modifier) -> Unit) -> Unit
) : ChildAnimator {

    @Composable
    override operator fun invoke(direction: Direction, onFinished: () -> Unit, content: @Composable (Modifier) -> Unit) {
        val animationState = remember(direction) { AnimationState(initialValue = if (direction == Direction.IDLE) 0F else 1F) }

        LaunchedEffect(animationState) {
            animationState.animateTo(
                targetValue = 0F,
                animationSpec = animationSpec,
                sequentialAnimation = !animationState.isFinished,
            )

            onFinished()
        }

        val factor =
            when (direction) {
                Direction.IDLE,
                Direction.ENTER_FRONT -> animationState.value
                Direction.EXIT_FRONT -> 1F - animationState.value
                Direction.ENTER_BACK -> -animationState.value
                Direction.EXIT_BACK -> animationState.value - 1F
            }

        frame(factor, direction, content)
    }
}
