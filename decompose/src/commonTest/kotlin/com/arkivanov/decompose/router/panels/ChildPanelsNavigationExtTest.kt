package com.arkivanov.decompose.router.panels

import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildPanelsNavigationExtTest {

    @Test
    fun WHEN_navigate_with_main_and_details_and_extra_THEN_panels_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.navigate(main = 11, details = 22, extra = 33)

        nav.assertPanels(Panels(main = 11, details = 22, extra = 33))
    }

    @Test
    fun WHEN_navigate_with_main_and_details_and_extra_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.navigate(main = 11, details = 22, extra = 33) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 11, details = 22, extra = 33, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_navigate_with_details_and_extra_THEN_panels_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.navigate(details = 22, extra = 33)

        nav.assertPanels(Panels(main = 1, details = 22, extra = 33))
    }

    @Test
    fun WHEN_navigate_with_details_and_extra_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.navigate(details = 22, extra = 33) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 22, extra = 33, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_navigate_with_extra_THEN_panels_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.navigate(extra = 33)

        nav.assertPanels(Panels(main = 1, details = 2, extra = 33))
    }

    @Test
    fun WHEN_navigate_with_extra_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.navigate(extra = 33) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 2, extra = 33, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_activateMain_THEN_main_panel_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.activateMain(main = 11)

        nav.assertPanels(Panels(main = 11, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun WHEN_activateMain_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.activateMain(main = 11) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 11, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_activateDetails_THEN_details_panel_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.activateDetails(details = 22)

        nav.assertPanels(Panels(main = 1, details = 22, extra = 3, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun WHEN_activateDetails_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.activateDetails(details = 22) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 22, extra = 3, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_dismissDetails_THEN_details_panel_dismissed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.dismissDetails()

        nav.assertPanels(Panels(main = 1, details = null, extra = 3, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun GIVEN_details_active_WHEN_dismissDetails_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.dismissDetails { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = null, extra = 3, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun GIVEN_details_not_active_WHEN_dismissDetails_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = null, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.dismissDetails { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = null, extra = 3, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = null, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_activateExtra_THEN_extra_panel_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.activateExtra(extra = 33)

        nav.assertPanels(Panels(main = 1, details = 2, extra = 33, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun WHEN_activateExtra_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.activateExtra(extra = 33) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 2, extra = 33, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_dismissExtra_THEN_extra_panel_dismissed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.dismissExtra()

        nav.assertPanels(Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun GIVEN_extra_active_WHEN_dismissExtra_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.dismissExtra { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun GIVEN_extra_not_active_WHEN_dismissExtra_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.dismissExtra { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun GIVEN_details_and_extra_panels_exist_WHEN_pop_THEN_extra_panel_dismissed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.pop()

        nav.assertPanels(Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun GIVEN_extra_panel_exists_WHEN_pop_THEN_extra_panel_dismissed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = null, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.pop()

        nav.assertPanels(Panels(main = 1, details = null, extra = null, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun GIVEN_details_panel_exists_WHEN_pop_THEN_details_panel_dismissed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE))

        nav.pop()

        nav.assertPanels(Panels(main = 1, details = null, extra = null, mode = ChildPanelsMode.SINGLE))
    }

    @Test
    fun WHEN_pop_THEN_onComplete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.pop { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 2, extra = null, mode = ChildPanelsMode.SINGLE),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }

    @Test
    fun WHEN_setMode_THEN_mode_changed() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))

        nav.setMode(ChildPanelsMode.DUAL)

        nav.assertPanels(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.DUAL))
    }

    @Test
    fun WHEN_setMode_THEN_complete_called() {
        val nav = TestPanelsNavigator(Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE))
        var complete: Any? = null

        nav.setMode(ChildPanelsMode.DUAL) { newState, oldState -> complete = newState to oldState }

        assertEquals(
            Pair(
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.DUAL),
                Panels(main = 1, details = 2, extra = 3, mode = ChildPanelsMode.SINGLE),
            ),
            complete,
        )
    }
}
