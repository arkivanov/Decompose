package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL
import com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE
import com.arkivanov.decompose.router.panels.ChildPanelsMode.TRIPLE
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.essenty.lifecycle.Lifecycle.State.DESTROYED
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildPanelsNavigationTest : BaseChildPanelsTest() {

    private val context = DefaultComponentContext(lifecycle = lifecycle)

    @Test
    fun GIVEN_single_with_main_WHEN_activate_details_THEN_details_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = SINGLE))

        nav.navigate { it.copy(details = 2) }

        panels.assertPanels(main = 1, details = 2, extra = null, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_main_WHEN_activate_extra_THEN_extra_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = SINGLE))

        nav.navigate { it.copy(extra = 2) }

        panels.assertPanels(main = 1, details = null, extra = 2, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_main_WHEN_activate_details_and_extra_THEN_details_and_extra_panels_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = SINGLE))

        nav.navigate { it.copy(details = 2, extra = 3) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_main_and_details_WHEN_activate_extra_THEN_extra_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = SINGLE))

        nav.navigate { it.copy(extra = 3) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_main_and_extra_WHEN_activate_details_THEN_details_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = SINGLE))

        nav.navigate { it.copy(details = 2) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_replace_main_THEN_main_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE))

        nav.navigate { it.copy(main = 11) }

        panels.assertPanels(main = 11, details = 2, extra = 3, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_replace_main_THEN_old_main_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE))
        val component = panels.main.instance

        nav.navigate { it.copy(main = 11) }

        assertEquals(DESTROYED, component.lifecycle.state)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_replace_details_THEN_details_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE))

        nav.navigate { it.copy(details = 22) }

        panels.assertPanels(main = 1, details = 22, extra = 3, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_replace_details_THEN_old_details_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE))
        val component = panels.details?.instance

        nav.navigate { it.copy(details = 22) }

        assertEquals(DESTROYED, component?.lifecycle?.state)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_replace_extra_THEN_extra_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = SINGLE))

        nav.navigate { it.copy(extra = 33) }

        panels.assertPanels(main = 1, details = 2, extra = 33, mode = SINGLE)
    }

    @Test
    fun GIVEN_single_with_all_panels_WHEN_replace_extra_THEN_old_extra_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3))
        val component = panels.extra?.instance

        nav.navigate { it.copy(extra = 33) }

        assertEquals(DESTROYED, component?.lifecycle?.state)
    }

    @Test
    fun GIVEN_dual_with_main_WHEN_activate_details_THEN_details_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = DUAL))

        nav.navigate { it.copy(details = 2) }

        panels.assertPanels(main = 1, details = 2, extra = null, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_main_WHEN_activate_extra_THEN_extra_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = DUAL))

        nav.navigate { it.copy(extra = 2) }

        panels.assertPanels(main = 1, details = null, extra = 2, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_main_WHEN_activate_details_and_extra_THEN_details_and_extra_panels_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = DUAL))

        nav.navigate { it.copy(details = 2, extra = 3) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_main_and_details_WHEN_activate_extra_THEN_extra_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = DUAL))

        nav.navigate { it.copy(extra = 3) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_main_and_extra_WHEN_activate_details_THEN_details_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = DUAL))

        nav.navigate { it.copy(details = 2) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_all_panels_WHEN_replace_main_THEN_main_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL))

        nav.navigate { it.copy(main = 11) }

        panels.assertPanels(main = 11, details = 2, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_all_panels_WHEN_replace_main_THEN_old_main_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL))
        val component = panels.main.instance

        nav.navigate { it.copy(main = 11) }

        assertEquals(DESTROYED, component.lifecycle.state)
    }

    @Test
    fun GIVEN_dual_with_all_panels_WHEN_replace_details_THEN_details_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL))

        nav.navigate { it.copy(details = 22) }

        panels.assertPanels(main = 1, details = 22, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_all_panels_WHEN_replace_details_THEN_old_details_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL))
        val component = panels.details?.instance

        nav.navigate { it.copy(details = 22) }

        assertEquals(DESTROYED, component?.lifecycle?.state)
    }

    @Test
    fun GIVEN_dual_with_all_panels_WHEN_replace_extra_THEN_extra_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL))

        nav.navigate { it.copy(extra = 33) }

        panels.assertPanels(main = 1, details = 2, extra = 33, mode = DUAL)
    }

    @Test
    fun GIVEN_dual_with_all_panels_WHEN_replace_extra_THEN_old_extra_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL))
        val component = panels.extra?.instance

        nav.navigate { it.copy(extra = 33) }

        assertEquals(DESTROYED, component?.lifecycle?.state)
    }

    @Test
    fun GIVEN_triple_with_main_WHEN_activate_details_THEN_details_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = TRIPLE))

        nav.navigate { it.copy(details = 2) }

        panels.assertPanels(main = 1, details = 2, extra = null, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_main_WHEN_activate_extra_THEN_extra_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = TRIPLE))

        nav.navigate { it.copy(extra = 2) }

        panels.assertPanels(main = 1, details = null, extra = 2, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_main_WHEN_activate_details_and_extra_THEN_details_and_extra_panels_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, mode = TRIPLE))

        nav.navigate { it.copy(details = 2, extra = 3) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_main_and_details_WHEN_activate_extra_THEN_extra_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, mode = TRIPLE))

        nav.navigate { it.copy(extra = 3) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_main_and_extra_WHEN_activate_details_THEN_details_panel_activated() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, extra = 3, mode = TRIPLE))

        nav.navigate { it.copy(details = 2) }

        panels.assertPanels(main = 1, details = 2, extra = 3, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_all_panels_WHEN_replace_main_THEN_main_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE))

        nav.navigate { it.copy(main = 11) }

        panels.assertPanels(main = 11, details = 2, extra = 3, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_all_panels_WHEN_replace_main_THEN_old_main_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE))
        val component = panels.main.instance

        nav.navigate { it.copy(main = 11) }

        assertEquals(DESTROYED, component.lifecycle.state)
    }

    @Test
    fun GIVEN_triple_with_all_panels_WHEN_replace_details_THEN_details_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE))

        nav.navigate { it.copy(details = 22) }

        panels.assertPanels(main = 1, details = 22, extra = 3, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_all_panels_WHEN_replace_details_THEN_old_details_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE))
        val component = panels.details?.instance

        nav.navigate { it.copy(details = 22) }

        assertEquals(DESTROYED, component?.lifecycle?.state)
    }

    @Test
    fun GIVEN_triple_with_all_panels_WHEN_replace_extra_THEN_extra_panel_replaced() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE))

        nav.navigate { it.copy(extra = 33) }

        panels.assertPanels(main = 1, details = 2, extra = 33, mode = TRIPLE)
    }

    @Test
    fun GIVEN_triple_with_all_panels_WHEN_replace_extra_THEN_old_extra_panel_destroyed() {
        val panels by context.childPanels(initialPanels = Panels(main = 1, details = 2, extra = 3, mode = TRIPLE))
        val component = panels.extra?.instance

        nav.navigate { it.copy(extra = 33) }

        assertEquals(DESTROYED, component?.lifecycle?.state)
    }
}
