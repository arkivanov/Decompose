package com.arkivanov.decompose.router

import com.arkivanov.decompose.bringToFront
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class RouterBringToFrontTest {

    @Test
    fun WHEN_does_not_contain_THEN_new_configuration_pushed() {
        val router = TestRouter(listOf(Config.A, Config.B))

        router.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), router.stack)
    }

    @Test
    fun WHEN_exists_with_same_value_at_start_THEN_existing_configuration_moved_to_end() {
        val router = TestRouter(listOf(Config.C(0), Config.A, Config.B))

        router.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), router.stack)
    }

    @Test
    fun WHEN_exists_with_same_value_in_the_middle_THEN_existing_configuration_moved_to_end() {
        val router = TestRouter(listOf(Config.A, Config.C(0), Config.B))

        router.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), router.stack)
    }

    @Test
    fun WHEN_exists_with_same_value_at_the_end_THEN_existing_configuration_moved_to_end() {
        val router = TestRouter(listOf(Config.A, Config.B, Config.C(0)))

        router.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), router.stack)
    }

    @Test
    fun WHEN_exists_with_different_value_at_start_THEN_removed_and_new_added_to_end() {
        val router = TestRouter(listOf(Config.C(0), Config.A, Config.B))

        router.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), router.stack)
    }

    @Test
    fun WHEN_exists_with_different_value_in_the_middle_THEN_removed_and_new_added_to_end() {
        val router = TestRouter(listOf(Config.A, Config.C(0), Config.B))

        router.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), router.stack)
    }

    @Test
    fun WHEN_exists_with_different_value_at_the_end_THEN_removed_and_new_added_to_end() {
        val router = TestRouter(listOf(Config.A, Config.B, Config.C(0)))

        router.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), router.stack)
    }

    @Test
    fun WHEN_multiple_exist_THEN_all_removed_and_new_added_to_end() {
        val router = TestRouter(listOf(Config.C(0), Config.A, Config.C(1), Config.B))

        router.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), router.stack)
    }

    private sealed class Config {
        object A : Config()
        object B : Config()
        data class C(val value: Int) : Config()
    }
}
