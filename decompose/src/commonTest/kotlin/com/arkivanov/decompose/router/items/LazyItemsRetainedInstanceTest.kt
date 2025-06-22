package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.recreate
import com.arkivanov.essenty.instancekeeper.getOrCreate
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertNotSame
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class LazyItemsRetainedInstanceTest {

    @Test
    fun WHEN_some_items_removed_THEN_remaining_active_instances_not_destroyed() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5, 6),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        nav.navigate { it.copy(items = it.items - listOf(4, 5, 6)) }

        assertFalse(instance1.isDestroyed)
        assertFalse(instance2.isDestroyed)
        assertFalse(instance3.isDestroyed)
    }

    @Test
    fun WHEN_some_items_removed_THEN_remaining_active_instances_not_recreated() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5, 6),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        nav.navigate { it.copy(items = it.items - listOf(4, 5, 6)) }

        val newInstance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        assertSame(instance1, newInstance1)
        assertSame(instance2, newInstance2)
        assertSame(instance3, newInstance3)
    }

    @Test
    fun WHEN_some_items_removed_THEN_removed_instances_destroyed() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5, 6),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance4 = items.require(4).instanceKeeper.getOrCreate { TestInstance() }
        val instance5 = items.require(5).instanceKeeper.getOrCreate { TestInstance() }
        val instance6 = items.require(6).instanceKeeper.getOrCreate { TestInstance() }

        nav.navigate { it.copy(items = it.items - listOf(4, 5, 6)) }

        assertTrue(instance4.isDestroyed)
        assertTrue(instance5.isDestroyed)
        assertTrue(instance6.isDestroyed)
    }

    @Test
    fun WHEN_some_items_deactivated_THEN_remaining_active_instances_not_destroyed() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5, 6),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        nav.navigate { it.copy(activeItems = it.activeItems - setOf(4, 5, 6)) }

        assertFalse(instance1.isDestroyed)
        assertFalse(instance2.isDestroyed)
        assertFalse(instance3.isDestroyed)
    }

    @Test
    fun WHEN_some_items_deactivated_THEN_remaining_active_instances_not_recreated() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5, 6),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        nav.navigate { it.copy(activeItems = it.activeItems - setOf(4, 5, 6)) }

        val newInstance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        assertSame(instance1, newInstance1)
        assertSame(instance2, newInstance2)
        assertSame(instance3, newInstance3)
    }

    @Test
    fun WHEN_some_items_deactivated_THEN_deactivated_instances_destroyed() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5, 6),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance4 = items.require(4).instanceKeeper.getOrCreate { TestInstance() }
        val instance5 = items.require(5).instanceKeeper.getOrCreate { TestInstance() }
        val instance6 = items.require(6).instanceKeeper.getOrCreate { TestInstance() }

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        assertTrue(instance4.isDestroyed)
        assertTrue(instance5.isDestroyed)
        assertTrue(instance6.isDestroyed)
    }

    @Test
    fun WHEN_configuration_change_THEN_active_instances_not_destroyed() {
        var ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)
        ctx.childLazyItems<Int>()

        assertFalse(instance1.isDestroyed)
        assertFalse(instance2.isDestroyed)
        assertFalse(instance3.isDestroyed)
    }

    @Test
    fun WHEN_configuration_change_THEN_active_instances_not_recreated() {
        var ctx = TestComponentContext()

        var items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)
        items = ctx.childLazyItems()

        val newInstance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        assertSame(instance1, newInstance1)
        assertSame(instance2, newInstance2)
        assertSame(instance3, newInstance3)
    }

    @Test
    fun GIVEN_without_state_saver_WHEN_configuration_change_without_initial_state_THEN_active_instances_destroyed() {
        var ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
                stateSaver = null,
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)
        ctx.childLazyItems<Int>()

        assertTrue(instance1.isDestroyed)
        assertTrue(instance2.isDestroyed)
        assertTrue(instance3.isDestroyed)
    }

    @Test
    fun GIVEN_without_state_saver_WHEN_configuration_change_with_same_initial_state_THEN_active_instances_destroyed() {
        var ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
                stateSaver = null,
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)

        ctx.childLazyItems<Int>(
            initialItems = listOf(1, 2, 3),
            activeItems = mapOf(
                1 to ActiveLifecycleState.CREATED,
                2 to ActiveLifecycleState.STARTED,
                3 to ActiveLifecycleState.RESUMED,
            ),
        )

        assertTrue(instance1.isDestroyed)
        assertTrue(instance2.isDestroyed)
        assertTrue(instance3.isDestroyed)
    }

    @Test
    fun GIVEN_without_state_saver_WHEN_configuration_change_with_same_initial_state_THEN_active_instances_recreated() {
        var ctx = TestComponentContext()

        var items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
                stateSaver = null,
            )

        val instance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val instance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val instance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        ctx = ctx.recreate(isConfigurationChange = true)

        items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        val newInstance1 = items.require(1).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance2 = items.require(2).instanceKeeper.getOrCreate { TestInstance() }
        val newInstance3 = items.require(3).instanceKeeper.getOrCreate { TestInstance() }

        assertNotSame(instance1, newInstance1)
        assertNotSame(instance2, newInstance2)
        assertNotSame(instance3, newInstance3)
    }
}
