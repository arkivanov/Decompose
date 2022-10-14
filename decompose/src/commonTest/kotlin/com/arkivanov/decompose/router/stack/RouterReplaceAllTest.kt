package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RouterReplaceAllTest {

    @Test
    fun WHEN_replaceAll_THEN_configurations_correctly_applied() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))

        navigator.replaceAll(3, 4, 5)

        assertEquals(listOf(3, 4, 5), navigator.configurations)
    }

    @Test
    fun WHEN_replace_all_THEN_onComplete_called() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))
        var isCalled = false

        navigator.replaceAll(4) { isCalled = true }

        assertTrue(isCalled)
    }
}
