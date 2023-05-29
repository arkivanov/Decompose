package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlin.test.BeforeTest
import kotlin.test.Test

@Suppress("TestFunctionName")
class ChildPagesSavedStateTest : BaseChildPagesTest() {

    private val lifecycle = LifecycleRegistry()

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_state_restored() {
        var stateKeeper = StateKeeperDispatcher()
        var context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        context.childPages(
            initialPages = Pages(items = configs(0, 1, 2, 3, 4), selectedIndex = 2),
            persistent = true,
        )

        val savedState = stateKeeper.save()
        stateKeeper = StateKeeperDispatcher(savedState = savedState)
        context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        val pages2 by context.childPages()

        pages2.assertPages(selectedIndex = 2, size = 5)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_initial_state_applied() {
        var stateKeeper = StateKeeperDispatcher()
        var context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        context.childPages(
            initialPages = Pages(items = configs(0, 1, 2, 3, 4), selectedIndex = 2),
            persistent = false,
        )

        val savedState = stateKeeper.save()
        stateKeeper = StateKeeperDispatcher(savedState = savedState)
        context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        val pages2 by context.childPages(initialPages = Pages(items = configs(5, 6, 7), selectedIndex = 0))

        pages2.assertPages(ids = listOf(5, 6, 7), selectedIndex = 0)
    }
}
