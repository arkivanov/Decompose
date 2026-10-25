package com.arkivanov.decompose.extensions.compose.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.test.junit4.v2.createComposeRule
import androidx.compose.ui.window.WindowState
import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.testutils.testLifecycleRegistry
import org.junit.Rule
import org.junit.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class LifecycleControllerTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_initial_isMinimized_false_THEN_state_RESUMED() {
        val lifecycle = testLifecycleRegistry()
        val windowState = WindowState(isMinimized = false)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        assertEquals(Lifecycle.State.RESUMED, lifecycle.currentState)
    }

    @Test
    fun WHEN_initial_isMinimized_true_THEN_state_CREATED() {
        val lifecycle = testLifecycleRegistry()
        val windowState = WindowState(isMinimized = true)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_isMinimized_false_WHEN_isMinimized_changed_to_true_THEN_state_CREATED() {
        val lifecycle = testLifecycleRegistry()
        val windowState = WindowState(isMinimized = false)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        windowState.isMinimized = true
        composeRule.runOnIdle {}

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_isMinimized_true_WHEN_isMinimized_changed_to_false_THEN_state_RESUMED() {
        val lifecycle = testLifecycleRegistry()
        val windowState = WindowState(isMinimized = true)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        windowState.isMinimized = false
        composeRule.runOnIdle {}

        assertEquals(Lifecycle.State.RESUMED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_isMinimized_false_WHEN_disposed_THEN_state_DESTROYED() {
        val lifecycle = testLifecycleRegistry()
        val windowState = WindowState(isMinimized = false)
        var dispose by mutableStateOf(false)

        setContent {
            if (!dispose) {
                LifecycleController(lifecycle, windowState)
            }
        }

        dispose = true
        composeRule.runOnIdle {}

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    private fun setContent(block: @Composable () -> Unit) {
        composeRule.setContent(block)
        composeRule.runOnIdle {}
    }
}
