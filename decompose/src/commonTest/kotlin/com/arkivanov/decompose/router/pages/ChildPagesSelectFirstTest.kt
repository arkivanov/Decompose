package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.BeforeTest
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPagesSelectFirstTest : BaseChildPagesTest() {

    private val lifecycle = LifecycleRegistry()
    private val context = DefaultComponentContext(lifecycle = lifecycle)

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_pages_empty_WHEN_selectFirst_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages())

        navigation.selectFirst()

        pages.assertPagesEmpty()
    }

    @Test
    fun GIVEN_5_pages_and_selected_0_WHEN_selectFirst_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = configs(0, 1, 2, 3, 4), selectedIndex = 0))

        navigation.selectFirst()

        pages.assertPages(selectedIndex = 0, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_2_WHEN_selectFirst_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = configs(0, 1, 2, 3, 4), selectedIndex = 2))

        navigation.selectFirst()

        pages.assertPages(selectedIndex = 0, size = 5)
    }

    @Test
    fun GIVEN_5_pages_and_selected_4_WHEN_selectFirst_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = configs(0, 1, 2, 3, 4), selectedIndex = 4))

        navigation.selectFirst()

        pages.assertPages(selectedIndex = 0, size = 5)
    }
}
