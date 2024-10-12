package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.MainTestClock
import androidx.compose.ui.test.junit4.createComposeRule
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.experimental.animateFloat
import com.arkivanov.decompose.extensions.compose.experimental.takeSorted
import com.arkivanov.decompose.router.stack.ChildStack
import org.junit.Rule
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class DefaultStackAnimationTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_animating_push_and_stack_popped_during_animation_THEN_animated_push_and_pop_fully() {
        val anim =
            DefaultStackAnimation<Int, Any>(
                disableInputDuringAnimation = true,
                predictiveBackParams = { null },
                selector = { _, _, _ -> null },
            )

        var stack by mutableStateOf(stack(1))
        val values1 = ArrayList<Pair<Long, Float>>()
        val values2 = ArrayList<Pair<Long, Float>>()

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                val value by transition.animateFloat(durationMillis = 1000)
                val pair = composeRule.mainClock.currentTime to value

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
        val v21 = values2.takeSorted(compareBy { it.second })
        assertTrue(v11.size > 10)
        assertTrue(v21.size > 10)
        assertEquals(1F, v11.first().second)
        assertEquals(0F, v11.last().second)
        assertEquals(0F, v21.first().second)
        assertEquals(1F, v21.last().second)

        val v12 = values1.drop(v11.size - 1).takeSorted(compareBy { it.second })
        val v22 = values2.drop(v21.size - 1).takeSorted(compareByDescending { it.second })
        assertTrue(v12.size > 10)
        assertTrue(v22.size > 10)
        assertEquals(0F, v12.first().second)
        assertEquals(1F, v12.last().second)
        assertEquals(1F, v22.first().second)
        assertEquals(0F, v22.last().second)
    }

    @Test
    fun WHEN_animating_push_and_stack_popped_during_animation_THEN_first_child_restarted() {
        val anim =
            DefaultStackAnimation<Int, Any>(
                disableInputDuringAnimation = true,
                predictiveBackParams = { null },
                selector = { _, _, _ -> null },
            )

        var stack by mutableStateOf(stack(1))
        var counter = 0

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                transition.animateFloat(durationMillis = 1000)

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

        assertEquals(2, counter)
    }

    private fun MainTestClock.advanceFramesBy(millis: Long) {
        val endTime = currentTime + millis
        while (currentTime < endTime) {
            advanceTimeByFrame()
        }
    }

    private fun child(config: Int): Child.Created<Int, Any> =
        Child.Created(configuration = config, instance = Any())

    private fun stack(vararg stack: Int): ChildStack<Int, Any> =
        ChildStack(
            active = child(stack.last()),
            backStack = stack.dropLast(1).map(::child),
        )
}
