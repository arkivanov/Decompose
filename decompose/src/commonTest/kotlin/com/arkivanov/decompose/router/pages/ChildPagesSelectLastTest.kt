package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.getValue
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPagesSelectLastTest : BaseChildPagesTest() {

    private val context = TestComponentContext()

    @Test
    fun GIVEN_pages_empty_WHEN_selectLast_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages())

        navigation.selectLast()

        pages.assertPagesEmpty()
    }

    @Test
    fun GIVEN_5_pages_and_selected_0_WHEN_selectLast_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        navigation.selectLast()

        pages.assertPages(selectedIndex = 4, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_2_WHEN_selectLast_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 2))

        navigation.selectLast()

        pages.assertPages(selectedIndex = 4, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_4_WHEN_selectLast_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 4))

        navigation.selectLast()

        pages.assertPages(selectedIndex = 4, size = 5)
    }
}
