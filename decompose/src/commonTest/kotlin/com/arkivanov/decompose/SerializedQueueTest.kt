package com.arkivanov.decompose

import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class SerializedQueueTest {

    @Test
    fun WHEN_offer_THEN_calls_callback_with_value() {
        var value: Int? = null
        val queue = SerializedQueue<Int> { value = it }

        queue.offer(1)

        assertEquals(1, value)
    }

    @Suppress("JoinDeclarationAndAssignment")
    @Test
    fun WHEN_offer_recursively_THEN_calls_callback_with_all_values_non_recursively() {
        val values = ArrayList<Int>()
        lateinit var queue: SerializedQueue<Int>

        queue =
            SerializedQueue {
                if (it == 1) {
                    queue.offer(2)
                }

                values += it
            }

        queue.offer(1)

        assertEquals(listOf(1, 2), values)
    }
}
