package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.builtins.serializer
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildPagesIntegrationTest {

    private val navigation = PagesNavigation<Int>()
    private val context = TestComponentContext()

    @Test
    fun GIVEN_three_pages_and_last_selected_WHEN_selectNext_circular_THEN_first_selected() {
        val pages by context.childPages(initialPages = Pages(items = listOf(1, 2, 3), selectedIndex = 2))

        navigation.selectNext(circular = true)

        assertEquals(0, pages.selectedIndex)
    }

    @Test
    fun GIVEN_three_pages_and_first_selected_WHEN_selectNext_circular_THEN_first_selected() {
        val pages by context.childPages(initialPages = Pages(items = listOf(1, 2, 3), selectedIndex = 2))

        navigation.selectNext(circular = true)

        assertEquals(0, pages.selectedIndex)
    }

    private fun ComponentContext.childPages(
        initialPages: Pages<Int> = Pages(),
        persistent: Boolean = true,
    ): Value<ChildPages<Int, Any>> =
        childPages(
            source = navigation,
            serializer = Int.serializer().takeIf { persistent },
            initialPages = { initialPages },
            handleBackButton = true,
            childFactory = { config, _ -> config },
        )
}
