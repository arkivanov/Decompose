package com.arkivanov.decompose

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertFailsWith
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

    @Test
    fun GIVEN_observer_throws_WHEN_accept_THEN_exception_thrown() {
        val relay = Relay<Int>()
        val error = Exception()
        relay.subscribe { throw error }

        val throwError = assertFails { relay.accept(1) }

        assertEquals(error, throwError)
    }

    @Test
    fun GIVEN_two_observers_and_first_throws_WHEN_accept_THEN_exception_thrown() {
        val relay = Relay<Int>()
        val error = Exception()
        relay.subscribe { throw error }
        relay.subscribe {}

        val throwError = assertFails { relay.accept(1) }

        assertEquals(error, throwError)
    }

    @Test
    fun GIVEN_two_observers_and_first_throws_WHEN_accept_THEN_second_observer_not_called() {
        val relay = Relay<Int>()
        val error = Exception()
        relay.subscribe { throw error }
        var isSecondObserverCalled = false
        relay.subscribe { isSecondObserverCalled = true }

        runCatching { relay.accept(1) }

        assertFalse(isSecondObserverCalled)
    }

    @Test
    fun GIVEN_observer_sends_recursively_and_throws_WHEN_accept_THEN_exception_thrown() {
        val relay = Relay<Int>()
        val error = Exception()

        relay.subscribe {
            relay.accept(2)
            throw error
        }

        val throwError = assertFails { relay.accept(1) }

        assertEquals(error, throwError)
    }

    @Test
    fun GIVEN_observer_sends_recursively_and_throws_WHEN_accept_THEN_observer_called_only_once() {
        val relay = Relay<Int>()
        val error = Exception()
        val values = ArrayList<Int>()

        relay.subscribe {
            values += it
            relay.accept(2)
            throw error
        }

        runCatching { relay.accept(1) }

        assertEquals(listOf(1), values)
    }

    @Test
    fun GIVEN_observer_throws_WHEN_accept_second_time_THEN_exception_thrown_with_cause() {
        val relay = Relay<Int>()
        val error = Exception()
        relay.subscribe { throw error }
        runCatching { relay.accept(1) }

        val thrownError = assertFailsWith<IllegalStateException> { relay.accept(2) }

        assertEquals(error, thrownError.cause)
    }

    @Test
    fun GIVEN_observer_throws_WHEN_accept_twice_THEN_observer_called_only_once() {
        val relay = Relay<Int>()
        val error = Exception()
        var callCount = 0

        relay.subscribe {
            callCount++
            throw error
        }

        runCatching { relay.accept(1) }
        runCatching { relay.accept(2) }

        assertEquals(1, callCount)
    }

    private fun <T> Relay<T>.subscribe(): List<T> {
        val list = ArrayList<T>()
        subscribe { list += it }

        return list
    }
}
