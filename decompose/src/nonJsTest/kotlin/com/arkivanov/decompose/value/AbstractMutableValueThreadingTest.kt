package com.arkivanov.decompose.value

import com.arkivanov.decompose.AbstractThreadingTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

abstract class AbstractMutableValueThreadingTest : AbstractThreadingTest() {

    protected abstract val iterationCount: Int

    @Test
    fun atomically_changes_value_and_calls_observer() {
        repeat(10) {
            val value = MutableValue(-1)
            var lastValue = 0
            var counter = 0

            value.observe {
                repeat(1000) { counter++ }
                lastValue = it
                repeat(1000) { counter-- }
            }

            race { threadIndex ->
                repeat(iterationCount) { index ->
                    value.value = threadIndex * iterationCount + index
                }
            }

            assertNotEquals(0, value.value)
            assertEquals(lastValue, value.value)
            assertEquals(0, counter)
        }
    }

    @Test
    fun atomically_updates_value_and_calls_observer() {
        repeat(10) {
            val value = MutableValue(0)
            var lastValue = 0
            var counter = 0

            value.observe {
                repeat(1000) { counter++ }
                lastValue = it
                repeat(1000) { counter-- }
            }

            race {
                repeat(iterationCount) {
                    value.update { it + 1 }
                }
            }

            val expectedValue = threadCount * iterationCount
            assertEquals(expectedValue, value.value)
            assertEquals(expectedValue, lastValue)
            assertEquals(0, counter)
        }
    }

    @Test
    fun atomically_subscribes_and_calls_the_observer() {
        repeat(10) {
            val value = MutableValue(0)
            var lastValue = 0
            var counter = 0

            repeat(3) {
                value.observe {}
            }

            race { threadIndex ->
                repeat(iterationCount) { index ->
                    value.update { it + 1 }

                    if ((threadIndex == 0) && (index == iterationCount / 2)) {
                        value.observe {
                            repeat(1000) { counter++ }
                            lastValue = it
                            repeat(1000) { counter-- }
                        }
                    }
                }
            }

            val expectedValue = threadCount * iterationCount
            assertEquals(expectedValue, value.value)
            assertEquals(expectedValue, lastValue)
            assertEquals(0, counter)
        }
    }
}
