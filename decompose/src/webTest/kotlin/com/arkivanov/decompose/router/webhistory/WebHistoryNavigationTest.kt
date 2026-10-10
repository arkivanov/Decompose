package com.arkivanov.decompose.router.webhistory

import kotlin.test.Test
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

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

    @Test
    fun GIVEN_three_levels_nested_with_one_child_each_WHEN_inner_pushed_and_go_back_and_inner_pushed_THEN_two_items_in_history() {
        val nav =
            TestWebNavigation(initialHistory = listOf(1)) {
                TestWebNavigation(initialHistory = listOf(1)) {
                    TestWebNavigation(initialHistory = listOf(1))
                }
            }

        enableWebHistory(nav, history)

        nav.requireChild(1).requireChild(1).navigate(listOf(1, 2))
        history.navigate(delta = -1)
        nav.requireChild(1).requireChild(1).navigate(listOf(1, 2))

        assertHistory(nav = nav, urls = listOf("/1/1/1", "/1/1/2"))
    }

    @Test
    fun GIVEN_created_one_root_and_two_children_WHEN_root_replaced_with_with_one_child_THEN_one_item_in_history() {
        val nav =
            TestWebNavigation(initialHistory = listOf(1)) { cfg ->
                when (cfg) {
                    1 -> TestWebNavigation(initialHistory = listOf(12, 13))
                    2 -> TestWebNavigation(initialHistory = listOf(22))
                    else -> null
                }
            }

        enableWebHistory(nav, history)

        nav.navigate(listOf(2))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/2/22"))
    }

    @Test
    fun GIVEN_previous_history_WHEN_created_with_new_version_and_same_stack_size_THEN_current_history_item_replaced() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()

        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 3))
        enableWebHistory(nav, history)

        assertHistory(nav = nav, urls = listOf("/1", "/3"))
    }

    @Test
    fun GIVEN_previous_history_WHEN_created_with_new_version_and_longer_stack_THEN_current_history_item_replaced() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()

        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 2, 3))
        enableWebHistory(nav, history)

        history.assertStack(urls = listOf("/1", "/3"))
        nav.assertHistory(urls = listOf("/1", "/2", "/3"))
    }

    @Test
    fun GIVEN_previous_history_WHEN_created_with_new_version_and_shorter_stack_THEN_current_history_item_replaced() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()

        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(3))
        enableWebHistory(nav, history)

        history.assertStack(urls = listOf("/1", "/3"))
        nav.assertHistory(urls = listOf("/3"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_WHEN_go_back_THEN_recreated() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 2))
        var isRecreated = false
        enableWebHistory(navigation = nav, browserHistory = history, onRecreate = { isRecreated = true })

        history.navigate(delta = -1)

        assertTrue(isRecreated)
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_WHEN_go_back_THEN_browser_history_popped_and_nav_history_remains() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 2))
        enableWebHistory(navigation = nav, browserHistory = history)

        history.navigate(delta = -1)

        history.assertStack(urls = listOf("/1", "/2"), index = 0)
        nav.assertHistory(urls = listOf("/1", "/2"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_and_same_stack_size_WHEN_go_back_and_onBeforeNavigate_false_THEN_history_remains() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 3), onBeforeNavigate = { false })
        enableWebHistory(navigation = nav, browserHistory = history)

        history.navigate(delta = -1)

        assertHistory(nav = nav, urls = listOf("/1", "/3"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_and_longer_stack_WHEN_go_back_and_onBeforeNavigate_false_THEN_history_remains() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 2, 3), onBeforeNavigate = { false })
        enableWebHistory(navigation = nav, browserHistory = history)

        history.navigate(delta = -1)

        history.assertStack(urls = listOf("/1", "/3"))
        nav.assertHistory(urls = listOf("/1", "/2", "/3"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_and_shorter_stack_WHEN_go_back_and_onBeforeNavigate_false_THEN_history_remains() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2, 3))
        history.runPendingOperations()
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 4), onBeforeNavigate = { false })
        enableWebHistory(navigation = nav, browserHistory = history)

        history.navigate(delta = -1)

        history.assertStack(urls = listOf("/1", "/2", "/4"))
        nav.assertHistory(urls = listOf("/1", "/4"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_and_same_stack_size_WHEN_navigate_replace_children_THEN_history_updated() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        nav.navigate(listOf(1, 2))
        history.runPendingOperations()
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 3))
        enableWebHistory(navigation = nav, browserHistory = history)

        nav.navigate(listOf(4, 5))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/4", "/5"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_and_longer_stack_WHEN_navigate_replace_children_THEN_history_updated() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(nav, history)
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1, 2))
        enableWebHistory(navigation = nav, browserHistory = history)

        nav.navigate(listOf(3, 4))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/3", "/4"))
    }

    @Test
    fun GIVEN_previous_history_and_created_with_new_version_and_shorter_stack_WHEN_navigate_replace_children_THEN_history_updated() {
        history.schemaVersion = "1"
        var nav = TestWebNavigation(initialHistory = listOf(1, 2))
        enableWebHistory(nav, history)
        history.schemaVersion = "2"
        nav = TestWebNavigation(initialHistory = listOf(1))
        enableWebHistory(navigation = nav, browserHistory = history)

        nav.navigate(listOf(3))
        history.runPendingOperations()

        assertHistory(nav = nav, urls = listOf("/3"))
    }

    private fun assertHistory(nav: TestWebNavigation, urls: List<String>, index: Int = urls.lastIndex) {
        history.assertStack(urls = urls, index = index)
        nav.assertHistory(urls = urls.slice(0..index))
    }
}
