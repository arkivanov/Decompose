package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.TestBackCallback
import com.arkivanov.decompose.TestBackCallback.Event.OnBack
import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.assertEvents
import com.arkivanov.decompose.assertNoEvents
import com.arkivanov.decompose.router.lazyitems.LazyItems.ActiveLifecycleState
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LazyItemsBackButtonTest {

    @Test
    fun t1() {
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
    fun t2() {
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
    fun t5() {
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
    fun t6() {
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
    fun t3() {
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
    fun t4() {
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
    fun t7() {
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
    fun t8() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t9() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t10() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t11() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t12() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t13() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t114() {
        val nav = ChildLazyItemsNavigation<Int>()
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
    fun t15() {
        val nav = ChildLazyItemsNavigation<Int>()
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
