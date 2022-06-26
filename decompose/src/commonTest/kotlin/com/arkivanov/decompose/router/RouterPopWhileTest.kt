package com.arkivanov.decompose.router

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPopWhileTest {

    @Test
    fun WHEN_popWhile_THEN_popped() {
        val router = TestRouter(listOf(1, 2, 3, 4))

        router.popWhile { it != 2 }

        assertEquals(listOf(1, 2), router.stack)
    }

    @Test
    fun WHEN_popWhile_THEN_onComplete_called() {
        val router = TestRouter(listOf(1, 2, 3, 4))
        var isCalled = false

        router.popWhile(predicate = { it != 2 }, onComplete = { isCalled = true })

        assertTrue(isCalled)
    }
}
