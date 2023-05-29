package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPopToTest {

    @Test
    fun GIVEN_stack_size_3_WHEN_popTo_0_THEN_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))

        navigator.popTo(index = 0)

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_3_WHEN_popTo_0_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))
        var isSuccess = false

        navigator.popTo(index = 0) { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_3_WHEN_popTo_1_THEN_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))

        navigator.popTo(index = 1)

        assertEquals(listOf(Config.A, Config.B), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_3_WHEN_popTo_1_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))
        var isSuccess = false

        navigator.popTo(index = 0) { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_3_WHEN_popTo_2_THEN_not_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))

        navigator.popTo(index = 2)

        assertEquals(listOf(Config.A, Config.B, Config.C), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_3_WHEN_popTo_2_THEN_onComplete_not_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C))
        var isSuccess: Boolean? = null

        navigator.popTo(index = 2) { isSuccess = it }

        assertEquals(false, isSuccess)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_popTo_0_THEN_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))

        navigator.popTo(index = 0)

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_popTo_0_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))
        var isSuccess = false

        navigator.popTo(index = 0) { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_popTo_1_THEN_not_popped() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))

        navigator.popTo(index = 1)

        assertEquals(listOf(Config.A, Config.B), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_popTo_1_THEN_onComplete_not_success() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))
        var isSuccess: Boolean? = null

        navigator.popTo(index = 1) { isSuccess = it }

        assertEquals(false, isSuccess)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_popTo_0_THEN_not_popped() {
        val navigator = TestStackNavigator(listOf(Config.A))

        navigator.popTo(index = 0)

        assertEquals(listOf(Config.A), navigator.configurations)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_popTo_0_THEN_onComplete_not_success() {
        val navigator = TestStackNavigator(listOf(Config.A))
        var isSuccess: Boolean? = null

        navigator.pop { isSuccess = it }

        assertEquals(false, isSuccess)
    }

    private sealed class Config {
        object A : Config()
        object B : Config()
        object C : Config()
    }
}
