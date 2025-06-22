package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL
import com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE
import com.arkivanov.decompose.router.panels.ChildPanelsMode.TRIPLE
import com.arkivanov.decompose.testutils.getValue
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildPanelsBackButtonTest : BaseChildPanelsTest() {

    private val context = DefaultComponentContext(lifecycle = lifecycle, backHandler = backDispatcher)

    @Test
    fun WHEN_single_with_main_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, mode = SINGLE), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_single_with_main_and_details_THEN_isEnabled_true() {
        context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = SINGLE), handleBackButton = true)

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_single_with_main_and_extra_THEN_isEnabled_true() {
        context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = SINGLE), handleBackButton = true)

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_single_with_all_panels_THEN_isEnabled_true() {
        context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE), handleBackButton = true)

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_single_with_main_and_details_WHEN_back_THEN_isEnabled_true() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = SINGLE), handleBackButton = true)

        backDispatcher.back()

        panels.assertPanels(main = 1, details = null, extra = null, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_main_and_extra_WHEN_back_THEN_isEnabled_true() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = SINGLE), handleBackButton = true)

        backDispatcher.back()

        panels.assertPanels(main = 1, details = null, extra = null, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_back_THEN_isEnabled_true() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE), handleBackButton = true)

        backDispatcher.back()

        panels.assertPanels(main = 1, details = 2, extra = null, mode = SINGLE)
    }

    @Test
    fun WHEN_dual_with_main_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, mode = DUAL), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_dual_with_main_and_details_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = DUAL), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_dual_with_main_and_extra_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = DUAL), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_dual_with_all_panels_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_triple_with_main_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, mode = TRIPLE), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_triple_with_main_and_details_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = TRIPLE), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_triple_with_main_and_extra_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = TRIPLE), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_triple_with_all_panels_THEN_isEnabled_false() {
        context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE), handleBackButton = true)

        assertFalse(backDispatcher.isEnabled)
    }
}
