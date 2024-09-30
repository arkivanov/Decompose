package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL
import com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.getValue
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPanelsSavedStateTest : BaseChildPanelsTest() {

    private val context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_state_restored() {
        var stateKeeper = TestStateKeeperDispatcher()
        var context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        context.childPanels(
            initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL),
            persistent = true,
        )

        val savedState = stateKeeper.save()
        stateKeeper = TestStateKeeperDispatcher(savedState = savedState)
        context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        val panels2 by context.childPanels()

        panels2.assertPanels(main = 1, details = 2, extra = 3, mode = DUAL)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_initial_state_applied() {
        var stateKeeper = TestStateKeeperDispatcher()
        var context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        context.childPanels(
            initialPanels = Panels(main = 1, details = 2, extra = 3, mode = DUAL),
            persistent = false,
        )

        val savedState = stateKeeper.save()
        stateKeeper = TestStateKeeperDispatcher(savedState = savedState)
        context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        val pages2 by context.childPanels(initialPanels = Panels(main = 11, details = 22, extra = 33, mode = SINGLE))

        pages2.assertPanels(main = 11, details = 22, extra = 33, mode = SINGLE)
    }
}
