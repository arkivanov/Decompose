package com.arkivanov.decompose.extensions.compose.jetbrains.lifecycle

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.window.WindowState
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import org.junit.Rule
import org.junit.Test
import kotlin.test.assertEquals

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
class LifecycleControllerTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_initial_isMinimized_false_THEN_state_RESUMED() {
        val lifecycle = LifecycleRegistry()
        val windowState = WindowState(isMinimized = false)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        assertEquals(Lifecycle.State.RESUMED, lifecycle.state)
    }

    @Test
    fun WHEN_initial_isMinimized_true_THEN_state_CREATED() {
        val lifecycle = LifecycleRegistry()
        val windowState = WindowState(isMinimized = true)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        assertEquals(Lifecycle.State.CREATED, lifecycle.state)
    }

    @Test
    fun GIVEN_isMinimized_false_WHEN_isMinimized_changed_to_true_THEN_state_CREATED() {
        val lifecycle = LifecycleRegistry()
        val windowState = WindowState(isMinimized = false)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        windowState.isMinimized = true
        composeRule.runOnIdle {}

        assertEquals(Lifecycle.State.CREATED, lifecycle.state)
    }

    @Test
    fun GIVEN_isMinimized_true_WHEN_isMinimized_changed_to_false_THEN_state_RESUMED() {
        val lifecycle = LifecycleRegistry()
        val windowState = WindowState(isMinimized = true)

        setContent {
            LifecycleController(lifecycle, windowState)
        }

        windowState.isMinimized = false
        composeRule.runOnIdle {}

        assertEquals(Lifecycle.State.RESUMED, lifecycle.state)
    }

    @Test
    fun GIVEN_isMinimized_false_WHEN_disposed_THEN_state_DESTROYED() {
        val lifecycle = LifecycleRegistry()
        val windowState = WindowState(isMinimized = false)
        var dispose by mutableStateOf(false)

        setContent {
            if (!dispose) {
                LifecycleController(lifecycle, windowState)
            }
        }

        dispose = true
        composeRule.runOnIdle {}

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.state)
    }

    private fun setContent(block: @Composable () -> Unit) {
        composeRule.setContent(block)
        composeRule.runOnIdle {}
    }
}
