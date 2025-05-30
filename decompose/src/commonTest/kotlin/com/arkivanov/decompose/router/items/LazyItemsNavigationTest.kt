package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.router.items.LazyComponentState.CREATED
import com.arkivanov.decompose.router.items.LazyComponentState.DESTROYED
import com.arkivanov.decompose.router.items.LazyComponentState.PENDING
import com.arkivanov.decompose.router.items.LazyComponentState.REMOVED
import com.arkivanov.decompose.router.items.LazyComponentState.RESUMED
import com.arkivanov.decompose.router.items.LazyComponentState.STARTED
import kotlin.test.Test

@Suppress("TestFunctionName")
class LazyItemsNavigationTest {

    private val navigation = ItemsNavigation<Int>()
    private val context = TestComponentContext()

    @Test
    fun WHEN_created_with_initial_items_THEN_all_children_pending() {
        val items = context.childLazyItems(source = navigation, initialItems = listOf(1, 2, 3))

        items.assertItems(1 to PENDING, 2 to PENDING, 3 to PENDING)
    }

    @Test
    fun GIVEN_initial_items_WHEN_more_items_added_THEN_all_children_pending() {
        val items = context.childLazyItems(source = navigation, initialItems = listOf(1, 2, 3))

        navigation.navigate { it.copy(items = listOf(1, 2, 3, 4, 5, 6)) }

        items.assertItems(1 to PENDING, 2 to PENDING, 3 to PENDING, 4 to PENDING, 5 to PENDING, 6 to PENDING)
    }

    @Test
    fun GIVEN_initial_items_WHEN_some_last_items_removed_THEN_all_children_pending() {
        val items = context.childLazyItems(source = navigation, initialItems = listOf(1, 2, 3, 4, 5, 6))

        navigation.navigate { it.copy(items = it.items.dropLast(3)) }

        items.assertItems(1 to PENDING, 2 to PENDING, 3 to PENDING)
    }

    @Test
    fun GIVEN_initial_items_WHEN_some_first_items_removed_THEN_all_children_pending() {
        val items = context.childLazyItems(source = navigation, initialItems = listOf(1, 2, 3, 4, 5, 6))

        navigation.navigate { it.copy(items = it.items.drop(3)) }

        items.assertItems(4 to PENDING, 5 to PENDING, 6 to PENDING)
    }

    @Test
    fun GIVEN_initial_items_WHEN_some_items_removed_THEN_all_children_pending() {
        val items = context.childLazyItems(source = navigation, initialItems = listOf(1, 2, 3, 4, 5, 6))

        navigation.navigate { it.copy(items = listOf(1, 3, 5)) }

        items.assertItems(1 to PENDING, 3 to PENDING, 5 to PENDING)
    }

    @Test
    fun WHEN_initial_items_and_some_active_items_THEN_active_children_instantiated_and_others_pending() {
        val items =
            context.childLazyItems(
                source = navigation,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.assertItems(1 to PENDING, 2 to CREATED, 3 to STARTED, 4 to RESUMED, 5 to PENDING)
    }

    @Test
    fun GIVEN_initial_items_WHEN_some_items_activated_THEN_active_children_instantiated_and_others_pending() {
        val items = context.childLazyItems(source = navigation, initialItems = listOf(1, 2, 3, 4, 5))

        navigation.navigate {
            it.copy(
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        items.assertItems(1 to PENDING, 2 to CREATED, 3 to STARTED, 4 to RESUMED, 5 to PENDING)
    }

    @Test
    fun GIVEN_initial_items_and_some_active_items_WHEN_some_active_items_changed_THEN_active_children_instantiated_and_others_destroyed() {
        val items =
            context.childLazyItems(
                source = navigation,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        navigation.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    5 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        items.assertItems(1 to CREATED, 2 to DESTROYED, 3 to STARTED, 4 to DESTROYED, 5 to RESUMED)
    }

    @Test
    fun GIVEN_initial_items_and_all_active_items_WHEN_some_last_items_removed_THEN_active_children_instantiated_and_others_removed() {
        val items =
            context.childLazyItems(
                source = navigation,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                    4 to ActiveLifecycleState.STARTED,
                    5 to ActiveLifecycleState.CREATED,
                ),
            )

        navigation.navigate { it.copy(items = listOf(1, 2, 3)) }

        items.assertItems(1 to CREATED, 2 to STARTED, 3 to RESUMED, 4 to REMOVED, 5 to REMOVED)
    }

    @Test
    fun GIVEN_initial_and_active_items_WHEN_items_and_active_items_changed_THEN_active_instantiated_and_missing_removed_and_new_pending() {
        val items =
            context.childLazyItems(
                source = navigation,
                initialItems = listOf(1, 2, 3, 4, 5, 6, 7, 8),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.CREATED,
                    7 to ActiveLifecycleState.STARTED,
                    8 to ActiveLifecycleState.RESUMED,
                ),
            )

        navigation.navigate {
            it.copy(
                items = listOf(3, 4, 5, 6, 7, 9, 10, 11, 12),
                activeItems = mapOf(
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                    9 to ActiveLifecycleState.RESUMED,
                    10 to ActiveLifecycleState.STARTED,
                    11 to ActiveLifecycleState.CREATED,
                ),
            )
        }

        items.assertItems(
            2 to REMOVED,
            3 to DESTROYED,
            4 to CREATED,
            5 to STARTED,
            6 to RESUMED,
            7 to DESTROYED,
            8 to REMOVED,
            9 to RESUMED,
            10 to STARTED,
            11 to CREATED,
            12 to PENDING,
        )
    }

    @Test
    fun GIVEN_initial_items_and_all_active_items_WHEN_all_items_removed_THEN_all_children_removed() {
        val items =
            context.childLazyItems(
                source = navigation,
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        navigation.navigate { it.copy(items = emptyList()) }

        items.assertItems(1 to REMOVED, 2 to REMOVED, 3 to REMOVED)
    }

    @Test
    fun GIVEN_initial_items_and_all_active_WHEN_all_active_items_removed_THEN_all_children_destroyed() {
        val items =
            context.childLazyItems(
                source = navigation,
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        navigation.navigate { it.copy(activeItems = emptyMap()) }

        items.assertItems(1 to DESTROYED, 2 to DESTROYED, 3 to DESTROYED)
    }
}
