package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.slot.child
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import com.badoo.reaktive.test.scheduler.TestScheduler
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class CounterComponentTest {

    private val tickScheduler = TestScheduler()
    private lateinit var component: CounterComponent
    private val model get() = component.model.value

    @Test
    fun WHEN_created_THEN_title_correct() {
        createComponent(title = "title")

        assertEquals("title", model.title)
    }

    @Test
    fun WHEN_created_and_isBackEnabled_true_THEN_model_isBackEnabled_true() {
        createComponent(isBackEnabled = true)

        assertTrue(model.isBackEnabled)
    }

    @Test
    fun WHEN_created_and_isBackEnabled_false_THEN_model_isBackEnabled_false() {
        createComponent(isBackEnabled = false)

        assertFalse(model.isBackEnabled)
    }

    @Test
    fun WHEN_created_THEN_text_is_000() {
        createComponent()

        assertEquals("000", model.text)
    }

    @Test
    fun WHEN_one_tick_THEN_text_is_001() {
        createComponent()

        tick(n = 1)

        assertEquals("001", model.text)
    }

    @Test
    fun WHEN_two_ticks_THEN_text_is_002() {
        createComponent()

        tick(n = 2)

        assertEquals("002", model.text)
    }

    @Test
    fun WHEN_recreated_and_instance_retained_THEN_text_not_changed() {
        val instanceKeeper = InstanceKeeperDispatcher()
        createComponent(instanceKeeper = instanceKeeper)
        tick(n = 1)

        createComponent(instanceKeeper = instanceKeeper)

        assertEquals("001", model.text)
    }

    @Test
    fun WHEN_recreated_and_state_saved_THEN_text_not_changed() {
        var stateKeeper = StateKeeperDispatcher()
        createComponent(stateKeeper = stateKeeper)
        tick(n = 1)

        stateKeeper = StateKeeperDispatcher(savedState = stateKeeper.save())
        createComponent(stateKeeper = stateKeeper)

        assertEquals("001", model.text)
    }

    @Test
    fun GIVEN_InstanceKeeper_destroyed_WHEN_tick_THEN_text_not_changed() {
        val instanceKeeper = InstanceKeeperDispatcher()
        createComponent(instanceKeeper = instanceKeeper)
        instanceKeeper.destroy()

        tick(n = 1)

        assertEquals("000", model.text)
    }

    @Test
    fun WHEN_onInfoClicked_THEN_info_dialog_shown() {
        createComponent()
        tick(n = 1)

        component.onInfoClicked()

        assertEquals("Counter", component.dialogSlot.child?.instance?.title)
        assertEquals("Value: 001", component.dialogSlot.child?.instance?.message)
    }

    @Test
    fun GIVEN_info_dialog_shown_WHEN_onDismissClicked_THEN_dialog_dismissed() {
        createComponent()
        component.onInfoClicked()

        component.dialogSlot.child?.instance?.onDismissClicked()

        assertNull(component.dialogSlot.child)
    }

    @Test
    fun WHEN_onNextClicked_THEN_onNext_called() {
        var isCalled = false
        createComponent(onNext = { isCalled = true })

        component.onNextClicked()

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_onPrevClicked_THEN_onPrev_called() {
        var isCalled = false
        createComponent(onPrev = { isCalled = true })

        component.onPrevClicked()

        assertTrue(isCalled)
    }

    private fun tick(n: Int) {
        tickScheduler.timer.advanceBy(millis = 250L * n)
    }

    private fun createComponent(
        stateKeeper: StateKeeper = StateKeeperDispatcher(),
        instanceKeeper: InstanceKeeper = InstanceKeeperDispatcher(),
        title: String = "",
        isBackEnabled: Boolean = false,
        onNext: () -> Unit = {},
        onPrev: () -> Unit = {},
    ) {
        val lifecycle = LifecycleRegistry()

        component =
            DefaultCounterComponent(
                componentContext = DefaultComponentContext(
                    lifecycle = lifecycle,
                    stateKeeper = stateKeeper,
                    instanceKeeper = instanceKeeper,
                ),
                tickScheduler = tickScheduler,
                title = title,
                isBackEnabled = isBackEnabled,
                onNext = onNext,
                onPrev = onPrev,
            )

        lifecycle.resume()
    }
}
