package com.arkivanov.decompose.value.operator

import com.arkivanov.decompose.value.MutableValue
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ValueMapTest {

    private val upstream = MutableValue("abc")
    private val mapped = upstream.map(String::length)

    @Test
    fun WHEN_created_THEN_value_mapped() {
        assertEquals(3, mapped.value)
    }

    @Test
    fun WHEN_upstream_changed_THEN_value_mapped() {
        upstream.value = "abcd"

        assertEquals(4, mapped.value)
    }

    @Test
    fun GIVEN_subscribed_WHEN_upstream_changed_THEN_value_mapped() {
        mapped.subscribe {}
        upstream.value = "abcd"

        val value = mapped.value

        assertEquals(4, value)
    }

    @Test
    fun WHEN_subscribe_THEN_current_value_emitted() {
        val values = ArrayList<Int>()

        mapped.subscribe { values += it }

        assertContentEquals(listOf(3), values)
    }

    @Test
    fun GIVEN_multiple_observers_subscribed_WHEN_upstream_changed_THEN_new_value_emitted() {
        val values = List(10) { ArrayList<Int>() }

        repeat(10) { index ->
            mapped.subscribe { values[index] += it }
        }

        upstream.value = "abcd"
        upstream.value = "abcde"
        upstream.value = "abcdef"

        assertContentEquals(List(10) { listOf(3, 4, 5, 6) }, values)
    }

    @Test
    fun GIVEN_unsubscribed_WHEN_value_changed_THEN_not_emitted() {
        val values = ArrayList<Int>()
        val cancellation = mapped.subscribe { values += it }
        cancellation.cancel()
        values.clear()

        upstream.value = "abcd"

        assertContentEquals(emptyList(), values)
    }

    @Test
    fun GIVEN_multiple_subscribes_and_one_unsubscribed_WHEN_value_changed_THEN_value_emitted_to_subscribed() {
        val values = ArrayList<Int>()
        val cancellation = mapped.subscribe {}
        mapped.subscribe { values += it }
        cancellation.cancel()
        values.clear()

        upstream.value = "abcd"

        assertContentEquals(listOf(4), values)
    }

    @Test
    fun GIVEN_multiple_subscribes_and_one_unsubscribed_WHEN_value_changed_THEN_value_not_emitted_to_unsubscribed() {
        val values = ArrayList<Int>()
        val cancellation = mapped.subscribe { values += it }
        mapped.subscribe {}
        cancellation.cancel()
        values.clear()

        upstream.value = "abcd"

        assertContentEquals(emptyList(), values)
    }

    @Test
    fun WHEN_subscribed_multiple_times_THEN_mapper_called_only_once() {
        var count = 0

        val mapped =
            upstream
                .map {
                    count++
                    it.length
                }

        mapped.subscribe {}
        mapped.subscribe {}
        mapped.subscribe {}

        assertEquals(1, count)
    }

    @Test
    fun GIVEN_multiple_subscribers_WHEN_upstream_changed_THEN_mapper_called_only_once() {
        var count = 0

        val mapped =
            upstream
                .map {
                    count++
                    it.length
                }

        mapped.subscribe {}
        mapped.subscribe {}
        mapped.subscribe {}
        count = 0

        upstream.value = "abcd"

        assertEquals(1, count)
    }

    @Test
    fun GIVEN_multiple_subscribers_and_upstream_changed_WHEN_subscribe_THEN_mapper_not_called() {
        var count = 0

        val mapped =
            upstream
                .map {
                    count++
                    it.length
                }

        mapped.subscribe {}
        mapped.subscribe {}
        upstream.value = "abcd"
        count = 0
        mapped.subscribe {}


        assertEquals(0, count)
    }

    @Test
    fun GIVEN_multiple_subscribers_and_upstream_changed_WHEN_read_value_THEN_mapper_not_called() {
        var count = 0

        val mapped =
            upstream
                .map {
                    count++
                    it.length
                }

        mapped.subscribe {}
        mapped.subscribe {}
        upstream.value = "abcd"
        count = 0
        requireNotNull(upstream.value)

        assertEquals(0, count)
    }
}
