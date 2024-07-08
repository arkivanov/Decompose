package com.arkivanov.decompose

import kotlin.test.Test
import kotlin.test.assertEquals

class KeyHashStringTest {

    @Test
    fun keyed_keyHashString_returns_distinct_values() {
        val configs = listOf(Config.A(id = 1), Config.B(id = 1), Config.A(id = 1))

        val keyStrings =
            configs
                .keyed { it }
                .map { (key, config) -> Child.Destroyed(configuration = config, key = key) }
                .map { it.keyHashString() }

        assertEquals(configs.size, keyStrings.distinct().size)
    }

    private sealed interface Config {
        data class A(val id: Int) : Config
        data class B(val id: Int) : Config
    }
}
