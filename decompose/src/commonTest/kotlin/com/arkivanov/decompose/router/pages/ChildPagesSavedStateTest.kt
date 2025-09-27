package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.consume
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.decompose.testutils.recreate
import com.arkivanov.decompose.testutils.register
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.builtins.serializer
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertNotNull
import kotlin.test.assertNotSame
import kotlin.test.assertNull
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildPagesSavedStateTest : BaseChildPagesTest() {

    private val lifecycle = LifecycleRegistry()

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_state_restored() {
        var stateKeeper = TestStateKeeperDispatcher()
        var context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        context.childPages(
            initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 2),
            persistent = true,
        )

        val savedState = stateKeeper.save()
        stateKeeper = TestStateKeeperDispatcher(savedState = savedState)
        context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        val pages2 by context.childPages()

        pages2.assertPages(selectedIndex = 2, size = 5)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_with_new_initial_pages_and_state_not_restored_THEN_new_initial_pages_set() {
        var ctx = TestComponentContext()
        ctx.childPages(initialPages = Pages(items = listOf(1), selectedIndex = 0), persistent = true)

        ctx = ctx.recreate()
        val newPages by ctx.childPages(
            source = navigation,
            initialPages = { Pages(items = listOf(2, 3), selectedIndex = 1) },
            savePages = { SerializableContainer(it, Pages.serializer(Int.serializer())) },
            restorePages = { null },
            childFactory = ::Component,
        )

        newPages.assertPages(ids = listOf(2, 3), selectedIndex = 1)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_with_same_initial_pages_and_state_not_restored_THEN_child_state_not_restored() {
        var ctx = TestComponentContext()
        val oldPages by ctx.childPages(initialPages = Pages(items = listOf(1), selectedIndex = 0), persistent = true)
        oldPages.requireInstance(0).stateKeeper.register("key") { 1 }

        ctx = ctx.recreate()
        val newPages by ctx.childPages(
            source = navigation,
            initialPages = { Pages(items = listOf(1), selectedIndex = 0) },
            savePages = { SerializableContainer(it, Pages.serializer(Int.serializer())) },
            restorePages = { null },
            childFactory = ::Component,
        )

        val restoredState = newPages.requireInstance(0).stateKeeper.consume<Int>("key")

        assertNull(restoredState)
    }

    @Test
    fun GIVEN_persistent_WHEN_config_changed_with_same_initial_pages_and_state_not_restored_THEN_child_retained_instances_destroyed() {
        var ctx = TestComponentContext()
        val oldPages by ctx.childPages(initialPages = Pages(items = listOf(1), selectedIndex = 0), persistent = true)
        val oldInstance = oldPages.requireInstance(0).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)
        ctx.childPages(
            source = navigation,
            initialPages = { Pages(items = listOf(1), selectedIndex = 0) },
            savePages = { SerializableContainer(it, Pages.serializer(Int.serializer())) },
            restorePages = { null },
            childFactory = ::Component,
        )

        assertTrue(oldInstance.isDestroyed)
    }

    @Test
    fun GIVEN_persistent_WHEN_config_changed_with_same_initial_pages_and_state_not_restored_THEN_retained_instances_are_not_same() {
        var ctx = TestComponentContext()
        val oldPages by ctx.childPages(initialPages = Pages(items = listOf(1), selectedIndex = 0), persistent = true)
        val oldInstance = oldPages.requireInstance(0).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)
        val newPages by ctx.childPages(
            source = navigation,
            initialPages = { Pages(items = listOf(1), selectedIndex = 0) },
            savePages = { SerializableContainer(it, Pages.serializer(Int.serializer())) },
            restorePages = { null },
            childFactory = ::Component,
        )
        val newInstance = newPages.requireInstance(0).instanceKeeper.getOrCreate { TestInstance() }

        assertNotSame(newInstance, oldInstance)
    }


    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_initial_state_applied() {
        var stateKeeper = TestStateKeeperDispatcher()
        var context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        context.childPages(
            initialPages = Pages(items = listOf(0, 1, 2, 3, 4), selectedIndex = 2),
            persistent = false,
        )

        val savedState = stateKeeper.save()
        stateKeeper = TestStateKeeperDispatcher(savedState = savedState)
        context = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = stateKeeper)
        val pages2 by context.childPages(initialPages = Pages(items = listOf(5, 6, 7), selectedIndex = 0))

        pages2.assertPages(ids = listOf(5, 6, 7), selectedIndex = 0)
    }

    private fun ChildPages<Int, Component>.requireInstance(index: Int): Component =
        assertNotNull(items[index].instance)
}
