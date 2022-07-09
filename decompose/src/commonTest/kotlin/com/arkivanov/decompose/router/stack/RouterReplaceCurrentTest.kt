package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterReplaceCurrentTest {

    @Test
    fun WHEN_replaceCurrent_THEN_last_configuration_replaced() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))

        navigator.replaceCurrent(4)

        assertEquals(listOf(1, 2, 4), navigator.configurations)
    }

    @Test
    fun WHEN_replaceCurrent_THEN_onComplete_called() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))
        var isCalled = false

        navigator.replaceCurrent(4) { isCalled = true }

        assertTrue(isCalled)
    }
}
