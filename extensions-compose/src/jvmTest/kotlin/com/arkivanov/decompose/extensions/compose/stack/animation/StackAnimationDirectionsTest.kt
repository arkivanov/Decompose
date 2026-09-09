package com.arkivanov.decompose.extensions.compose.stack.animation

import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.createComposeRule
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction.ENTER_BACK
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction.ENTER_FRONT
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction.EXIT_BACK
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction.EXIT_FRONT
import com.arkivanov.decompose.router.stack.ChildStack
import org.junit.Rule
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import kotlin.test.Test
import kotlin.test.assertEquals

@RunWith(Parameterized::class)
class StackAnimationDirectionsTest(
    private val params: Params,
) {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun test() {
        val results = HashMap<String, Direction>()

        val animation =
            SimpleStackAnimation<String, String>(
                disableInputDuringAnimation = false,
                selector = { child ->
                    StackAnimator { direction, isInitial, onFinished, content ->
                        results[child.configuration] = direction
                        content(Modifier)

                        DisposableEffect(direction, isInitial) {
                            onFinished()
                            onDispose {}
                        }
                    }
                },
            )

        var stack by mutableStateOf(stack(params.from))

        composeRule.setContent {
            animation(stack, Modifier) {}
        }

        composeRule.runOnIdle {}
        results.clear()
        stack = stack(params.to)
        composeRule.runOnIdle {}

        assertEquals(params.expected, results)
    }

    private fun stack(configs: List<String>): ChildStack<String, String> =
        ChildStack(
            active = child(configs.last()),
            backStack = configs.dropLast(1).map(::child),
        )

    private fun child(config: String): Child.Created<String, String> =
        Child.Created(configuration = config, instance = config)

    companion object {
        @Parameterized.Parameters
        @JvmStatic
        fun parameters(): List<Array<out Any?>> =
            getParameters().map { arrayOf(it) }

        private fun getParameters(): List<Params> =
            listOf(
                Params(from = listOf("a", "b", "c"), to = listOf("a", "b"), expected = mapOf("c" to EXIT_FRONT, "b" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c"), to = listOf("a"), expected = mapOf("c" to EXIT_FRONT, "a" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c", "d"), to = listOf("a", "b"), expected = mapOf("d" to EXIT_FRONT, "b" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c", "d"), to = listOf("e", "b"), expected = mapOf("d" to EXIT_FRONT, "b" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c"), to = listOf("d", "a"), expected = mapOf("c" to EXIT_FRONT, "a" to ENTER_BACK)),
                Params(from = listOf("a"), to = listOf("a", "b"), expected = mapOf("b" to ENTER_FRONT, "a" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("a", "b", "c"), expected = mapOf("c" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("a", "c"), expected = mapOf("c" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("c", "d"), expected = mapOf("d" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a"), to = listOf("b"), expected = mapOf("b" to ENTER_FRONT, "a" to EXIT_BACK)),
                Params(from = listOf("a"), to = listOf("b", "c"), expected = mapOf("c" to ENTER_FRONT, "a" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("a", "c", "d"), expected = mapOf("d" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("c"), expected = mapOf("c" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b", "c"), to = listOf("a", "d"), expected = mapOf("d" to ENTER_FRONT, "c" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("c", "d"), expected = mapOf("d" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("b", "a"), expected = mapOf("a" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("b"), expected = emptyMap()),
                Params(from = listOf("a", "b"), to = listOf("c", "b"), expected = emptyMap()),
                Params(from = listOf("b", "c"), to = listOf("a", "b", "c"), expected = emptyMap()),
            )
    }

    class Params(
        val from: List<String>,
        val to: List<String>,
        val expected: Map<String, Direction>,
    )
}
