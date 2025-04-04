package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.TestBackCallback
import com.arkivanov.decompose.TestBackCallback.Event.OnBack
import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.assertEvents
import com.arkivanov.decompose.assertNoEvents
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class LazyItemsBackButtonTest {

    @Test
    fun WHEN_created_with_active_items_THEN_back_handler_disabled() {
        val ctx = TestComponentContext()

        ctx.childLazyItems(
            initialItems = listOf(1, 2, 3, 4, 5),
            activeItems = mapOf(
                2 to ActiveLifecycleState.CREATED,
                3 to ActiveLifecycleState.STARTED,
                4 to ActiveLifecycleState.RESUMED,
            ),
        )

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_WHEN_created_item_registered_enabled_callback_THEN_back_handler_disabled() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(2).backHandler.register(TestBackCallback())

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_created_item_registered_enabled_callback_WHEN_back_THEN_callback_not_called() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(2).backHandler.register(backCallback)

        ctx.backHandler.back()

        backCallback.assertNoEvents()
    }

    @Test
    fun GIVEN_created_with_active_items_WHEN_started_item_registered_enabled_callback_THEN_back_handler_enabled() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(3).backHandler.register(TestBackCallback())

        assertTrue(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_started_item_registered_enabled_callback_WHEN_callback_disabled_THEN_back_handler_disabled() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val callback = TestBackCallback()
        items.require(3).backHandler.register(callback)

        callback.isEnabled = false

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_started_item_registered_enabled_callback_WHEN_back_THEN_callback_called() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(3).backHandler.register(backCallback)

        ctx.backHandler.back()

        backCallback.assertEvents(OnBack)
    }

    @Test
    fun GIVEN_created_with_active_items_WHEN_resumed_item_registered_enabled_callback_THEN_back_handler_enabled() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(4).backHandler.register(TestBackCallback())

        assertTrue(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_resumed_item_registered_enabled_callback_WHEN_callback_disabled_THEN_back_handler_enabled() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val callback = TestBackCallback()
        items.require(4).backHandler.register(callback)

        callback.isEnabled = false

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_resumed_item_registered_enabled_callback_WHEN_back_THEN_callback_called() {
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(4).backHandler.register(backCallback)

        ctx.backHandler.back()

        backCallback.assertEvents(OnBack)
    }

    @Test
    fun GIVEN_created_with_active_items_and_started_item_registered_enabled_callback_WHEN_item_deactivated_THEN_back_handler_disabled() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(3).backHandler.register(backCallback)

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_started_item_registered_enabled_callback_and_item_deactivated_WHEN_back_THEN_callback_not_called() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(3).backHandler.register(backCallback)

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        ctx.backHandler.back()

        backCallback.assertNoEvents()
    }

    @Test
    fun GIVEN_created_with_active_items_and_resumed_item_registered_enabled_callback_WHEN_item_deactivated_THEN_back_handler_disabled() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(4).backHandler.register(backCallback)

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                ),
            )
        }

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_resumed_item_registered_enabled_callback_and_item_deactivated_WHEN_back_THEN_callback_not_called() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(4).backHandler.register(backCallback)

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                ),
            )
        }

        ctx.backHandler.back()

        backCallback.assertNoEvents()
    }


    @Test
    fun GIVEN_created_with_active_items_and_started_item_registered_enabled_callback_WHEN_item_removed_THEN_back_handler_disabled() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(3).backHandler.register(backCallback)

        nav.navigate { it.copy(items = listOf(1, 2, 4, 5)) }

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_started_item_registered_enabled_callback_and_item_removed_WHEN_back_THEN_callback_not_called() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(3).backHandler.register(backCallback)

        nav.navigate { it.copy(items = listOf(1, 2, 4, 5)) }

        ctx.backHandler.back()

        backCallback.assertNoEvents()
    }

    @Test
    fun GIVEN_created_with_active_items_and_resumed_item_registered_enabled_callback_WHEN_item_removed_THEN_back_handler_disabled() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(4).backHandler.register(backCallback)

        nav.navigate { it.copy(items = listOf(1, 2, 3, 5)) }

        assertFalse(ctx.backHandler.isEnabled)
    }

    @Test
    fun GIVEN_created_with_active_items_and_resumed_item_registered_enabled_callback_and_item_removed_WHEN_back_THEN_callback_not_called() {
        val nav = ItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3, 4, 5),
                activeItems = mapOf(
                    2 to ActiveLifecycleState.CREATED,
                    3 to ActiveLifecycleState.STARTED,
                    4 to ActiveLifecycleState.RESUMED,
                ),
            )

        val backCallback = TestBackCallback()
        items.require(4).backHandler.register(backCallback)

        nav.navigate { it.copy(items = listOf(1, 2, 3, 5)) }

        ctx.backHandler.back()

        backCallback.assertNoEvents()
    }
}
