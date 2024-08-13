package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

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
    fun WHEN_startPredictiveBack_THEN_gesture_started() {
        var stack by mutableStateOf(stack("1", "2"))
        val animation = DefaultStackAnimation(onBack = { stack = stack.dropLast() })

        composeRule.setContent {
            animation(stack, Modifier) {
                Text(text = it.configuration)
            }
        }

        backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
        composeRule.waitForIdle()

        composeRule.onNodeWithText("1").assertTestTagToRootExists(enterTestTag(progress = 0F))
        composeRule.onNodeWithText("2").assertTestTagToRootExists(exitTestTag(progress = 0F))
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

    private fun DefaultStackAnimation(onBack: () -> Unit): DefaultStackAnimation<String, String> =
        DefaultStackAnimation(
            disableInputDuringAnimation = false,
            predictiveBackParams = PredictiveBackParams(
                backHandler = backDispatcher,
                onBack = onBack,
                animatableSelector = { initialBackEvent, _, _ ->
                    TestAnimatable(initialBackEvent)
                },
            ),
            selector = { _, _, _ -> null },
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
