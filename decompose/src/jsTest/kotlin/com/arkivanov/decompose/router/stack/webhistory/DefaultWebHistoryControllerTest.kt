package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.router.stack.TestStackRouter
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.router.stack.replaceCurrent
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class DefaultWebHistoryControllerTest {

    private val window = TestWindow()
    private val history = window.history
    private val controller = DefaultWebHistoryController(window)

    @Test
    fun WHEN_created_THEN_historyPaths_empty() {
        assertTrue(controller.historyPaths.isEmpty())
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_one_config_WHEN_attach_THEN_history_stack_is_correct() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))

        attach(router)

        assertStack(listOf("/0"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_configs_WHEN_attach_THEN_history_stack_is_correct() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))

        attach(router)

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun WHEN_router_push_THEN_url_pushed_to_history() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)

        router.push(Config(1))
        window.runPendingOperations()

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_configs_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.pop()
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/1"), 0)
    }

    @Test
    fun GIVEN_router_push_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()

        router.pop()
        window.runPendingOperations()

        assertStack(listOf("/0", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_tree_configs_WHEN_router_pop_two_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { it.dropLast(2) }
        window.runPendingOperations()

        assertStack(listOf("/0", "/1", "/2"), 0)
    }

    @Test
    fun GIVEN_router_push_two_WHEN_router_pop_two_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.navigate { it + listOf(Config(1), Config(2)) }
        window.runPendingOperations()

        router.navigate { it.dropLast(2) }
        window.runPendingOperations()

        assertStack(listOf("/0", "/1", "/2"), 0)
    }

    @Test
    fun GIVEN_router_push_and_pop_WHEN_router_push_same_config_THEN_history_changed_to_next_page() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        router.pop()
        window.runPendingOperations()

        router.push(Config(1))
        window.runPendingOperations()

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_push_and_pop_WHEN_router_push_another_config_THEN_history_changed_to_next_page() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        router.pop()
        window.runPendingOperations()

        router.push(Config(2))
        window.runPendingOperations()

        assertStack(listOf("/0", "/2"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_c_WHEN_navigate_to_a_d_THEN_history_is_a_d_and_d_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { listOf(Config(0), Config(3)) }
        window.runPendingOperations()

        assertStack(listOf("/0", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_c_WHEN_navigate_to_a_d_e_THEN_history_is_a_d_e_and_e_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { listOf(Config(0), Config(3), Config(4)) }
        window.runPendingOperations()

        assertStack(listOf("/0", "/3", "/4"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_a_c_THEN_history_is_a_c_and_c_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(0), Config(2)) }
        window.runPendingOperations()

        assertStack(listOf("/0", "/2"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_a_c_d_THEN_history_is_a_c_d_and_d_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(0), Config(2), Config(3)) }
        window.runPendingOperations()

        assertStack(listOf("/0", "/2", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_c_THEN_history_is_c_b_and_c_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(2)) }
        window.runPendingOperations()

        // Corner case: old pages remain in the history
        assertStack(listOf("/2", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_c_d_THEN_history_is_c_d_and_d_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(2), Config(3)) }
        window.runPendingOperations()

        assertStack(listOf("/2", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_WHEN_navigate_to_b_THEN_history_is_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)

        router.navigate { listOf(Config(1)) }
        window.runPendingOperations()

        assertStack(listOf("/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_WHEN_navigate_to_b_c_THEN_history_is_b_c_and_c_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)

        router.navigate { listOf(Config(1), Config(2)) }
        window.runPendingOperations()

        assertStack(listOf("/1", "/2"))
    }

    // Browser buttons tests

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_WHEN_go_back_THEN_stack_is_a() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()

        window.history.go(delta = -1)
        window.runPendingOperations()

        assertEquals(listOf(Config(0)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_WHEN_go_forward_THEN_history_is_a_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        window.history.go(delta = -1)
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_WHEN_go_forward_THEN_stack_is_a_b() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        window.history.go(delta = -1)
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertEquals(listOf(Config(0), Config(1)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_and_replace_current_with_c_WHEN_go_forward_THEN_history_is_c_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        window.history.go(delta = -1)
        window.runPendingOperations()
        router.replaceCurrent(Config(2))
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertStack(listOf("/2", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_and_replace_current_with_c_WHEN_go_forward_THEN_stack_is_c_b() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        window.history.go(delta = -1)
        window.runPendingOperations()
        router.replaceCurrent(Config(2))
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertEquals(listOf(Config(2), Config(1)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_navigate_to_c_WHEN_go_forward_THEN_stack_is_c_b() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)
        router.navigate { listOf(Config(2)) }
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertEquals(listOf(Config(2), Config(1)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_navigate_to_c_WHEN_go_forward_THEN_history_is_c_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)
        router.navigate { listOf(Config(2)) }
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertStack(listOf("/2", "/1"))
    }

    private fun attach(router: TestStackRouter<Config>) {
        controller.attach(
            navigator = router,
            stack = router.stack,
            getPath = { "/${it.value}" },
            getConfiguration = { Config(it.removePrefix("/").toInt()) },
        )

        window.runPendingOperations()
    }

    private fun assertStack(urls: List<String>, index: Int = urls.lastIndex) {
        history.assertStack(urls = urls, index = index)
        assertEquals(urls.take(index + 1), controller.historyPaths)
    }

    private fun isNode(): Boolean = jsTypeOf(kotlinx.browser.window) == "undefined"

    private data class Config(val value: Int)
}
