package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.animation.core.tween
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.MainTestClock
import androidx.compose.ui.test.junit4.createComposeRule
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.stack.ChildStack
import org.junit.Rule
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class MovableStackAnimationTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_animating_push_and_stack_pushed_during_animation_THEN_only_last_child_displayed() {
        val anim =
            MovableStackAnimation<String, Any>(
                disableInputDuringAnimation = true,
                selector = { _, _, _ -> fade(animationSpec = tween(durationMillis = 1000)) },
            )

        var stack by mutableStateOf(stack("1"))
        val displayedKeys = HashSet<String>()

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                DisposableEffect(it.key) {
                    displayedKeys += it.key
                    onDispose { displayedKeys -= it.key }
                }
            }
        }

        stack = stack("1", "2")
        composeRule.mainClock.advanceFramesBy(millis = 500L)
        stack = stack("1", "2", "3")
        composeRule.waitForIdle()

        assertEquals(setOf("3"), displayedKeys)
    }

    @Test
    fun WHEN_animating_pop_and_stack_pushed_during_animation_THEN_only_last_child_displayed() {
        val anim =
            MovableStackAnimation<String, Any>(
                disableInputDuringAnimation = true,
                selector = { _, _, _ -> fade(animationSpec = tween(durationMillis = 1000)) },
            )

        var stack by mutableStateOf(stack("1", "2"))
        val displayedKeys = HashSet<String>()

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                DisposableEffect(it.key) {
                    displayedKeys += it.key
                    onDispose { displayedKeys -= it.key }
                }
            }
        }

        stack = stack("1")
        composeRule.mainClock.advanceFramesBy(millis = 500L)
        stack = stack("1", "3")
        composeRule.waitForIdle()

        assertEquals(setOf("3"), displayedKeys)
    }

    @Test
    fun GIVEN_stack_pushed_during_push_animation_WHEN_stack_pushed_after_animation_THEN_only_last_child_displayed() {
        val anim =
            MovableStackAnimation<String, Any>(
                disableInputDuringAnimation = true,
                selector = { _, _, _ -> fade(animationSpec = tween(durationMillis = 1000)) },
            )

        var stack by mutableStateOf(stack("1"))
        val displayedKeys = HashSet<String>()

        composeRule.setContent {
            anim(stack = stack, modifier = Modifier) {
                DisposableEffect(it.key) {
                    displayedKeys += it.key
                    onDispose { displayedKeys -= it.key }
                }
            }
        }

        stack = stack("1", "2")
        composeRule.mainClock.advanceFramesBy(millis = 500L)
        stack = stack("1", "2", "3")
        composeRule.waitForIdle()
        stack = stack("1", "2", "3", "4")
        composeRule.waitForIdle()

        assertEquals(setOf("4"), displayedKeys)
    }

    private fun MainTestClock.advanceFramesBy(millis: Long) {
        val endTime = currentTime + millis
        while (currentTime < endTime) {
            advanceTimeByFrame()
        }
    }

    private fun child(key: String): Child.Created<String, Any> =
        Child.Created(configuration = "Config", instance = Any(), key = key)

    private fun stack(vararg keys: String): ChildStack<String, Any> =
        ChildStack(
            active = child(keys.last()),
            backStack = keys.dropLast(1).map(::child),
        )
}
