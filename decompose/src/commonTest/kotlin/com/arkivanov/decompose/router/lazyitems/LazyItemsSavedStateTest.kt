package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.consume
import com.arkivanov.decompose.recreate
import com.arkivanov.decompose.register
import com.arkivanov.decompose.router.children.transientNavStateSaver
import com.arkivanov.decompose.router.lazyitems.LazyItems.ActiveLifecycleState
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class LazyItemsSavedStateTest {

    @Test
    fun f1() {
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

        items.require(1).stateKeeper.register(key = "key") { 1 }
        items.require(2).stateKeeper.register(key = "key") { 2 }
        items.require(3).stateKeeper.register(key = "key") { 3 }

        ctx = ctx.recreate()
        items = ctx.childLazyItems()

        val state1 = items.require(1).stateKeeper.consume<Int>(key = "key")
        val state2 = items.require(2).stateKeeper.consume<Int>(key = "key")
        val state3 = items.require(3).stateKeeper.consume<Int>(key = "key")

        assertEquals(1, state1)
        assertEquals(2, state2)
        assertEquals(3, state3)
    }

    @Test
    fun f7() {
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

        items.require(1).stateKeeper.register(key = "key") { 1 }
        items.require(2).stateKeeper.register(key = "key") { 2 }
        items.require(3).stateKeeper.register(key = "key") { 3 }

        ctx = ctx.recreate()

        items =
            ctx.childLazyItems(
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        val state1 = items.require(1).stateKeeper.consume<Int>(key = "key")
        val state2 = items.require(2).stateKeeper.consume<Int>(key = "key")
        val state3 = items.require(3).stateKeeper.consume<Int>(key = "key")

        assertNull(state1)
        assertNull(state2)
        assertNull(state3)
    }

    @Test
    fun f2() {
        var ctx = TestComponentContext()

        ctx.childLazyItems(
            initialItems = listOf(1, 2, 3, 4),
            activeItems = mapOf(
                1 to ActiveLifecycleState.CREATED,
                2 to ActiveLifecycleState.STARTED,
                3 to ActiveLifecycleState.RESUMED,
            ),
        )

        ctx = ctx.recreate()
        val items = ctx.childLazyItems<Int>()

        items.assertItems(
            1 to LazyComponentState.CREATED,
            2 to LazyComponentState.STARTED,
            3 to LazyComponentState.RESUMED,
            4 to LazyComponentState.PENDING,
        )
    }

    @Test
    fun f9() {
        var ctx = TestComponentContext()

        ctx.childLazyItems(
            initialItems = listOf(1, 2, 3, 4),
            activeItems = mapOf(
                1 to ActiveLifecycleState.CREATED,
                2 to ActiveLifecycleState.STARTED,
                3 to ActiveLifecycleState.RESUMED,
            ),
            stateSaver = transientNavStateSaver(),
        )

        ctx = ctx.recreate(isConfigurationChange = true)
        val items = ctx.childLazyItems<Int>(stateSaver = transientNavStateSaver())

        items.assertItems(
            1 to LazyComponentState.CREATED,
            2 to LazyComponentState.STARTED,
            3 to LazyComponentState.RESUMED,
            4 to LazyComponentState.PENDING,
        )
    }

    @Test
    fun f8() {
        var ctx = TestComponentContext()

        ctx.childLazyItems(
            initialItems = listOf(1, 2, 3),
            activeItems = mapOf(
                1 to ActiveLifecycleState.CREATED,
                2 to ActiveLifecycleState.STARTED,
                3 to ActiveLifecycleState.RESUMED,
            ),
            stateSaver = null,
        )

        ctx = ctx.recreate()

        val items =
            ctx.childLazyItems<Int>(
                initialItems = listOf(4, 5, 6),
                activeItems = mapOf(
                    4 to ActiveLifecycleState.CREATED,
                    5 to ActiveLifecycleState.STARTED,
                    6 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.assertItems(
            4 to LazyComponentState.CREATED,
            5 to LazyComponentState.STARTED,
            6 to LazyComponentState.RESUMED,
        )
    }

    @Test
    fun f5() {
        val nav = ChildLazyItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(1).stateKeeper.register(key = "key") { 1 }
        items.require(2).stateKeeper.register(key = "key") { 2 }
        items.require(3).stateKeeper.register(key = "key") { 3 }
        nav.navigate { it.copy(activeItems = emptyMap()) }

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.RESUMED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.CREATED,
                ),
            )
        }

        val state1 = items.require(1).stateKeeper.consume<Int>(key = "key")
        val state2 = items.require(2).stateKeeper.consume<Int>(key = "key")
        val state3 = items.require(3).stateKeeper.consume<Int>(key = "key")

        assertEquals(1, state1)
        assertEquals(2, state2)
        assertEquals(3, state3)
    }

    @Test
    fun f6() {
        val nav = ChildLazyItemsNavigation<Int>()
        val ctx = TestComponentContext()

        val items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(1).stateKeeper.register(key = "key") { 1 }
        items.require(2).stateKeeper.register(key = "key") { 2 }
        items.require(3).stateKeeper.register(key = "key") { 3 }
        nav.navigate { it.copy(items = emptyList()) }

        nav.navigate {
            it.copy(
                items = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.RESUMED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.CREATED,
                ),
            )
        }

        val state1 = items.require(1).stateKeeper.consume<Int>(key = "key")
        val state2 = items.require(2).stateKeeper.consume<Int>(key = "key")
        val state3 = items.require(3).stateKeeper.consume<Int>(key = "key")

        assertNull(state1)
        assertNull(state2)
        assertNull(state3)
    }

    @Test
    fun f3() {
        var nav = ChildLazyItemsNavigation<Int>()
        var ctx = TestComponentContext()

        var items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(1).stateKeeper.register(key = "key") { 1 }
        items.require(2).stateKeeper.register(key = "key") { 2 }
        items.require(3).stateKeeper.register(key = "key") { 3 }
        nav.navigate { it.copy(activeItems = emptyMap()) }

        nav = ChildLazyItemsNavigation()
        ctx = ctx.recreate()
        items = ctx.childLazyItems(source = nav)

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        val state1 = items.require(1).stateKeeper.consume<Int>(key = "key")
        val state2 = items.require(2).stateKeeper.consume<Int>(key = "key")
        val state3 = items.require(3).stateKeeper.consume<Int>(key = "key")

        assertEquals(1, state1)
        assertEquals(2, state2)
        assertEquals(3, state3)
    }

    @Test
    fun f4() {
        var nav = ChildLazyItemsNavigation<Int>()
        var ctx = TestComponentContext()

        var items =
            ctx.childLazyItems(
                source = nav,
                initialItems = listOf(1, 2, 3),
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )

        items.require(1).stateKeeper.register(key = "key") { 1 }
        items.require(2).stateKeeper.register(key = "key") { 2 }
        items.require(3).stateKeeper.register(key = "key") { 3 }
        nav.navigate { it.copy(activeItems = emptyMap()) }

        ctx = ctx.recreate()
        ctx.childLazyItems<Int>()
        nav = ChildLazyItemsNavigation()
        ctx = ctx.recreate()
        items = ctx.childLazyItems(source = nav)

        nav.navigate {
            it.copy(
                activeItems = mapOf(
                    1 to ActiveLifecycleState.CREATED,
                    2 to ActiveLifecycleState.STARTED,
                    3 to ActiveLifecycleState.RESUMED,
                ),
            )
        }

        val state1 = items.require(1).stateKeeper.consume<Int>(key = "key")
        val state2 = items.require(2).stateKeeper.consume<Int>(key = "key")
        val state3 = items.require(3).stateKeeper.consume<Int>(key = "key")

        assertEquals(1, state1)
        assertEquals(2, state2)
        assertEquals(3, state3)
    }
}
