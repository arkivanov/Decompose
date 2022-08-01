package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import androidx.compose.animation.core.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
internal class DefaultStackAnimator(
    private val animationSpec: FiniteAnimationSpec<Float> = tween(),
    private val frame: @Composable (factor: Float, direction: Direction, content: @Composable (Modifier) -> Unit) -> Unit
) : StackAnimator {

    @Composable
    override operator fun invoke(direction: Direction, onFinished: () -> Unit, content: @Composable (Modifier) -> Unit) {
        val animationState = remember(direction) { AnimationState(initialValue = 1F) }

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
                Direction.ENTER_FRONT -> animationState.value
                Direction.EXIT_FRONT -> 1F - animationState.value
                Direction.ENTER_BACK -> -animationState.value
                Direction.EXIT_BACK -> animationState.value - 1F
            }

        frame(factor, direction, content)
    }
}
