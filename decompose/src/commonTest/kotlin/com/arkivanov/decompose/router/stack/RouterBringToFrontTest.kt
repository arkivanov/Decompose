package com.arkivanov.decompose.router.stack

import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class RouterBringToFrontTest {

    @Test
    fun WHEN_does_not_contain_THEN_new_configuration_pushed() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B))

        navigator.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_same_value_at_start_THEN_existing_configuration_moved_to_end() {
        val navigator = TestStackNavigator(listOf(Config.C(0), Config.A, Config.B))

        navigator.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_same_value_in_the_middle_THEN_existing_configuration_moved_to_end() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.C(0), Config.B))

        navigator.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_same_value_at_the_end_THEN_existing_configuration_moved_to_end() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C(0)))

        navigator.bringToFront(Config.C(0))

        assertEquals(listOf(Config.A, Config.B, Config.C(0)), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_different_value_at_start_THEN_removed_and_new_added_to_end() {
        val navigator = TestStackNavigator(listOf(Config.C(0), Config.A, Config.B))

        navigator.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_different_value_in_the_middle_THEN_removed_and_new_added_to_end() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.C(0), Config.B))

        navigator.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), navigator.configurations)
    }

    @Test
    fun WHEN_exists_with_different_value_at_the_end_THEN_removed_and_new_added_to_end() {
        val navigator = TestStackNavigator(listOf(Config.A, Config.B, Config.C(0)))

        navigator.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), navigator.configurations)
    }

    @Test
    fun WHEN_multiple_exist_THEN_all_removed_and_new_added_to_end() {
        val navigator = TestStackNavigator(listOf(Config.C(0), Config.A, Config.C(1), Config.B))

        navigator.bringToFront(Config.C(1))

        assertEquals(listOf(Config.A, Config.B, Config.C(1)), navigator.configurations)
    }

    @Test
    fun WHEN_bringToFront_base_class_THEN_pushed() {
        val baseConfig = BaseConfig()
        val navigator = TestStackNavigator(listOf(BaseConfig.A, BaseConfig.B))

        navigator.bringToFront(baseConfig)

        assertEquals(listOf(BaseConfig.A, BaseConfig.B, baseConfig), navigator.configurations)
    }

    private sealed class Config {
        data object A : Config()
        data object B : Config()
        data class C(val value: Int) : Config()
    }

    private open class BaseConfig {
        data object A : BaseConfig()
        data object B : BaseConfig()
    }
}
