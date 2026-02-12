package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL
import com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.decompose.testutils.recreate
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPanelsSavedStateTest : BaseChildPanelsTest() {

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_state_restored() {
        var context = TestComponentContext()
        context.childPanels(
            initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL),
            persistent = true,
        )

        context = context.recreate()
        val panels2 by context.childPanels()

        panels2.assertPanels(main = 1, details = 2, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_initial_state_applied() {
        var context = TestComponentContext()
        context.childPanels(
            initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL),
            persistent = false,
        )

        context = context.recreate()
        val pages2 by context.childPanels(initialPanels = Panels(main = 11, details = 22, extra = 33, mode = SINGLE))

        pages2.assertPanels(main = 11, details = 22, extra = 33, mode = SINGLE)
    }
}
