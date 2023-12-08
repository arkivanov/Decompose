package com.arkivanov.decompose.value.operator

import com.arkivanov.decompose.AbstractThreadingTest
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.update
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

abstract class AbstractValueMapThreadingTest : AbstractThreadingTest() {

    protected abstract val iterationCount: Int

    @Test
    fun atomically_maps_values_and_calls_observer() {
        repeat(10) {
            val upstream = MutableValue(0)
            val value = upstream.map { it * 2 }

            val observerCount = 5
            val lastValues = IntArray(observerCount)
            val counters = IntArray(observerCount)

            repeat(observerCount) { index ->
                value.subscribe {
                    repeat(1000) { counters[index]++ }
                    lastValues[index] = it
                    repeat(1000) { counters[index]-- }
                }
            }

            race {
                repeat(iterationCount) {
                    upstream.update { it + 1 }
                }
            }

            val expectedValue = threadCount * iterationCount * 2
            assertEquals(expectedValue, value.value)
            assertContentEquals(IntArray(observerCount) { expectedValue }, lastValues)
            assertContentEquals(IntArray(observerCount) { 0 }, counters)
        }
    }
}
