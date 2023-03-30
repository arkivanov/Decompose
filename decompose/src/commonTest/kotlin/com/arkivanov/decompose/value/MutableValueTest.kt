package com.arkivanov.decompose.value

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class MutableValueTest {

    private val value = MutableValue(0)

    @Test
    fun WHEN_created_THEN_initial_value() {
        assertEquals(0, value.value)
    }

    @Test
    fun WHEN_value_changed_THEN_new_value() {
        value.value = 1

        assertEquals(1, value.value)
    }

    @Test
    fun WHEN_subscribe_THEN_current_value_emitted() {
        val values = ArrayList<Int>()

        value.subscribe { values += it }

        assertContentEquals(listOf(0), values)
    }

    @Test
    fun GIVEN_multiple_observers_subscribed_WHEN_value_changed_THEN_new_value_emitted() {
        val values = List(10) { ArrayList<Int>() }

        repeat(10) { index ->
            value.subscribe { values[index] += it }
        }

        value.value = 1
        value.value = 2
        value.value = 3

        assertContentEquals(List(10) { listOf(0, 1, 2, 3) }, values)
    }

    @Test
    fun GIVEN_unsubscribed_WHEN_value_changed_THEN_not_emitted() {
        val values = ArrayList<Int>()
        val observer: (Int) -> Unit = { values += it }
        value.subscribe(observer)
        value.unsubscribe(observer)
        values.clear()

        value.value = 1

        assertContentEquals(emptyList(), values)
    }

    @Test
    fun GIVEN_multiple_subscribes_and_one_unsubscribed_WHEN_value_changed_THEN_value_emitted_to_subscribed() {
        val values = ArrayList<Int>()
        val observer: (Int) -> Unit = {}
        value.subscribe(observer)
        value.subscribe { values += it }
        value.unsubscribe(observer)
        values.clear()

        value.value = 1

        assertContentEquals(listOf(1), values)
    }

    @Test
    fun GIVEN_multiple_subscribes_and_one_unsubscribed_WHEN_value_changed_THEN_value_not_emitted_to_unsubscribed() {
        val values = ArrayList<Int>()
        val observer: (Int) -> Unit = { values += it }
        value.subscribe(observer)
        value.subscribe {}
        value.unsubscribe(observer)
        values.clear()

        value.value = 1

        assertContentEquals(emptyList(), values)
    }

    @Test
    fun WHEN_compareAndSet_with_expected_value_THEN_returns_true() {
        val result = value.compareAndSet(expected = 0, new = 1)

        assertTrue(result)
    }

    @Test
    fun WHEN_compareAndSet_with_expected_value_THEN_new_value() {
        value.compareAndSet(expected = 0, new = 1)

        assertEquals(1, value.value)
    }

    @Test
    fun WHEN_compareAndSet_with_unexpected_value_THEN_returns_false() {
        val result = value.compareAndSet(expected = 1, new = 2)

        assertFalse(result)
    }

    @Test
    fun WHEN_compareAndSet_with_unexpected_value_THEN_old_value() {
        value.compareAndSet(expected = 1, new = 2)

        assertEquals(0, value.value)
    }

    @Test
    fun WHEN_update_THEN_new_value() {
        value.update { it + 1 }

        assertEquals(1, value.value)
    }

    @Test
    fun WHEN_getAndUpdate_THEN_new_value() {
        value.getAndUpdate { it + 1 }

        assertEquals(1, value.value)
    }

    @Test
    fun WHEN_getAndUpdate_THEN_returns_old_value() {
        val result = value.getAndUpdate { it + 1 }

        assertEquals(0, result)
    }

    @Test
    fun WHEN_updateAndGet_THEN_new_value() {
        value.updateAndGet { it + 1 }

        assertEquals(1, value.value)
    }

    @Test
    fun WHEN_updateAndGet_THEN_returns_new_value() {
        val result = value.updateAndGet { it + 1 }

        assertEquals(1, result)
    }
}
