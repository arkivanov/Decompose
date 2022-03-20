package com.arkivanov.decompose.extensions.compose.jetpack

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
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.ChildAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.childAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.emptyChildAnimation
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.fade
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.plus
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.scale
import com.arkivanov.decompose.extensions.compose.jetpack.animation.child.slide
import com.arkivanov.decompose.router.RouterState
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import java.io.Serializable

@Suppress("TestFunctionName")
@RunWith(Parameterized::class)
class ChildrenTest(
    private val animation: ChildAnimation<Config, Config>
) {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_active_child_and_no_back_stack_THEN_active_child_displayed() {
        val state = mutableStateOf(routerState(activeConfig = Config.A))

        setContent(state)

        composeRule.onNodeWithText(text = "ChildA", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_A_displayed_WHEN_push_child_B_THEN_child_B_displayed() {
        val state = mutableStateOf(routerState(activeConfig = Config.A))
        setContent(state)

        state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

        composeRule.onNodeWithText(text = "ChildB", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_child_A_displayed() {
        val state = mutableStateOf(routerState(activeConfig = Config.A))
        setContent(state)
        state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

        state.setValueOnIdle(routerState(activeConfig = Config.A))

        composeRule.onNodeWithText(text = "ChildA", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_state_restored_for_child_A() {
        val state = mutableStateOf(routerState(activeConfig = Config.A))
        setContent(state)
        composeRule.onNodeWithText(text = "ChildA=0").performClick()
        state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

        state.setValueOnIdle(routerState(activeConfig = Config.A))

        composeRule.onNodeWithText(text = "ChildA=1").assertExists()
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_and_push_child_B_THEN_state_not_restored_for_child_B() {
        val state = mutableStateOf(routerState(activeConfig = Config.A))
        setContent(state)
        state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))
        composeRule.onNodeWithText(text = "ChildB=0").performClick()

        state.setValueOnIdle(routerState(activeConfig = Config.A))
        state.setValueOnIdle(routerState(activeConfig = Config.B, backstack = listOf(Config.A)))

        composeRule.onNodeWithText(text = "ChildB=0").assertExists()
    }

    private fun setContent(state: State<RouterState<Config, Config>>) {
        composeRule.setContent {
            Children(routerState = state.value, animation = animation) { child ->
                when (child.configuration) {
                    Config.A -> Child(name = "A")
                    Config.B -> Child(name = "B")
                }.let {}
            }
        }

        runOnIdle {}
    }

    private fun routerState(activeConfig: Config, backstack: List<Config> = emptyList()): RouterState<Config, Config> =
        RouterState(
            activeChild = Child.Created(configuration = activeConfig, instance = activeConfig),
            backStack = backstack.map { Child.Destroyed(configuration = it) }
        )

    @Composable
    private fun Child(name: String) {
        var count by rememberSaveable { mutableStateOf(0) }

        BasicText(
            text = "Child$name=$count",
            modifier = Modifier.clickable { count++ }
        )
    }

    private fun <T> MutableState<T>.setValueOnIdle(value: T) {
        runOnIdle { this.value = value }
        runOnIdle {}
    }

    private fun runOnIdle(block: () -> Unit) {
        composeRule.runOnIdle(block)
    }

    companion object {
        @Parameterized.Parameters
        @JvmStatic
        fun parameters(): List<Array<out Any>> =
            getParameters().map { arrayOf(it) }

        private fun getParameters(): List<ChildAnimation<Config, Config>> =
            listOf(
                emptyChildAnimation(),
                childAnimation(scale()),
                childAnimation(fade()),
                childAnimation(slide()),
                childAnimation(scale() + fade() + slide()),
            )
    }

    // Can be enum, workaround https://issuetracker.google.com/issues/195185633
    sealed class Config : Serializable {
        object A : Config()
        object B : Config()
    }
}
