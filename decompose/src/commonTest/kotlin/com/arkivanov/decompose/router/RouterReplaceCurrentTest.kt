package com.arkivanov.decompose.router

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterReplaceCurrentTest {

    @Test
    fun WHEN_replaceCurrent_THEN_last_configuration_replaced() {
        val router = TestRouter(listOf(1, 2, 3))

        router.replaceCurrent(4)

        assertEquals(listOf(1, 2, 4), router.stack)
    }

    @Test
    fun WHEN_replaceCurrent_THEN_onComplete_called() {
        val router = TestRouter(listOf(1, 2, 3))
        var isCalled = false

        router.replaceCurrent(4) { isCalled = true }

        assertTrue(isCalled)
    }
}
