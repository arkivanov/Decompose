package com.arkivanov.decompose.router.panels

import kotlin.test.assertEquals

class TestPanelsNavigator(
    private var panels: Panels<Int, Int, Int>,
) : PanelsNavigator<Int, Int, Int> {

    fun assertPanels(panels: Panels<Int, Int, Int>) {
        assertEquals(panels, this.panels)
    }

    override fun navigate(
        transformer: (Panels<Int, Int, Int>) -> Panels<Int, Int, Int>,
        onComplete: (newState: Panels<Int, Int, Int>, oldState: Panels<Int, Int, Int>) -> Unit,
    ) {
        val oldPanels = panels
        val newPanels = transformer(panels)
        panels = newPanels
        onComplete(newPanels, oldPanels)
    }
}
