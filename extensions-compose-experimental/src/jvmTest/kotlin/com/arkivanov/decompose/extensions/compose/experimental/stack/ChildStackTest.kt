package com.arkivanov.decompose.extensions.compose.experimental.stack

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
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimationScope
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.slide
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackDispatcher
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import kotlin.test.assertSame

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
@RunWith(Parameterized::class)
class ChildStackTest(
    private val animation: StackAnimation<Config, Any>?,
) {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_active_child_and_no_back_stack_THEN_active_child_displayed() {
        val state = mutableStateOf(routerState(Config.A))

        setContent(state)

        composeRule.onNodeWithText(text = "ChildA", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_A_displayed_WHEN_push_child_B_THEN_child_B_displayed() {
        val state = mutableStateOf(routerState(Config.A))
        setContent(state)

        state.setValueOnIdle(routerState(Config.A, Config.B))

        composeRule.onNodeWithText(text = "ChildB", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_A1_displayed_WHEN_push_child_A2_THEN_child_A2_displayed() {
        val state = mutableStateOf(routerState("A1" to Config.A))
        setContent(state)

        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))

        composeRule.onNodeWithText(text = "ChildA2", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_child_A_displayed() {
        val state = mutableStateOf(routerState(Config.A))
        setContent(state)
        state.setValueOnIdle(routerState(Config.A, Config.B))

        state.setValueOnIdle(routerState(Config.A))

        composeRule.onNodeWithText(text = "ChildA", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_A2_displayed_and_child_A1_in_back_stack_WHEN_pop_child_A2_THEN_child_A1_displayed() {
        val state = mutableStateOf(routerState("A1" to Config.A))
        setContent(state)
        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))


        state.setValueOnIdle(routerState("A1" to Config.A))

        composeRule.onNodeWithText(text = "ChildA1", substring = true).assertExists()
    }

    @Test
    fun GIVEN_child_displayed_WHEN_new_child_instance_with_the_same_key_THEN_new_child_instance_displayed() {
        val state = mutableStateOf(routerState(Child.Created(configuration = Config.A, instance = Any(), key = "A")))
        var lastInstance: Any? = null
        setContent(state) { lastInstance = it.instance }

        val instance2 = Any()
        state.setValueOnIdle(routerState(Child.Created(configuration = Config.A, instance = instance2, key = "A")))

        assertSame(instance2, lastInstance)
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_state_restored_for_child_A() {
        val state = mutableStateOf(routerState(Config.A))
        setContent(state)
        composeRule.onNodeWithText(text = "ChildA=0").performClick()
        state.setValueOnIdle(routerState(Config.A, Config.B))

        state.setValueOnIdle(routerState(Config.A))

        composeRule.onNodeWithText(text = "ChildA=1").assertExists()
    }

    @Test
    fun GIVEN_child_A2_displayed_and_child_A1_in_back_stack_WHEN_pop_child_A2_THEN_state_restored_for_child_A1() {
        val state = mutableStateOf(routerState("A1" to Config.A))
        setContent(state)
        composeRule.onNodeWithText(text = "ChildA1=0").performClick()
        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))

        state.setValueOnIdle(routerState("A1" to Config.A))

        composeRule.onNodeWithText(text = "ChildA1=1").assertExists()
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_and_push_child_B_THEN_state_not_restored_for_child_B() {
        val state = mutableStateOf(routerState(Config.A))
        setContent(state)

        state.setValueOnIdle(routerState(Config.A, Config.B))
        composeRule.onNodeWithText(text = "ChildB=0").performClick()

        state.setValueOnIdle(routerState(Config.A))
        state.setValueOnIdle(routerState(Config.A, Config.B))

        composeRule.onNodeWithText(text = "ChildB=0").assertExists()
    }

    @Test
    fun GIVEN_child_A2_displayed_and_child_A1_in_back_stack_WHEN_pop_child_A2_and_push_child_A2_THEN_state_not_restored_for_child_A2() {
        val state = mutableStateOf(routerState("A1" to Config.A))
        setContent(state)

        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))
        composeRule.onNodeWithText(text = "ChildA2=0").performClick()

        state.setValueOnIdle(routerState("A1" to Config.A))
        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))

        composeRule.onNodeWithText(text = "ChildA2=0").assertExists()
    }

    @Test
    fun GIVEN_child_A_displayed_WHEN_push_child_B_THEN_child_A_disposed() {
        val state = mutableStateOf(routerState(Config.A))
        setContent(state)

        state.setValueOnIdle(routerState(Config.A, Config.B))

        composeRule.onNodeWithText(text = "ChildA", substring = true).assertDoesNotExist()
    }

    @Test
    fun GIVEN_child_A1_displayed_WHEN_push_child_A2_THEN_child_A1_disposed() {
        val state = mutableStateOf(routerState("A1" to Config.A))
        setContent(state)

        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))

        composeRule.onNodeWithText(text = "ChildA1", substring = true).assertDoesNotExist()
    }

    @Test
    fun GIVEN_child_B_displayed_and_child_A_in_back_stack_WHEN_pop_child_B_THEN_child_B_disposed() {
        val state = mutableStateOf(routerState(Config.A))
        setContent(state)
        state.setValueOnIdle(routerState(Config.A, Config.B))

        state.setValueOnIdle(routerState(Config.A))

        composeRule.onNodeWithText(text = "ChildB", substring = true).assertDoesNotExist()
    }

    @Test
    fun GIVEN_child_A2_displayed_and_child_A1_in_back_stack_WHEN_pop_child_A2_THEN_child_A2_disposed() {
        val state = mutableStateOf(routerState("A1" to Config.A))
        setContent(state)
        state.setValueOnIdle(routerState("A1" to Config.A, "A2" to Config.A))

        state.setValueOnIdle(routerState("A1" to Config.A))

        composeRule.onNodeWithText(text = "ChildA2", substring = true).assertDoesNotExist()
    }

    private fun setContent(
        state: State<ChildStack<Config, Any>>,
        content: @Composable StackAnimationScope.(Child.Created<Config, Any>) -> Unit = {
            Child(name = it.key.toString())
        },
    ) {
        composeRule.setContent {
            ChildStack(stack = state.value, animation = animation) { child ->
                content(child)
            }
        }

        composeRule.runOnIdle {}
    }

    private fun routerState(vararg stack: Config): ChildStack<Config, Config> =
        ChildStack(
            active = stack.last().toChild(),
            backStack = stack.dropLast(1).map { it.toChild() },
        )

    private fun Config.toChild(): Child.Created<Config, Config> =
        Child.Created(configuration = this, instance = this)

    private fun routerState(vararg stack: Pair<Any, Config>): ChildStack<Config, Config> =
        ChildStack(
            active = stack.last().toChild(),
            backStack = stack.dropLast(1).map { it.toChild() },
        )

    private fun routerState(vararg stack: Child.Created<Config, Any>): ChildStack<Config, Any> =
        ChildStack(
            active = stack.last(),
            backStack = stack.dropLast(1),
        )

    private fun Pair<Any, Config>.toChild(): Child.Created<Config, Config> =
        Child.Created(configuration = second, instance = second, key = first)

    @Composable
    private fun Child(name: String) {
        var count by rememberSaveable { mutableStateOf(0) }

        BasicText(
            text = "Child$name=$count",
            modifier = Modifier.clickable { count++ }
        )
    }

    private fun <T> MutableState<T>.setValueOnIdle(value: T) {
        composeRule.runOnIdle { this.value = value }
        composeRule.runOnIdle {}
    }

    companion object {
        @Parameterized.Parameters
        @JvmStatic
        fun parameters(): List<Array<out Any?>> =
            getParameters().map { arrayOf(it) }

        private fun getParameters(): List<StackAnimation<Config, Any>?> {
            val predictiveBackParams1 =
                PredictiveBackParams(
                    backHandler = BackDispatcher(),
                    onBack = {},
                )

            val predictiveBackParams2 =
                PredictiveBackParams(
                    backHandler = BackDispatcher(),
                    onBack = {},
                    animatable = ::materialPredictiveBackAnimatable,
                )

            return listOf(
                null,
                stackAnimation { _, _, _, _ -> null },
                stackAnimation { _, _, _, _ -> scale() },
                stackAnimation { _, _, _, _ -> fade() },
                stackAnimation { _, _, _, _ -> slide() },
                stackAnimation { _, _, _, _ -> scale() + fade() + slide() },
                stackAnimation(predictiveBackParams = { predictiveBackParams1 }) { _, _, _, _ -> null },
                stackAnimation(predictiveBackParams = { predictiveBackParams1 }) { _, _, _, _ -> scale() },
                stackAnimation(predictiveBackParams = { predictiveBackParams1 }) { _, _, _, _ -> fade() },
                stackAnimation(predictiveBackParams = { predictiveBackParams1 }) { _, _, _, _ -> slide() },
                stackAnimation(predictiveBackParams = { predictiveBackParams1 }) { _, _, _, _ -> scale() + fade() + slide() },
                stackAnimation(predictiveBackParams = { predictiveBackParams2 }) { _, _, _, _ -> null },
                stackAnimation(predictiveBackParams = { predictiveBackParams2 }) { _, _, _, _ -> scale() },
                stackAnimation(predictiveBackParams = { predictiveBackParams2 }) { _, _, _, _ -> fade() },
                stackAnimation(predictiveBackParams = { predictiveBackParams2 }) { _, _, _, _ -> slide() },
                stackAnimation(predictiveBackParams = { predictiveBackParams2 }) { _, _, _, _ -> scale() + fade() + slide() },
            )
        }
    }

    sealed class Config {
        data object A : Config()
        data object B : Config()
    }
}
