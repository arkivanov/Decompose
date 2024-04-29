package com.arkivanov.decompose

import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch
import kotlinx.coroutines.newFixedThreadPoolContext
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeout
import kotlin.test.AfterTest
import kotlin.time.Duration
import kotlin.time.Duration.Companion.seconds

@OptIn(DelicateCoroutinesApi::class, ExperimentalCoroutinesApi::class)
abstract class AbstractThreadingTest {

    protected open val threadCount: Int = 8

    private val dispatcher by lazy { newFixedThreadPoolContext(nThreads = threadCount, name = "AbstractThreadingTest pool") }

    @AfterTest
    open fun after() {
        dispatcher.close()
    }

    protected fun race(block: suspend (threadIndex: Int) -> Unit) {
        runBlocking {
            val startLatch = CountDownLatch(count = threadCount)

            List(threadCount) { threadIndex ->
                launch(dispatcher) {
                    startLatch.countDown()
                    startLatch.await(timeout = 10.seconds)
                    block(threadIndex)
                }
            }.let { jobs ->
                withTimeout(timeout = 10.seconds) {
                    jobs.joinAll()
                }
            }
        }
    }

    private class CountDownLatch(count: Int) {
        private val flow = MutableStateFlow(count)

        fun countDown() {
            flow.update { it - 1 }
        }

        suspend fun await(timeout: Duration) {
            withTimeout(timeout) {
                flow.first { it == 0 }
            }
        }
    }
}
