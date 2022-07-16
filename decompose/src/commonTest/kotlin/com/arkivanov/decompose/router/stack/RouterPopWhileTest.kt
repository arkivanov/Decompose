package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPopWhileTest {

    @Test
    fun WHEN_popWhile_THEN_popped() {
        val navigator = TestStackNavigator(listOf(1, 2, 3, 4))

        navigator.popWhile { it != 2 }

        assertEquals(listOf(1, 2), navigator.configurations)
    }

    @Test
    fun WHEN_popWhile_THEN_onComplete_called() {
        val navigator = TestStackNavigator(listOf(1, 2, 3, 4))
        var isCalled = false

        navigator.popWhile(predicate = { it != 2 }, onComplete = { isCalled = true })

        assertTrue(isCalled)
    }
}
