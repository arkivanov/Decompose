package com.arkivanov.decompose.router.webhistory

import kotlin.test.Test
import kotlin.test.assertFailsWith

@Suppress("TestFunctionName")
class WebHistoryNavigationTest {

    private val history = TestBrowserHistory()

    @Test
    fun WHEN_created_with_no_items_in_root_THEN_ISE_thrown() {
        val nav = TestWebNavigation(initialHistory = emptyList())

        assertFailsWith<IllegalStateException> {
            enableWebHistory(nav, history)
        }
    }

    @Test
    fun WHEN_created_with_no_items_in_child_THEN_ISE_thrown() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = emptyList())
                        else -> null
                    }
                },
            )

        assertFailsWith<IllegalStateException> {
            enableWebHistory(nav, history)
        }
    }

    @Test
    fun WHEN_removed_all_items_from_child_THEN_ISE_thrown() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)

        assertFailsWith<IllegalStateException> {
            nav.requireChild(config = 1).navigate(emptyList())
        }
    }

    @Test
    fun WHEN_created_with_one_item_THEN_one_item_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)

        assertHistory(nav = nav, urls = listOf("/1"))
    }

    @Test
    fun WHEN_created_with_two_items_THEN_one_item_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1, 2))
        enableWebHistory(nav, history)

        history.assertStack(urls = listOf("/2"))
        nav.assertHistory(listOf(1, 2))
    }

    @Test
    fun WHEN_pushed_one_item_THEN_two_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1", "/2"))
    }

    @Test
    fun WHEN_pushed_one_item_and_popped_one_item_THEN_two_items_in_browser_history_and_first_item_active() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2"), index = 0)
    }

    @Test
    fun WHEN_pushed_one_item_and_popped_one_item_and_pushed_another_item_THEN_two_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        nav.navigate(listOf(1, 3))

        assertHistory(nav = nav, urls = listOf("/1", "/3"))
    }

    @Test
    fun WHEN_pushed_two_items_and_popped_two_items_THEN_three_items_in_browser_history_and_first_item_active() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2, 3))
        nav.navigate(listOf(1))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2", "/3"), index = 0)
    }

    @Test
    fun WHEN_pushed_two_items_and_popped_two_items_and_pushed_another_item_THEN_two_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2, 3))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        nav.navigate(listOf(1, 4))

        assertHistory(nav = nav, urls = listOf("/1", "/4"))
    }

    @Test
    fun WHEN_pushed_one_item_and_history_go_back_one_item_THEN_two_items_in_browser_history_and_first_item_active() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.navigate(delta = -1)

        assertHistory(nav = nav, urls = listOf("/1", "/2"), index = 0)
    }

    @Test
    fun WHEN_pushed_one_item_and_history_go_back_one_item_and_history_go_forward_one_item_THEN_two_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.navigate(delta = -1)
        history.navigate(delta = 1)

        assertHistory(nav = nav, urls = listOf("/1", "/2"))
    }

    @Test
    fun WHEN_pushed_one_item_and_popped_one_item_and_history_go_forward_one_item_THEN_two_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        history.navigate(delta = 1)

        assertHistory(nav = nav, urls = listOf("/1", "/2"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_THEN_two_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_child_popped_one_item_THEN_two_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.requireChild(config = 1).navigate(listOf(11))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22"), index = 0)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_root_pushed_one_item_THEN_two_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1/11", "/2"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_root_pushed_one_item_and_root_popped_one_item_THEN_two_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/2"), index = 0)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_THEN_three_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_and_root_popped_item_THEN_three_items_in_browser_history_and_second_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2"), index = 1)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_and_root_popped_one_item_and_child_popped_one_item_THEN_three_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        nav.requireChild(config = 1).navigate(listOf(11))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2"), index = 0)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_root_pushed_one_item_with_one_child_item_THEN_two_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        2 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1", "/2/11"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_THEN_three_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        2 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(11, 22))

        assertHistory(nav = nav, urls = listOf("/1", "/2/11", "/2/22"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_child_popped_one_item_THEN_three_items_in_browser_history_and_second_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        2 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(11, 22))
        nav.requireChild(config = 2).navigate(listOf(11))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2/11", "/2/22"), index = 1)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_root_popped_one_item_THEN_three_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        2 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(11, 22))
        nav.navigate(listOf(1))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2/11", "/2/22"), index = 0)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_root_popped_one_item_and_root_pushed_one_item_THEN_two_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        2 -> TestWebNavigation(initialHistory = listOf(11))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(11, 22))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        nav.navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1", "/2/11"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_THEN_four_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_root_popped_one_item_THEN_four_items_in_browser_history_and_second_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        nav.navigate(listOf(1))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"), index = 1)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_root_popped_one_item_and_root_pushed_one_item_THEN_three_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        nav.navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111"))
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_history_go_back_one_item_THEN_four_items_in_browser_history_and_third_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        history.navigate(delta = -1)

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"), index = 2)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_history_go_back_two_items_THEN_four_items_in_browser_history_and_second_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        history.navigate(delta = -2)

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"), index = 1)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_history_go_back_three_items_THEN_four_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        history.navigate(delta = -3)

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"), index = 0)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_history_go_back_three_items_and_history_go_forward_one_item_THEN_four_items_in_browser_history_and_second_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        history.navigate(delta = -3)
        history.navigate(delta = 1)

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"), index = 1)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_history_go_back_three_items_and_history_go_forward_two_items_THEN_four_items_in_browser_history_and_third_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        history.navigate(delta = -3)
        history.navigate(delta = 2)

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"), index = 2)
    }

    @Test
    fun WHEN_created_with_one_root_item_and_one_child_item_and_child_pushed_one_item_and_root_pushed_one_item_with_one_child_item_and_child_pushed_one_item_and_history_go_back_three_items_and_history_go_forward_three_items_THEN_four_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11))
                        2 -> TestWebNavigation(initialHistory = listOf(111))
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.navigate(listOf(1, 2))
        nav.requireChild(config = 2).navigate(listOf(111, 222))
        history.navigate(delta = -3)

        history.navigate(delta = 3)

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/2/111", "/2/222"))
    }

    @Test
    fun WHEN_created_one_item_and_pushed_one_item_and_history_go_back_one_item_and_onBeforeNavigate_false_THEN_two_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1), onBeforeNavigate = { false })
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.navigate(delta = -1)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2"))
    }

    @Test
    fun WHEN_created_one_item_and_pushed_two_items_and_history_go_back_one_item_and_onBeforeNavigate_false_THEN_three_items_in_browser_history() {
        val nav = TestWebNavigation(initialHistory = listOf(1), onBeforeNavigate = { false })
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2, 3))
        history.navigate(delta = -2)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2", "/3"))
    }

    @Test
    fun WHEN_created_one_item_and_pushed_one_item_and_and_popped_one_item_and_history_go_forward_one_item_and_onBeforeNavigate_false_THEN_two_items_in_browser_history_and_first_item_active() {
        val nav = TestWebNavigation(initialHistory = listOf(1), onBeforeNavigate = { false })
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        history.navigate(delta = 1)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2"), index = 0)
    }

    @Test
    fun WHEN_created_one_item_and_pushed_two_items_and_and_popped_two_items_and_history_go_forward_two_items_and_onBeforeNavigate_false_THEN_three_items_in_browser_history_and_first_item_active() {
        val nav = TestWebNavigation(initialHistory = listOf(1), onBeforeNavigate = { false })
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2, 3))
        nav.navigate(listOf(1))
        history.runPendingOperations()
        history.navigate(delta = 2)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1", "/2", "/3"), index = 0)
    }

    @Test
    fun WHEN_created_one_root_item_and_one_child_item_and_child_pushed_one_item_and_history_go_back_one_item_and_child_onBeforeNavigate_false_THEN_two_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11), onBeforeNavigate = { false })
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        history.navigate(delta = -1)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22"))
    }

    @Test
    fun WHEN_created_one_root_item_and_one_child_item_and_child_pushed_two_items_and_history_go_back_two_items_and_child_onBeforeNavigate_false_THEN_three_items_in_browser_history() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11), onBeforeNavigate = { false })
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22, 33))
        history.navigate(delta = -2)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/1/33"))
    }

    @Test
    fun WHEN_created_one_root_item_and_one_child_item_and_child_pushed_one_item_and_child_popped_one_item_and_history_go_forward_one_item_and_child_onBeforeNavigate_false_THEN_two_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11), onBeforeNavigate = { false })
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22))
        nav.requireChild(config = 1).navigate(listOf(11))
        history.runPendingOperations()
        history.navigate(delta = 1)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22"), index = 0)
    }

    @Test
    fun WHEN_created_one_root_item_and_one_child_item_and_child_pushed_two_items_and_child_popped_two_items_and_history_go_forward_two_items_and_child_onBeforeNavigate_false_THEN_three_items_in_browser_history_and_first_item_active() {
        val nav =
            TestWebNavigation(
                initialHistory = listOf(1),
                childFactory = { config ->
                    when (config) {
                        1 -> TestWebNavigation(initialHistory = listOf(11), onBeforeNavigate = { false })
                        else -> null
                    }
                },
            )

        enableWebHistory(nav, history)
        nav.requireChild(config = 1).navigate(listOf(11, 22, 33))
        nav.requireChild(config = 1).navigate(listOf(11))
        history.runPendingOperations()
        history.navigate(delta = 2)
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/1/11", "/1/22", "/1/33"), index = 0)
    }

    private fun assertHistory(nav: TestWebNavigation, urls: List<String>, index: Int = urls.lastIndex) {
        history.assertStack(urls = urls, index = index)
        nav.assertHistory(urls = urls.slice(0..index))
    }
}
