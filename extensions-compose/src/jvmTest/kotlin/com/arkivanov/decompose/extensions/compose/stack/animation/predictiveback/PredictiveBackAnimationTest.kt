package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import androidx.compose.material.Text
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.createComposeRule
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackEvent
import org.junit.Rule
import kotlin.test.Test

@Suppress("TestFunctionName")
@OptIn(ExperimentalDecomposeApi::class)
class PredictiveBackAnimationTest {

    @get:Rule
    val composeRule = createComposeRule()

    private val backDispatcher = BackDispatcher()

    /**
     * Regression test for https://github.com/arkivanov/Decompose/issues/987
     *
     * Reproduces the "Key XYZ was used multiple times" crash that occurs when the navigation
     * stack changes externally while a predictive back gesture is in progress.
     *
     * The scenario:
     * 1. Stack = [1, 2, 3], active = 3
     * 2. Predictive back gesture starts: entering item shows child "2", exiting item shows child "3"
     * 3. Stack changes externally to [1, 3], active = 3
     * 4. The new handler reuses the entering item's key scope. The inner AbstractStackAnimation
     *    in that scope sees the stack change (active went from "2" to "3") and starts a
     *    transition that renders child "3" — but child "3" is also still being rendered in
     *    the exiting item's key scope (which is being disposed). This causes the shared
     *    movableContentOf to be called with the same child parameter from two simultaneous
     *    call sites, triggering the crash.
     */
    @Test
    fun GIVEN_gesture_in_progress_WHEN_stack_changed_externally_to_contain_exiting_child_as_active_THEN_no_crash() {
        var stack by mutableStateOf(stack("1", "2", "3"))

        composeRule.setContent {
            Children(
                stack = stack,
                animation = predictiveBackAnimation(
                    backHandler = backDispatcher,
                    onBack = { stack = stack.dropLast() },
                ),
            ) {
                Text(text = it.configuration)
            }
        }

        composeRule.waitForIdle()

        // Start a predictive back gesture
        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        // Progress the gesture so the animation items are created
        // (entering item shows "2", exiting item shows "3")
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()

        // Change the stack externally while the gesture is in progress.
        // The new stack [1, 3] has "3" as active — the same child that was being shown
        // by the exiting item. This is the trigger for the crash.
        stack = stack("1", "3")

        // This should not crash with "Key XYZ was used multiple times"
        composeRule.waitForIdle()
    }

    /**
     * Same as above but with a different stack change pattern: the stack is replaced entirely.
     */
    @Test
    fun GIVEN_gesture_in_progress_WHEN_stack_replaced_with_exiting_child_as_active_THEN_no_crash() {
        var stack by mutableStateOf(stack("1", "2", "3"))

        composeRule.setContent {
            Children(
                stack = stack,
                animation = predictiveBackAnimation(
                    backHandler = backDispatcher,
                    onBack = { stack = stack.dropLast() },
                ),
            ) {
                Text(text = it.configuration)
            }
        }

        composeRule.waitForIdle()

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()

        // Replace with a stack where "3" (the exiting child) is the only child
        stack = stack("3")
        composeRule.waitForIdle()
    }

    private fun stack(vararg configs: String): ChildStack<String, String> =
        ChildStack(
            active = child(configs.last()),
            backStack = configs.dropLast(1).map(::child),
        )

    private fun ChildStack<String, String>.dropLast(): ChildStack<String, String> =
        ChildStack(active = backStack.last(), backStack = backStack.dropLast(1))

    private fun child(config: String): Child.Created<String, String> =
        Child.Created(configuration = config, instance = config)
}
