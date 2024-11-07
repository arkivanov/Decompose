package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.animateFloat
import androidx.compose.material.Text
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithText
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.animateFloat
import com.arkivanov.decompose.extensions.compose.experimental.assertTestTagToRootDoesNotExist
import com.arkivanov.decompose.extensions.compose.experimental.assertTestTagToRootExists
import com.arkivanov.decompose.extensions.compose.experimental.stack.dropLast
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.PredictiveBackAnimatable
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackEvent
import org.junit.Rule
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
@OptIn(ExperimentalDecomposeApi::class)
class PredictiveBackGestureTest {

    @get:Rule
    val composeRule = createComposeRule()

    private val backDispatcher = BackDispatcher()

    @Test
    fun WHEN_gesture_not_started_THEN_active_child_shown_without_progress() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        composeRule.onNodeWithText("1").assertDoesNotExist()
        composeRule.onNodeWithText("2").assertExists()
        composeRule.onNodeWithText("2").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
    }

    @Test
    fun WHEN_startPredictiveBack_THEN_active_child_shown_without_progress() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        composeRule.onNodeWithText("1").assertDoesNotExist()
        composeRule.onNodeWithText("2").assertExists()
        composeRule.onNodeWithText("2").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
    }

    @Test
    fun GIVEN_gesture_started_WHEN_progressPredictiveBack_THEN_gesture_progressed() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()

        composeRule.onNodeWithText("1").assertTestTagToRootExists(enterTestTag(progress = 0.5F))
        composeRule.onNodeWithText("2").assertTestTagToRootExists(exitTestTag(progress = 0.5F))
    }

    @Test
    fun GIVEN_gesture_started_WHEN_back_THEN_gesture_finished_and_stack_popped() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()

        backDispatcher.back()
        composeRule.waitForIdle()

        assertEquals(stack("1"), stack)
        composeRule.onNodeWithText("1").assertExists()
        composeRule.onNodeWithText("1").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
        composeRule.onNodeWithText("2").assertDoesNotExist()
    }

    @Test
    fun GIVEN_gesture_started_WHEN_cancelPredictiveBack_THEN_gesture_finished_and_stack_not_changed() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()

        backDispatcher.cancelPredictiveBack()
        composeRule.waitForIdle()

        assertEquals(stack("1", "2"), stack)
        composeRule.onNodeWithText("1").assertDoesNotExist()
        composeRule.onNodeWithText("2").assertExists()
        composeRule.onNodeWithText("2").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_popped_THEN_child_popped_and_gesture_finished() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        stack = stack.dropLast()
        composeRule.waitForIdle()

        assertEquals(stack("1"), stack)
        composeRule.onNodeWithText("1").assertExists()
        composeRule.onNodeWithText("1").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
        composeRule.onNodeWithText("2").assertDoesNotExist()
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_pushed_THEN_child_pushed_and_gesture_finished() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        stack = stack("1", "2", "3")
        composeRule.waitForIdle()

        assertEquals(stack("1", "2", "3"), stack)
        composeRule.onNodeWithText("2").assertDoesNotExist()
        composeRule.onNodeWithText("3").assertExists()
        composeRule.onNodeWithText("3").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_popped_and_back_THEN_previous_child_popped_and_gesture_finished() {
        var stack by mutableStateOf(stack("1", "2", "3"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        stack = stack.dropLast()
        composeRule.waitForIdle()
        backDispatcher.back()
        composeRule.waitForIdle()

        assertEquals(stack("1"), stack)
        composeRule.onNodeWithText("1").assertExists()
        composeRule.onNodeWithText("1").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
        composeRule.onNodeWithText("2").assertDoesNotExist()
        composeRule.onNodeWithText("3").assertDoesNotExist()
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_popped_THEN_gesture_cancelled() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(animator = fade(), onBack = { stack = stack.dropLast() },)

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()

        stack = stack.dropLast()
        composeRule.mainClock.autoAdvance = false
        composeRule.mainClock.advanceTimeByFrame()

        composeRule.onNodeWithText("2").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_pushed_and_back_THEN_new_child_popped_and_gesture_finished() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        stack = stack("1", "2", "3")
        composeRule.waitForIdle()
        backDispatcher.back()
        composeRule.waitForIdle()

        assertEquals(stack("1", "2"), stack)
        composeRule.onNodeWithText("2").assertExists()
        composeRule.onNodeWithText("2").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
        composeRule.onNodeWithText("3").assertDoesNotExist()
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_popped_and_cancelPredictiveBack_THEN_child_popped_and_gesture_finished() {
        var stack by mutableStateOf(stack("1", "2", "3"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        stack = stack.dropLast()
        composeRule.waitForIdle()
        backDispatcher.cancelPredictiveBack()
        composeRule.waitForIdle()

        assertEquals(stack("1", "2"), stack)
        composeRule.onNodeWithText("2").assertExists()
        composeRule.onNodeWithText("2").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
        composeRule.onNodeWithText("3").assertDoesNotExist()
    }

    @Test
    fun GIVEN_gesture_started_WHEN_stack_pushed_and_back_THEN_child_pushed_and_gesture_finished() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        stack = stack("1", "2", "3")
        composeRule.waitForIdle()
        backDispatcher.cancelPredictiveBack()
        composeRule.waitForIdle()

        assertEquals(stack("1", "2", "3"), stack)
        composeRule.onNodeWithText("2").assertDoesNotExist()
        composeRule.onNodeWithText("3").assertExists()
        composeRule.onNodeWithText("3").assertTestTagToRootDoesNotExist { it.startsWith(TEST_TAG_PREFIX) }
    }

    @Test
    fun GIVEN_three_children_in_stack_and_gesture_started_WHEN_predictive_back_finished_THEN_predictive_back_animatable_not_created() {
        var stack by mutableStateOf(stack("1", "2", "3"))
        val values = ArrayList<Float>()
        var isAnimatableCreated = false

        val animation =
            DefaultStackAnimation(
                predictiveBackAnimatable = { initialBackEvent ->
                    isAnimatableCreated = true
                    TestAnimatable(initialBackEvent)
                },
                onBack = {
                    values.clear()
                    stack = stack.dropLast()
                },
            )


        composeRule.setContent {
            animation(stack, Modifier) {
                val float by transition.animateFloat { state ->
                    when (state) {
                        EnterExitState.PreEnter -> 0F
                        EnterExitState.Visible -> 1F
                        EnterExitState.PostExit -> 0F
                    }
                }

                if (it.configuration == "2") {
                    values += float
                }
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.back()
        composeRule.waitForIdle()

        assertFalse(isAnimatableCreated)
    }

    @Test
    fun GIVEN_three_children_in_stack_and_gesture_started_WHEN_predictive_back_finished_THEN_previous_child_animated_after_pop() {
        var stack by mutableStateOf(stack("1", "2", "3"))
        val values = ArrayList<Float>()

        val animation =
            DefaultStackAnimation(
                onBack = {
                    values.clear()
                    stack = stack.dropLast()
                }
            )


        composeRule.setContent {
            animation(stack, Modifier) {
                val float by transition.animateFloat { state ->
                    when (state) {
                        EnterExitState.PreEnter -> 0F
                        EnterExitState.Visible -> 1F
                        EnterExitState.PostExit -> 0F
                    }
                }

                if (it.configuration == "2") {
                    values += float
                }
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.back()
        composeRule.waitForIdle()

        assertTrue(values.any { it < 1F })
    }

    @Test
    fun GIVEN_three_children_in_stack_and_gesture_progressed_WHEN_predictive_back_finished_THEN_previous_child_not_animated_after_pop() {
        var stack by mutableStateOf(stack("1", "2", "3"))
        val values = ArrayList<Float>()

        val animation =
            DefaultStackAnimation(
                onBack = {
                    values.clear()
                    stack = stack.dropLast()
                }
            )


        composeRule.setContent {
            animation(stack, Modifier) {
                val float by transition.animateFloat { state ->
                    when (state) {
                        EnterExitState.PreEnter -> 0F
                        EnterExitState.Visible -> 1F
                        EnterExitState.PostExit -> 0F
                    }
                }

                if (it.configuration == "2") {
                    values += float
                }
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
        composeRule.waitForIdle()
        backDispatcher.back()
        composeRule.waitForIdle()

        assertFalse(values.any { it < 1F })
    }

    @Test
    fun GIVEN_predictive_animatable_not_null_and_two_children_in_stack_WHEN_gesture_progressed_THEN_animation_transition_not_animating() {
        var stack by mutableStateOf(stack("1", "2"))

        val animation =
            DefaultStackAnimation(
                predictiveBackAnimatable = ::TestAnimatable,
                onBack = { stack = stack.dropLast() },
            )

        val values = HashMap<String, Float>()

        composeRule.setContent {
            animation(stack, Modifier) {
                val value by transition.animateFloat()
                values[it.configuration] = value
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0.1F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.2F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.3F))
        composeRule.waitForIdle()

        assertEquals(0F, values["1"])
        assertEquals(1F, values["2"])
    }

    @Test
    fun GIVEN_predictive_animatable_null_and_two_children_in_stack_WHEN_gesture_progressed_THEN_animation_transition_animating() {
        var stack by mutableStateOf(stack("1", "2"))

        val animation =
            DefaultStackAnimation(
                predictiveBackAnimatable = { null },
                onBack = { stack = stack.dropLast() },
            )

        val values = HashMap<String, Float>()

        composeRule.setContent {
            animation(stack, Modifier) {
                val value by transition.animateFloat()
                values[it.configuration] = value
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0.1F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.2F))
        composeRule.waitForIdle()
        backDispatcher.progressPredictiveBack(BackEvent(progress = 0.3F))
        composeRule.waitForIdle()

        assertEquals(0.3F, values["1"])
        assertEquals(0.7F, values["2"])
    }

    private fun DefaultStackAnimation(
        predictiveBackAnimatable: (initialBackEvent: BackEvent) -> PredictiveBackAnimatable? = ::TestAnimatable,
        animator: StackAnimator? = null,
        onBack: () -> Unit,
    ): DefaultStackAnimation<String, String> =
        DefaultStackAnimation(
            disableInputDuringAnimation = false,
            predictiveBackParams = {
                PredictiveBackParams(
                    backHandler = backDispatcher,
                    onBack = onBack,
                    animatable = predictiveBackAnimatable,
                )
            },
            selector = { _, _, _ -> animator },
        )

    private fun stack(configs: List<String>): ChildStack<String, String> =
        ChildStack(
            active = child(configs.last()),
            backStack = configs.dropLast(1).map(::child),
        )

    private fun stack(vararg configs: String): ChildStack<String, String> =
        stack(configs.asList())

    private fun child(config: String): Child.Created<String, String> =
        Child.Created(configuration = config, instance = config)

    private companion object {
        private const val TEST_TAG_PREFIX = "TestTag"
        private const val TEST_TAG_PREFIX_ENTER = TEST_TAG_PREFIX + "Enter"
        private const val TEST_TAG_PREFIX_EXIT = TEST_TAG_PREFIX + "Exit"

        private fun enterTestTag(progress: Float): String =
            testTag(prefix = TEST_TAG_PREFIX_ENTER, progress = progress)

        private fun exitTestTag(progress: Float): String =
            testTag(prefix = TEST_TAG_PREFIX_EXIT, progress = progress)

        private fun testTag(prefix: String, progress: Float): String =
            "$prefix{progress=$progress}"
    }

    private class TestAnimatable(
        initialBackEvent: BackEvent,
    ) : PredictiveBackAnimatable {
        private var progress by mutableStateOf(initialBackEvent.progress)

        override val exitModifier: Modifier get() = Modifier.testTag(exitTestTag(progress = progress))
        override val enterModifier: Modifier get() = Modifier.testTag(enterTestTag(progress = progress))

        override suspend fun animate(event: BackEvent) {
            progress = event.progress
        }

        override suspend fun finish() {
            progress = 1F
        }

        override suspend fun cancel() {
            progress = 0F
        }
    }
}
