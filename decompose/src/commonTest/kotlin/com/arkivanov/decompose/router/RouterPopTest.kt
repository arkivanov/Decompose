package com.arkivanov.decompose.router

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPopTest {

    @Test
    fun GIVEN_stack_size_2_WHEN_pop_THEN_popped() {
        val router = TestRouter(listOf(Config.A, Config.B))

        router.pop()

        assertEquals(listOf(Config.A), router.stack)
    }

    @Test
    fun GIVEN_stack_size_2_WHEN_pop_THEN_onComplete_success() {
        val router = TestRouter(listOf(Config.A, Config.B))
        var isSuccess = false

        router.pop { isSuccess = it }

        assertTrue(isSuccess)
    }

    @Test
    fun GIVEN_stack_size_1_WHEN_pop_THEN_not_popped() {
        val router = TestRouter(listOf(Config.A))

        router.pop()

        assertEquals(listOf(Config.A), router.stack)
    }


    @Test
    fun GIVEN_stack_size_1_WHEN_pop_THEN_onComplete_not_success() {
        val router = TestRouter(listOf(Config.A))
        var isSuccess = true

        router.pop { isSuccess = it }

        assertFalse(isSuccess)
    }

    private sealed class Config {
        object A : Config()
        object B : Config()
    }
}
