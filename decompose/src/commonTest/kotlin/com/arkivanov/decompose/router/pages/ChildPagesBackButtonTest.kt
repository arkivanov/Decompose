package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.getValue
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildPagesBackButtonTest : BaseChildPagesTest() {

    private val lifecycle = LifecycleRegistry()
    private val backDispatcher = BackDispatcher()
    private val context = DefaultComponentContext(lifecycle = lifecycle, backHandler = backDispatcher)

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun WHEN_5_pages_and_selected_1_THEN_isEnabled_true() {
        context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 1))

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_5_pages_and_selected_1_WHEN_back_THEN_selected_0() {
        val pages by context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 1))

        backDispatcher.back()

        pages.assertPages(selectedIndex = 0, size = 5)
    }

    @Test
    fun WHEN_5_pages_and_selected_0_THEN_isEnabled_false() {
        context.childPages(initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 0))

        assertFalse(backDispatcher.isEnabled)
    }
}
