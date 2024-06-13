package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPopToFirstTest {

    @Test
    fun GIVEN_stack_size_3_WHEN_popToFirst_THEN_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))

        navigator.popToFirst()

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_3_WHEN_popToFirst_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))
        var isSuccess = false

        navigator.popToFirst { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_popToFirst_THEN_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))

        navigator.popToFirst()

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_popToFirst_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))
        var isSuccess = false

        navigator.popToFirst { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_popToFirst_THEN_not_popped() {
        val navigator = TestStackNavigator(listOf(Config.A))

        navigator.popToFirst()

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_popToFirst_THEN_onComplete_not_success() {
        val navigator = TestStackNavigator(listOf(Config.A))
        var isSuccess: Boolean? = null

        navigator.popToFirst { isSuccess = it }

        assertEquals(false, isSuccess)
    }

    private sealed class Config {
        data object A : Config()
        data object B : Config()
        data object C : Config()
    }
}
