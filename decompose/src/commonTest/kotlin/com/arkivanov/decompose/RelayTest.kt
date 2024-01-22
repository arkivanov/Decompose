package com.arkivanov.decompose

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertFalse

@Suppress("TestFunctionName")
class RelayTest {

    @Test
    fun GIVEN_subscribed_WHEN_accept_values_THEN_values_emitted_in_order() {
        val relay = Relay<Int>()
        val list = relay.subscribe()

        relay.accept(1)
        relay.accept(2)
        relay.accept(3)

        assertContentEquals(listOf(1, 2, 3), list)
    }

    @Test
    fun GIVEN_multiple_observers_subscribed_WHEN_accept_values_THEN_values_emitted_in_order_to_all_observers() {
        val relay = Relay<Int>()
        val list1 = relay.subscribe()
        val list2 = relay.subscribe()

        relay.accept(1)
        relay.accept(2)
        relay.accept(3)

        assertContentEquals(listOf(1, 2, 3), list1)
        assertContentEquals(listOf(1, 2, 3), list2)
    }

    @Test
    fun GIVEN_subscribed_and_unsubscribed_WHEN_accept_value_THEN_value_not_emitted() {
        val relay = Relay<Int>()
        var isEmitted = false
        val observer: (Int) -> Unit = { isEmitted = true }
        relay.subscribe(observer).cancel()

        relay.accept(1)

        assertFalse(isEmitted)
    }

    @Test
    fun WHEN_accept_recursively_THEN_values_emitted_in_order() {
        val relay = Relay<Int>()
        val list = ArrayList<Int>()

        relay.subscribe { value ->
            if (value == 1) {
                relay.accept(2)
            }
            list += value
        }

        relay.accept(1)

        assertContentEquals(listOf(1, 2), list)
    }

    private fun <T> Relay<T>.subscribe(): List<T> {
        val list = ArrayList<T>()
        subscribe { list += it }

        return list
    }
}
