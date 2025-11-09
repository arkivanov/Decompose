package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class RouterPushToFrontTest {

    @Test
    fun WHEN_does_not_contain_THEN_new_configuration_pushed() {
        val navigator = TestStackNavigator(listOf(1, 2))

        navigator.pushToFront(3)

        assertEquals(listOf(1, 2, 3), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_same_value_at_start_THEN_existing_configuration_moved_to_end() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))

        navigator.pushToFront(1)

        assertEquals(listOf(2, 3, 1), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_same_value_in_the_middle_THEN_existing_configuration_moved_to_end() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))

        navigator.pushToFront(2)

        assertEquals(listOf(1, 3, 2), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_same_value_at_the_end_THEN_not_changed() {
        val navigator = TestStackNavigator(listOf(1, 2, 3))

        navigator.pushToFront(3)

        assertEquals(listOf(1, 2, 3), navigator.configurations)
    }

    @Test
    fun WHEN_exists_duplicated_at_start_and_middle_THEN_middle_configuration_moved_to_end() {
        val navigator = TestStackNavigator(listOf(1, 1, 3))

        navigator.pushToFront(1)

        assertEquals(listOf(1, 3, 1), navigator.configurations)
    }

    @Test
    fun WHEN_exists_duplicated_at_start_and_end_THEN_not_changed() {
        val navigator = TestStackNavigator(listOf(1, 2, 1))

        navigator.pushToFront(1)

        assertEquals(listOf(1, 2, 1), navigator.configurations)
    }
    @Test
    fun WHEN_exists_duplicated_in_the_middle_and_end_THEN_not_changed() {
        val navigator = TestStackNavigator(listOf(1, 2, 2))

        navigator.pushToFront(2)

        assertEquals(listOf(1, 2, 2), navigator.configurations)
    }
}
