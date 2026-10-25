package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.getValue
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildPagesBackButtonTest : BaseChildPagesTest() {

    private val context = TestComponentContext()

    @Test
    fun WHEN_5_pages_and_selected_1_THEN_isEnabled_true() {
        context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 1))

        assertTrue(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_5_pages_and_selected_1_WHEN_back_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 1))

        context.navigationEventInput.backCompleted()

        pages.assertPages(selectedIndex = 0, size = 5)
    }

    @Test
    fun WHEN_5_pages_and_selected_0_THEN_isEnabled_false() {
        context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }
}
