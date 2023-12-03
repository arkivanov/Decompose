package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.createComposeRule
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.Direction.ENTER_BACK
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.Direction.ENTER_FRONT
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.Direction.EXIT_BACK
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.Direction.EXIT_FRONT
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
        val configs = HashSet<String>()
        val directions = HashSet<Direction>()

        val animator =
            StackAnimator { direction, isInitial, onFinished, content ->
                directions += direction
                content(Modifier)

                DisposableEffect(direction, isInitial) {
                    onFinished()
                    onDispose {}
                }
            }

        val animation =
            SimpleStackAnimation<String, String>(
                disableInputDuringAnimation = false,
                selector = {
                    configs += it.configuration
                    animator
                },
            )

        var stack by mutableStateOf(stack(params.from))

        composeRule.setContent {
            animation(stack, Modifier) {}
        }

        composeRule.runOnIdle {}
        directions.clear()
        stack = stack(params.to)
        composeRule.runOnIdle {}

        assertEquals(params.expected.map { it.first }.toSet(), configs)
        assertEquals(params.expected.map { it.second }.toSet(), directions)
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
                Params(from = listOf("a", "b", "c"), to = listOf("a", "b"), expected = setOf("c" to EXIT_FRONT, "b" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c"), to = listOf("a"), expected = setOf("c" to EXIT_FRONT, "a" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c", "d"), to = listOf("a", "b"), expected = setOf("d" to EXIT_FRONT, "b" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c", "d"), to = listOf("e", "b"), expected = setOf("d" to EXIT_FRONT, "b" to ENTER_BACK)),
                Params(from = listOf("a", "b", "c"), to = listOf("d", "a"), expected = setOf("c" to EXIT_FRONT, "a" to ENTER_BACK)),
                Params(from = listOf("a"), to = listOf("a", "b"), expected = setOf("b" to ENTER_FRONT, "a" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("a", "b", "c"), expected = setOf("c" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("a", "c"), expected = setOf("c" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("c", "d"), expected = setOf("d" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a"), to = listOf("b"), expected = setOf("b" to ENTER_FRONT, "a" to EXIT_BACK)),
                Params(from = listOf("a"), to = listOf("b", "c"), expected = setOf("c" to ENTER_FRONT, "a" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("a", "c", "d"), expected = setOf("d" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("c"), expected = setOf("c" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b", "c"), to = listOf("a", "d"), expected = setOf("d" to ENTER_FRONT, "c" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("c", "d"), expected = setOf("d" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("b", "a"), expected = setOf("a" to ENTER_FRONT, "b" to EXIT_BACK)),
                Params(from = listOf("a", "b"), to = listOf("b"), expected = setOf("b" to ENTER_FRONT)),
                Params(from = listOf("a", "b"), to = listOf("c", "b"), expected = setOf("b" to ENTER_FRONT)),
                Params(from = listOf("b", "c"), to = listOf("a", "b", "c"), expected = setOf("c" to ENTER_FRONT)),
            )
    }

    class Params(
        val from: List<String>,
        val to: List<String>,
        val expected: Set<Pair<String, Direction>>,
    )
}
