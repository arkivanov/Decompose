package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class LazyItemsLazinessTest {

    private val nav = ItemsNavigation<Int>()
    private val ctx = TestComponentContext()

    @Test
    fun WHEN_created_with_initial_items_THEN_get_returns_components() {
        val items = ctx.childLazyItems<Int>(initialItems = listOf(1, 2, 3))

        val instances = items.value.items.map(items::get)

        assertEquals(listOf(1, 2, 3), instances.map(Component<Int>::config))
    }

    @Test
    fun WHEN_created_with_initial_items_THEN_get_returns_same_components() {
        val items = ctx.childLazyItems<Int>(initialItems = listOf(1, 2, 3))

        val instances1 = items.value.items.map(items::get)
        val instances2 = items.value.items.map(items::get)

        assertEquals(instances1, instances2)
    }

    @Test
    fun WHEN_created_with_initial_items_THEN_get_returns_components_with_correct_lifecycles() {
        val items = ctx.childLazyItems<Int>(initialItems = listOf(1, 2, 3))

        val (child1, child2, child3) = items.value.items.map(items::get)

        assertEquals(Lifecycle.State.CREATED, child1.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child2.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child3.lifecycle.state)
    }

    @Test
    fun WHEN_created_with_initial_and_active_items_THEN_get_returns_components() {
        val items =
            ctx.childLazyItems<Int>(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instances = items.value.items.map(items::get)

        assertEquals(listOf(1, 2, 3, 4, 5), instances.map(Component<Int>::config))
    }

    @Test
    fun WHEN_created_with_initial_and_active_items_THEN_get_returns_same_components() {
        val items =
            ctx.childLazyItems<Int>(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val instances1 = items.value.items.map(items::get)
        val instances2 = items.value.items.map(items::get)

        assertEquals(instances1, instances2)
    }

    @Test
    fun WHEN_created_with_initial_and_active_items_THEN_get_returns_components_with_correct_lifecycles() {
        val items =
            ctx.childLazyItems<Int>(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val (child1, child2, child3, child4, child5) = items.value.items.map(items::get)

        assertEquals(Lifecycle.State.CREATED, child1.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child2.lifecycle.state)
        assertEquals(Lifecycle.State.STARTED, child3.lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, child4.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child5.lifecycle.state)
    }

    @Test
    fun WHEN_active_items_changed_THEN_get_returns_components() {
        val items =
            ctx.childLazyItems<Int>(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.RESUMED,
                )
            )
        }

        val instances = items.value.items.map(items::get)

        assertEquals(listOf(1, 2, 3, 4, 5), instances.map(Component<Int>::config))
    }

    @Test
    fun WHEN_active_items_changed_THEN_get_returns_same_components() {
        val items =
            ctx.childLazyItems<Int>(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.RESUMED,
                )
            )
        }

        val instances1 = items.value.items.map(items::get)
        val instances2 = items.value.items.map(items::get)

        assertEquals(instances1, instances2)
    }

    @Test
    fun WHEN_active_items_changed_THEN_get_returns_components_with_correct_lifecycles() {
        val items =
            ctx.childLazyItems<Int>(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.RESUMED,
                )
            )
        }

        val (child1, child2, child3, child4, child5) = items.value.items.map(items::get)

        assertEquals(Lifecycle.State.STARTED, child1.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child2.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child3.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child4.lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, child5.lifecycle.state)
    }

    @Test
    fun WHEN_items_and_active_items_changed_THEN_get_returns_components() {
        val items =
            ctx.childLazyItems<Int>(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        nav.navigate {
            it.copy(
                items = listOf(1, 6, 7, 8, 9),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.RESUMED,
                    7 to ActiveLifecycleState.CREATED,
                    8 to ActiveLifecycleState.STARTED,
                    9 to ActiveLifecycleState.RESUMED,
                )
            )
        }

        val instances = items.value.items.map(items::get)

        assertEquals(listOf(1, 6, 7, 8, 9), instances.map(Component<Int>::config))
    }

    @Test
    fun WHEN_items_and_active_items_changed_THEN_get_returns_same_components() {
        val items =
            ctx.childLazyItems<Int>(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        nav.navigate {
            it.copy(
                items = listOf(1, 6, 7, 8, 9),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.RESUMED,
                    7 to ActiveLifecycleState.CREATED,
                    8 to ActiveLifecycleState.STARTED,
                    9 to ActiveLifecycleState.RESUMED,
                )
            )
        }

        val instances1 = items.value.items.map(items::get)
        val instances2 = items.value.items.map(items::get)

        assertEquals(instances1, instances2)
    }

    @Test
    fun WHEN_items_and_active_items_changed_THEN_get_returns_components_with_correct_lifecycles() {
        val items =
            ctx.childLazyItems<Int>(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        nav.navigate {
            it.copy(
                items = listOf(1, 6, 7, 8, 9),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.RESUMED,
                    7 to ActiveLifecycleState.CREATED,
                    8 to ActiveLifecycleState.STARTED,
                    9 to ActiveLifecycleState.RESUMED,
                )
            )
        }

        val (child1, child6, child7, child8, child9) = items.value.items.map(items::get)

        assertEquals(Lifecycle.State.RESUMED, child1.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child6.lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, child7.lifecycle.state)
        assertEquals(Lifecycle.State.STARTED, child8.lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, child9.lifecycle.state)
    }
}
