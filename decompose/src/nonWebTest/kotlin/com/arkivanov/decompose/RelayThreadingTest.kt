package com.arkivanov.decompose

import kotlin.test.Test
import kotlin.test.assertEquals

abstract class AbstractRelayThreadingTest : AbstractThreadingTest() {

    protected abstract val iterationCount: Int

    @Test
    fun emits_all_values_synchronized() {
        repeat(10) {
            val relay = Relay<Int>()

            val values = HashSet<Int>()
            var count = 0
            relay.subscribe {
                values += it
                count++
            }

            race { threadIndex ->
                repeat(iterationCount) { index ->
                    relay.accept(threadIndex * iterationCount + index)
                }
            }

            val expectedCount = threadCount * iterationCount
            assertEquals(expectedCount, values.size)
            assertEquals(expectedCount, count)
        }
    }
}
