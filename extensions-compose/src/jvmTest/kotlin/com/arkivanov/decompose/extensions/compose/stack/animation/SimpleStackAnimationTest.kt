package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.Transition
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.MainTestClock
import androidx.compose.ui.test.junit4.createComposeRule
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.takeSorted
import com.arkivanov.decompose.router.stack.ChildStack
import org.junit.Rule
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class SimpleStackAnimationTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_animating_push_and_stack_popped_during_animation_THEN_animated_push_and_pop_fully() {
        val anim =
            SimpleStackAnimation<Int, Any>(
                disableInputDuringAnimation = true,
                selector = {
                    stackAnimator(animationSpec = tween(durationMillis = 1000)) { factor, _, content ->
                        CompositionLocalProvider(LocalProgress provides factor) {
                            content(Modifier)
                        }
                    }
                },
            )

        var stack by mutableStateOf(stack(1))
        val values1 = ArrayList<Pair<Long, Float>>()
        val values2 = ArrayList<Pair<Long, Float>>()

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                val pair = composeRule.mainClock.currentTime to LocalProgress.current
                when (it.key) {
                    1 -> values1 += pair
                    2 -> values2 += pair
                }
            }
        }

        stack = stack(1, 2)
        composeRule.mainClock.advanceFramesBy(millis = 500L)
        stack = stack(1)
        composeRule.waitForIdle()

        val v11 = values1.takeSorted(compareByDescending { it.second })
        val v21 = values2.takeSorted(compareByDescending { it.second })
        assertTrue(v11.size > 10)
        assertTrue(v21.size > 10)
        assertEquals(0F, v11.first().second, 0.01F)
        assertEquals(-1F, v11.last().second, 0.01F)
        assertEquals(1F, v21.first().second, 0.01F)
        assertEquals(0F, v21.last().second, 0.01F)

        val v12 = values1.drop(v11.size - 1).takeSorted(compareBy { it.second })
        val v22 = values2.drop(v21.size - 1).takeSorted(compareBy { it.second })
        assertTrue(v12.size > 10)
        assertTrue(v22.size > 10)
        assertEquals(-1F, v12.first().second, 0.01F)
        assertEquals(0F, v12.last().second, 0.01F)
        assertEquals(0F, v22.first().second, 0.01F)
        assertEquals(1F, v22.last().second, 0.01F)
    }

    @Test
    fun WHEN_animating_push_and_stack_popped_during_animation_THEN_first_child_restarted() {
        val anim =
            SimpleStackAnimation<Int, Any>(
                disableInputDuringAnimation = true,
                selector = { fade(animationSpec = tween(durationMillis = 1000)) },
            )

        var stack by mutableStateOf(stack(1))
        var counter = 0

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                if (it.key == 1) {
                    LaunchedEffect(Unit) {
                        counter++
                    }
                }
            }
        }

        stack = stack(1, 2)
        composeRule.mainClock.advanceFramesBy(millis = 500L)
        stack = stack(1)
        composeRule.waitForIdle()

        assertEquals(counter, 2)
    }

    private fun MainTestClock.advanceFramesBy(millis: Long) {
        val endTime = currentTime + millis
        while (currentTime < endTime) {
            advanceTimeByFrame()
        }
    }

    @Composable
    private fun Transition<EnterExitState>.animateFloat(durationMillis: Int): State<Float> =
        animateFloat(transitionSpec = { tween(durationMillis = durationMillis, easing = LinearEasing) }) { state ->
            when (state) {
                EnterExitState.PreEnter -> 0F
                EnterExitState.Visible -> 1F
                EnterExitState.PostExit -> 0F
            }
        }

    private fun child(config: Int): Child.Created<Int, Any> =
        Child.Created(configuration = config, instance = Any())

    private fun stack(vararg stack: Int): ChildStack<Int, Any> =
        ChildStack(
            active = child(stack.last()),
            backStack = stack.dropLast(1).map(::child),
        )

    private companion object {
        private val LocalProgress = compositionLocalOf { 0F }
    }
}
