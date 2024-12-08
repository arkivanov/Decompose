package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.DelicateDecomposeApi
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@OptIn(DelicateDecomposeApi::class)
@Suppress("TestFunctionName")
class RouterPushTest {

    @Test
    fun WHEN_push_THEN_pushed() {
        val navigator = TestStackNavigator(listOf(1, 2))

        navigator.push(3)

        assertEquals(listOf(1, 2, 3), navigator.configurations)
    }

    @Test
    fun WHEN_push_THEN_onComplete_called() {
        val navigator = TestStackNavigator(listOf(1, 2))
        var isCalled = false

        navigator.push(3) { isCalled = true }

        assertTrue(isCalled)
    }
}
