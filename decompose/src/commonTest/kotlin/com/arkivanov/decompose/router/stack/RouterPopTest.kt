package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPopTest {

    @Test
    fun GIVEN_stack_size_2_WHEN_pop_THEN_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))

        navigator.pop()

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_pop_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))
        var isSuccess = false

        navigator.pop { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_pop_THEN_not_popped() {
        val navigator = TestStackNavigator(listOf(Config.A))

        navigator.pop()

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_pop_THEN_onComplete_not_success() {
        val navigator = TestStackNavigator(listOf(Config.A))
        var isSuccess = true

        navigator.pop { isSuccess = it }

        assertFalse(isSuccess)
    }

    private sealed class Config {
        data object A : Config()
        data object B : Config()
    }
}
