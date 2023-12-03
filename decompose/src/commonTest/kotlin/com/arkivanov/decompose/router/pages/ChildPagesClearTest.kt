package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.BeforeTest
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPagesClearTest : BaseChildPagesTest() {

    private val lifecycle = LifecycleRegistry()
    private val context = DefaultComponentContext(lifecycle = lifecycle)

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_pages_empty_WHEN_clear_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages())

        navigation.clear()

        pages.assertPagesEmpty()
    }

    @Test
    fun GIVEN_5_pages_and_selected_0_WHEN_clear_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        navigation.clear()

        pages.assertPagesEmpty()
    }

    @Test
    fun GIVEN_5_pages_and_selected_2_WHEN_clear_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 2))

        navigation.clear()

        pages.assertPagesEmpty()
    }

    @Test
    fun GIVEN_5_pages_and_selected_4_WHEN_clear_THEN_pages_empty() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 4))

        navigation.clear()

        pages.assertPagesEmpty()
    }
}
