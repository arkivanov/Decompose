package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
import com.arkivanov.decompose.extensions.compose.stack.animation.isFront

@ExperimentalDecomposeApi
internal class DefaultStackAnimator(
    private val animationSpec: FiniteAnimationSpec<Float> = tween(),
    private val frame: @Composable (factor: Float, direction: Direction) -> Modifier
) : StackAnimator {

    @Composable
    override fun StackAnimationScope.animate(direction: Direction): Modifier {
        val factor by transition.animateFloat(transitionSpec = { animationSpec }) { state ->
            when (state) {
                EnterExitState.Visible -> 0F

                EnterExitState.PreEnter,
                EnterExitState.PostExit -> if (direction.isFront) 1F else -1F
            }
        }

        return frame(factor, direction)
    }
}
