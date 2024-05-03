package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.stack.active
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class CountersComponentIntegrationTest {

    private val lifecycle = LifecycleRegistry()

    private val component =
        DefaultCountersComponent(
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
        )

    private val activeCounter get() = component.stack.active.instance
    private val activeCounterModel get() = activeCounter.model.value

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun WHEN_created_THEN_first_counter_active() {
        assertEquals("Counter 0", activeCounterModel.title)
    }

    @Test
    fun WHEN_onNextClicked_THEN_next_counter_active() {
        activeCounter.onNextClicked()

        assertEquals("Counter 1", activeCounterModel.title)
    }

    @Test
    fun GIVEN_back_stack_not_empty_WHEN_onPrevClicked_THEN_prev_counter_active() {
        activeCounter.onNextClicked()

        activeCounter.onPrevClicked()

        assertEquals("Counter 0", activeCounterModel.title)
    }
}
