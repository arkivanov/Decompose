package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterPushTest {

    @Test
    fun WHEN_push_THEN_pushed() {
        val router = TestRouter(listOf(1, 2))

        router.push(3)

        assertEquals(listOf(1, 2, 3), router.configs)
    }

    @Test
    fun WHEN_push_THEN_onComplete_called() {
        val router = TestRouter(listOf(1, 2))
        var isCalled = false

        router.push(3) { isCalled = true }

        assertTrue(isCalled)
    }
}
