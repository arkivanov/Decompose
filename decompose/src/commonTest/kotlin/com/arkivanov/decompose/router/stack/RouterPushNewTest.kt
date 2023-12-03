package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class RouterPushNewTest {

    @Test
    fun GIVEN_configuration_not_present_WHEN_pushNew_THEN_pushed() {
        val navigator = TestStackNavigator(listOf(1, 2))

        navigator.pushNew(3)

        assertEquals(listOf(1, 2, 3), navigator.configurations)
    }

    @Test
    fun GIVEN_configuration_present_on_top_WHEN_pushNew_THEN_not_pushed() {
        val navigator = TestStackNavigator(listOf(1, 2))

        navigator.pushNew(2)

        assertEquals(listOf(1, 2), navigator.configurations)
    }

    @Test
    fun GIVEN_configuration_not_present_WHEN_pushNew_THEN_onComplete_success() {
        val navigator = TestStackNavigator(listOf(1, 2))
        var result: Boolean? = null

        navigator.pushNew(3) { result = it }

        assertEquals(true, result)
    }

    @Test
    fun GIVEN_configuration_present_on_top_WHEN_pushNew_THEN_onComplete_not_success() {
        val navigator = TestStackNavigator(listOf(1, 2))
        var result: Boolean? = null

        navigator.pushNew(2) { result = it }

        assertEquals(false, result)
    }
}
