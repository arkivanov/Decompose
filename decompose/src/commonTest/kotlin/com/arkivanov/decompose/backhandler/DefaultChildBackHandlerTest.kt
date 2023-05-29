package com.arkivanov.decompose.backhandler

import com.arkivanov.essenty.backhandler.BackCallback
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class DefaultChildBackHandlerTest {

    private val parent = TestBackDispatcher()

    @Test
    fun WHEN_created_disabled_THEN_not_registered_in_parent() {
        handler(isEnabled = false)

        assertEquals(0, parent.size)
    }

    @Test
    fun WHEN_created_enabled_THEN_not_registered_in_parent() {
        handler(isEnabled = true)

        assertEquals(0, parent.size)
    }

    @Test
    fun GIVEN_created_disabled_WHEN_started_THEN_registered_in_parent() {
        val handler = handler(isEnabled = false)

        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_created_enabled_WHEN_started_THEN_registered_in_parent() {
        val handler = handler(isEnabled = true)

        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_disabled_and_started_WHEN_stopped_THEN_not_registered_in_parent() {
        val handler = handler(isEnabled = false)
        handler.start()

        handler.stop()

        assertEquals(0, parent.size)
    }

    @Test
    fun GIVEN_enabled_and_started_WHEN_stopped_THEN_not_registered_in_parent() {
        val handler = handler(isEnabled = true)
        handler.start()

        handler.stop()

        assertEquals(0, parent.size)
    }

    @Test
    fun GIVEN_disabled_stopped_WHEN_started_THEN_registered_in_parent() {
        val handler = handler(isEnabled = false)
        handler.start()
        handler.stop()

        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_enabled_stopped_WHEN_started_THEN_registered_in_parent() {
        val handler = handler(isEnabled = true)
        handler.start()
        handler.stop()

        handler.start()

        assertEquals(1, parent.size)
    }

    @Test
    fun GIVEN_started_and_disabled_WHEN_disabled_callback_registered_THEN_parent_disabled() {
        val handler = handler(isEnabled = false)
        handler.start()

        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_disabled_WHEN_enabled_callback_registered_THEN_parent_disabled() {
        val handler = handler(isEnabled = false)
        handler.start()

        handler.register(callback(isEnabled = true))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_WHEN_disabled_callback_registered_THEN_parent_disabled() {
        val handler = handler(isEnabled = true)
        handler.start()

        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_WHEN_enabled_callback_registered_THEN_parent_enabled() {
        val handler = handler(isEnabled = true)
        handler.start()

        handler.register(callback(isEnabled = true))

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_disabled_and_disabled_callback_registered_WHEN_callback_enabled_THEN_parent_disabled() {
        val handler = handler(isEnabled = false)
        handler.start()
        val callback = callback(isEnabled = false)
        handler.register(callback)

        callback.isEnabled = true

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_disabled_and_disabled_callback_registered_WHEN_enabled_THEN_parent_disabled() {
        val handler = handler(isEnabled = false)
        handler.start()
        handler.register(callback(isEnabled = false))

        handler.isEnabled = true

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_and_disabled_callback_registered_WHEN_callback_enabled_THEN_parent_enabled() {
        val handler = handler(isEnabled = true)
        handler.start()
        val callback = callback(isEnabled = false)
        handler.register(callback)

        callback.isEnabled = true

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_disabled_and_enabled_callback_registered_WHEN_enabled_THEN_parent_enabled() {
        val handler = handler(isEnabled = false)
        handler.start()
        handler.register(callback(isEnabled = true))

        handler.isEnabled = true

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_WHEN_two_disabled_callbacks_registered_THEN_parent_disabled() {
        val handler = handler(isEnabled = true)
        handler.start()

        handler.register(callback(isEnabled = false))
        handler.register(callback(isEnabled = false))

        assertFalse(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_WHEN_two_callbacks_registered_enabled_disabled_THEN_parent_enabled() {
        val handler = handler(isEnabled = true)
        handler.start()

        handler.register(callback(isEnabled = true))
        handler.register(callback(isEnabled = false))

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_and_two_disabled_callbacks_registered_WHEN_one_callback_enabled_THEN_parent_enabled() {
        val handler = handler(isEnabled = true)
        handler.start()
        handler.register(callback(isEnabled = false))
        val callback = callback(isEnabled = false)
        handler.register(callback)

        callback.isEnabled = true

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_and_two_enabled_callbacks_registered_WHEN_one_callback_disabled_THEN_parent_enabled() {
        val handler = handler(isEnabled = true)
        handler.start()
        handler.register(callback(isEnabled = true))
        val callback = callback(isEnabled = true)
        handler.register(callback)

        callback.isEnabled = false

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_not_started_and_enabled_enabled_callback_registered_WHEN_started_THEN_parent_enabled() {
        val handler = handler(isEnabled = true)
        handler.register(callback(isEnabled = true))

        handler.start()

        assertTrue(parent.isEnabled)
    }

    @Test
    fun GIVEN_started_and_enabled_and_multiple_callbacks_registered_WHEN_parent_back_THEN_last_enabled_callback_called() {
        val handler = handler(isEnabled = true)
        handler.start()
        val items = ArrayList<Int>()
        handler.register(callback(isEnabled = true, priority = 0) { items += 1 })
        handler.register(callback(isEnabled = false, priority = 0) { items += 2 })
        handler.register(callback(isEnabled = true, priority = 2) { items += 3 })
        handler.register(callback(isEnabled = false, priority = 2) { items += 4 })
        handler.register(callback(isEnabled = true, priority = 2) { items += 5 })
        handler.register(callback(isEnabled = false, priority = 2) { items += 6 })
        handler.register(callback(isEnabled = true, priority = 1) { items += 7 })
        handler.register(callback(isEnabled = false, priority = 1) { items += 8 })

        parent.back()

        assertEquals(listOf(5), items)
    }

    private fun handler(isEnabled: Boolean = false): DefaultChildBackHandler =
        DefaultChildBackHandler(parent = parent, isEnabled = isEnabled, priority = 0)

    private fun callback(
        isEnabled: Boolean = true,
        priority: Int = BackCallback.PRIORITY_DEFAULT,
        onBack: () -> Unit = {},
    ): BackCallback =
        BackCallback(
            isEnabled = isEnabled,
            priority = priority,
            onBack = onBack,
        )
}
