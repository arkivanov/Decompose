package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.BeforeTest
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPagesSelectPrevTest : BaseChildPagesTest() {

    private val lifecycle = LifecycleRegistry()
    private val context = DefaultComponentContext(lifecycle = lifecycle)

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_pages_empty_WHEN_selectPrev_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages())

        navigation.selectPrev(circular = false)

        pages.assertPagesEmpty()
    }

    @Test
    fun GIVEN_5_pages_and_selected_4_WHEN_selectPrev_THEN_selected_3() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 4))

        navigation.selectPrev(circular = false)

        pages.assertPages(selectedIndex = 3, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_4_WHEN_selectPrev_circular_THEN_selected_3() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 4))

        navigation.selectPrev(circular = true)

        pages.assertPages(selectedIndex = 3, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_3_WHEN_selectPrev_THEN_selected_2() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 3))

        navigation.selectPrev(circular = false)

        pages.assertPages(selectedIndex = 2, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_3_WHEN_selectPrev_circular_THEN_selected_2() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 3))

        navigation.selectPrev(circular = true)

        pages.assertPages(selectedIndex = 2, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_0_WHEN_selectPrev_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        navigation.selectPrev(circular = false)

        pages.assertPages(selectedIndex = 0, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_0_WHEN_selectPrev_circular_THEN_selected_4() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        navigation.selectPrev(circular = true)

        pages.assertPages(selectedIndex = 4, size = 5)
    }
}
