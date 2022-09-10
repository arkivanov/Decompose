package com.arkivanov.decompose.backhandler

import com.arkivanov.essenty.backhandler.BackCallback
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class DefaultChildBackHandlerTest {

    private val parent = TestBackDispatcher()
    private val handler = DefaultChildBackHandler(parent = parent, isEnabled = false)

    @Test
    fun WHEN_created_THEN_not_registered_in_parent() {
        assertEquals(0, parent.size)
    }

    @Test
    fun GIVEN_no_callbacks_registered_WHEN_start_THEN_registered_in_parent() {
        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_started_and_no_callbacks_registered_WHEN_stop_THEN_removed_from_parent() {
        handler.start()

        handler.stop()

        assertEquals(0, parent.size)
    }

    @Test
    fun GIVEN_enabled_callback_registered_WHEN_start_THEN_registered_in_parent() {
        handler.register(callback(isEnabled = true))

        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_disabled_callback_registered_WHEN_start_THEN_registered_in_parent() {
        handler.register(callback(isEnabled = false))

        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_callback_registered_and_started_WHEN_stop_THEN_removed_from_parent() {
        handler.register(callback())
        handler.start()

        handler.stop()

        assertEquals(0, parent.size)
    }

    @Test
    fun GIVEN_not_started_WHEN_callback_registered_THEN_not_registered_in_parent() {
        handler.register(callback())

        assertEquals(0, parent.size)
    }

    @Test
    fun WHEN_created_THEN_parent_disabled() {
        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_not_started_WHEN_enabled_callback_registered_THEN_parent_disabled() {
        handler.register(callback(isEnabled = true))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_not_started_WHEN_disabled_callback_registered_THEN_parent_disabled() {
        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_not_started_and_two_enabled_callbacks_registered_WHEN_one_callback_disabled_THEN_parent_disabled() {
        val callback1 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback(isEnabled = true))

        callback1.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_not_started_and_two_enabled_callbacks_registered_WHEN_all_callbacks_disabled_THEN_parent_disabled() {
        val callback1 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback(isEnabled = true))

        callback1.isEnabled = false
        callback1.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_no_callbacks_registered_WHEN_start_THEN_parent_disabled() {
        handler.start()

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_started_WHEN_enabled_callback_registered_THEN_parent_disabled() {
        handler.start()

        handler.register(callback(isEnabled = true))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_started_WHEN_disabled_callback_registered_THEN_parent_disabled() {
        handler.start()

        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_started_and_one_enabled_callback_registered_WHEN_callback_disabled_THEN_parent_disabled() {
        handler.start()
        val callback = callback(isEnabled = true)
        handler.register(callback)

        callback.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_started_and_two_enabled_callbacks_registered_WHEN_one_callback_disabled_THEN_parent_disabled() {
        handler.start()
        val callback1 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback(isEnabled = true))

        callback1.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_disabled_and_started_and_two_enabled_callbacks_registered_WHEN_all_callbacks_disabled_THEN_parent_disabled() {
        handler.start()
        val callback1 = callback(isEnabled = true)
        val callback2 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback2)

        callback1.isEnabled = false
        callback2.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_not_started_WHEN_enabled_callback_registered_THEN_parent_disabled() {
        handler.isEnabled = true

        handler.register(callback(isEnabled = true))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_not_started_WHEN_disabled_callback_registered_THEN_parent_disabled() {
        handler.isEnabled = true

        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_not_started_and_two_enabled_callbacks_registered_WHEN_one_callback_disabled_THEN_parent_disabled() {
        handler.isEnabled = true
        val callback1 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback(isEnabled = true))

        callback1.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_not_started_and_two_enabled_callbacks_registered_WHEN_all_callbacks_disabled_THEN_parent_disabled() {
        handler.isEnabled = true
        val callback1 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback(isEnabled = true))

        callback1.isEnabled = false
        callback1.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_no_callbacks_registered_WHEN_start_THEN_parent_disabled() {
        handler.isEnabled = true

        handler.start()

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_WHEN_enabled_callback_registered_THEN_parent_enabled() {
        handler.isEnabled = true
        handler.start()

        handler.register(callback(isEnabled = true))

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_WHEN_disabled_callback_registered_THEN_parent_disabled() {
        handler.isEnabled = true
        handler.start()

        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_and_one_enabled_callback_registered_WHEN_callback_disabled_THEN_parent_disabled() {
        handler.isEnabled = true
        handler.start()
        val callback = callback(isEnabled = true)
        handler.register(callback)

        callback.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_and_two_enabled_callbacks_registered_WHEN_one_callback_disabled_THEN_parent_enabled() {
        handler.isEnabled = true
        handler.start()
        val callback1 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback(isEnabled = true))

        callback1.isEnabled = false

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_and_two_enabled_callbacks_registered_WHEN_all_callbacks_disabled_THEN_parent_disabled() {
        handler.isEnabled = true
        handler.start()
        val callback1 = callback(isEnabled = true)
        val callback2 = callback(isEnabled = true)
        handler.register(callback1)
        handler.register(callback2)

        callback1.isEnabled = false
        callback2.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_and_enabled_callback_registered_WHEN_disabled_THEN_parent_disabled() {
        handler.isEnabled = true
        handler.start()
        handler.register(callback(isEnabled = true))

        handler.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_enabled_and_started_and_two_enabled_callbacks_registered_WHEN_disabled_THEN_parent_disabled() {
        handler.isEnabled = true
        handler.start()
        handler.register(callback(isEnabled = true))
        handler.register(callback(isEnabled = true))

        handler.isEnabled = false

        assertFalse(parent.isEnabled)
    }

    private fun callback(isEnabled: Boolean = true, onBack: () -> Unit = {}): BackCallback =
        BackCallback(isEnabled = isEnabled, onBack = onBack)
}
