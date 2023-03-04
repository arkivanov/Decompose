package com.arkivanov.decompose.extensions.compose.jetbrains.stack

import androidx.compose.foundation.clickable
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.slide
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation
import com.arkivanov.decompose.router.stack.ChildStack
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.runBlocking
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized

@Suppress("TestFunctionName")
@RunWith(Parameterized::class)
class ChildrenTest(
    private val animation: StackAnimation<Config, Config>?,
) {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_active_child_and_no_back_stack_THEN_active_child_displayed() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))

            setContent(state)

            composeRule.onNodeWithText(text = "ChildA", substring = true).assertExists()
        }
    }

    @Test
    fun GIVEN_child_A_displayed_WHEN_push_child_B_THEN_child_B_displayed() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))
            setContent(state)

            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

            composeRule.onNodeWithText(text = "ChildB", substring = true).assertExists()
        }
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_child_A_displayed() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))
            setContent(state)
            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

            state.setValueOnIdle(routerState(activeConfig = Config.A))

            composeRule.onNodeWithText(text = "ChildA", substring = true).assertExists()
        }
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_state_restored_for_child_A() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))
            setContent(state)
            composeRule.onNodeWithText(text = "ChildA=0").performClick()
            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

            state.setValueOnIdle(routerState(activeConfig = Config.A))

            composeRule.onNodeWithText(text = "ChildA=1").assertExists()
        }
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_and_push_child_B_THEN_state_not_restored_for_child_B() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))
            setContent(state)

            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))
            composeRule.onNodeWithText(text = "ChildB=0").performClick()

            state.setValueOnIdle(routerState(activeConfig = Config.A))
            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

            composeRule.onNodeWithText(text = "ChildB=0").assertExists()
        }
    }

    @Test
    fun GIVEN_child_A_displayed_WHEN_push_child_B_THEN_child_A_disposed() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))
            setContent(state)

            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

            composeRule.onNodeWithText(text = "ChildA", substring = true).assertDoesNotExist()
        }
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_child_B_disposed() {
        runBlocking(Dispatchers.Main) {
            val state = mutableStateOf(routerState(activeConfig = Config.A))
            setContent(state)
            state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

            state.setValueOnIdle(routerState(activeConfig = Config.A))

            composeRule.onNodeWithText(text = "ChildB", substring = true).assertDoesNotExist()
        }
    }

    private suspend fun setContent(state: State<ChildStack<Config, Config>>) {
        composeRule.setContent {
            Children(stack = state.value, animation = animation) { child ->
                when (child.configuration) {
                    Config.A -> Child(name = "A")
                    Config.B -> Child(name = "B")
                }.let {}
            }
        }

        runOnIdle {}
    }

    private fun routerState(activeConfig: Config, backstack: List<Config> = emptyList()): ChildStack<Config, Config> =
        ChildStack(
            active = Child.Created(configuration = activeConfig, instance = activeConfig),
            backStack = backstack.map { Child.Destroyed(configuration = it) },
        )

    @Composable
    private fun Child(name: String) {
        var count by rememberSaveable { mutableStateOf(0) }

        BasicText(
            text = "Child$name=$count",
            modifier = Modifier.clickable { count++ }
        )
    }

    private suspend fun <T> MutableState<T>.setValueOnIdle(value: T) {
        runOnIdle { this.value = value }
        runOnIdle {}
    }

    private suspend fun runOnIdle(block: () -> Unit) {
        composeRule.awaitIdle()
        block()
    }

    companion object {
        @Parameterized.Parameters
        @JvmStatic
        fun parameters(): List<Array<out Any?>> =
            getParameters().map { arrayOf(it) }

        private fun getParameters(): List<StackAnimation<Config, Config>?> =
            listOf(
                null,
                stackAnimation { _, _, _ -> null },
                stackAnimation { _, _, _ -> scale() },
                stackAnimation { _, _, _ -> fade() },
                stackAnimation { _, _, _ -> slide() },
                stackAnimation { _, _, _ -> scale() + fade() + slide() },
                stackAnimation { _ -> null },
                stackAnimation { _ -> scale() },
                stackAnimation { _ -> fade() },
                stackAnimation { _ -> slide() },
                stackAnimation { _ -> scale() + fade() + slide() },
            )
    }

    // Can be enum, workaround https://issuetracker.google.com/issues/195185633
    sealed class Config {
        object A : Config()
        object B : Config()
    }
}
