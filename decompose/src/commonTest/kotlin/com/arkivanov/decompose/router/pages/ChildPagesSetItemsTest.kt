package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.value.getValue
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPagesSetItemsTest : BaseChildPagesTest() {

    private val ctx = TestComponentContext()

    @Test
    fun WHEN_setItems_with_new_items_THEN_items_added() {
        val pages by ctx.childPages(initialPages = Pages(items = listOf(0, 1, 2), selectedIndex = 2))

        navigation.setItems { it + listOf(3, 4) }

        pages.assertPages(selectedIndex = 2, size = 5)
    }

    @Test
    fun WHEN_setItems_with_items_removed_from_end_THEN_items_removed_and_selected_index_coerced() {
        val pages by ctx.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 4))

        navigation.setItems { it.dropLast(2) }

        pages.assertPages(selectedIndex = 2, size = 3)
    }

    @Test
    fun WHEN_setItems_with_items_removed_from_start_THEN_items_removed() {
        val pages by ctx.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        navigation.setItems { it.drop(2) }

        pages.assertPages(ids = listOf(2, 3, 4), selectedIndex = 0)
    }

    @Test
    fun WHEN_setItems_with_all_items_removed_THEN_items_removed() {
        val pages by ctx.childPages(initialPages = Pages(items = listOf(0, 1, 2), selectedIndex = 0))

        navigation.setItems { emptyList() }

        pages.assertPages(ids = emptyList(), selectedIndex = -1)
    }
}
