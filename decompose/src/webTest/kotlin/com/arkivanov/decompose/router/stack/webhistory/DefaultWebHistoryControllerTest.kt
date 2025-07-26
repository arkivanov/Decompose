package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.isNodeJs
import com.arkivanov.decompose.router.stack.TestStackRouter
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.router.stack.replaceCurrent
import com.arkivanov.decompose.router.webhistory.TestBrowserHistory
import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class DefaultWebHistoryControllerTest {

    private val history = TestBrowserHistory()
    private val controller = DefaultWebHistoryController(history)

    @Test
    fun WHEN_created_THEN_historyPaths_empty() {
        assertTrue(controller.historyPaths.isEmpty())
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_one_config_WHEN_attach_THEN_history_stack_is_correct() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))

        attach(router)

        assertStack(listOf("/0"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_configs_WHEN_attach_THEN_history_stack_is_correct() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))

        attach(router)

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun WHEN_router_push_THEN_url_pushed_to_history() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)

        router.pushNew(Config(1))
        history.runPendingOperations()

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_configs_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.pop()
        history.runPendingOperations()

        history.assertStack(listOf("/0", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_same_configs_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(0)))
        attach(router)

        router.pop()
        history.runPendingOperations()

        history.assertStack(listOf("/0", "/0"), 0)
    }

    @Test
    fun GIVEN_router_push_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()

        router.pop()
        history.runPendingOperations()

        assertStack(listOf("/0", "/1"), 0)
    }

    @Suppress("OPT_IN_USAGE")
    @Test
    fun GIVEN_router_push_same_config_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(0))
        history.runPendingOperations()

        router.pop()
        history.runPendingOperations()

        assertStack(listOf("/0", "/0"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_tree_configs_WHEN_router_pop_two_THEN_history_changed_to_previous_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { it.dropLast(2) }
        history.runPendingOperations()

        assertStack(listOf("/0", "/1", "/2"), 0)
    }

    @Test
    fun GIVEN_router_push_two_WHEN_router_pop_two_THEN_history_changed_to_previous_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.navigate { it + listOf(Config(1), Config(2)) }
        history.runPendingOperations()

        router.navigate { it.dropLast(2) }
        history.runPendingOperations()

        assertStack(listOf("/0", "/1", "/2"), 0)
    }

    @Test
    fun GIVEN_router_push_and_pop_WHEN_router_push_same_config_THEN_history_changed_to_next_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()
        router.pop()
        history.runPendingOperations()

        router.pushNew(Config(1))
        history.runPendingOperations()

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_push_and_pop_WHEN_router_push_another_config_THEN_history_changed_to_next_page() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()
        router.pop()
        history.runPendingOperations()

        router.pushNew(Config(2))
        history.runPendingOperations()

        assertStack(listOf("/0", "/2"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_c_WHEN_navigate_to_a_d_THEN_history_is_a_d_and_d_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { listOf(Config(0), Config(3)) }
        history.runPendingOperations()

        assertStack(listOf("/0", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_c_WHEN_navigate_to_a_d_e_THEN_history_is_a_d_e_and_e_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { listOf(Config(0), Config(3), Config(4)) }
        history.runPendingOperations()

        assertStack(listOf("/0", "/3", "/4"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_a_c_THEN_history_is_a_c_and_c_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(0), Config(2)) }
        history.runPendingOperations()

        assertStack(listOf("/0", "/2"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_a_c_d_THEN_history_is_a_c_d_and_d_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(0), Config(2), Config(3)) }
        history.runPendingOperations()

        assertStack(listOf("/0", "/2", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_c_THEN_history_is_c_b_and_c_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(2)) }
        history.runPendingOperations()

        // Corner case: old pages remain in the history
        assertStack(listOf("/2", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_c_d_THEN_history_is_c_d_and_d_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(2), Config(3)) }
        history.runPendingOperations()

        assertStack(listOf("/2", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_WHEN_navigate_to_b_THEN_history_is_b_and_b_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)

        router.navigate { listOf(Config(1)) }
        history.runPendingOperations()

        assertStack(listOf("/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_WHEN_navigate_to_b_c_THEN_history_is_b_c_and_c_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)

        router.navigate { listOf(Config(1), Config(2)) }
        history.runPendingOperations()

        assertStack(listOf("/1", "/2"))
    }

    // Browser buttons tests

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_WHEN_go_back_THEN_stack_is_a() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()

        history.go(delta = -1)
        history.runPendingOperations()

        assertEquals(listOf(Config(0)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_WHEN_go_forward_THEN_history_is_a_b_and_b_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()
        history.go(delta = -1)
        history.runPendingOperations()

        history.go(delta = 1)
        history.runPendingOperations()

        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_WHEN_go_forward_THEN_stack_is_a_b() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()
        history.go(delta = -1)
        history.runPendingOperations()

        history.go(delta = 1)
        history.runPendingOperations()

        assertEquals(listOf(Config(0), Config(1)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_and_replace_current_with_c_WHEN_go_forward_THEN_history_is_c_b_and_b_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()
        history.go(delta = -1)
        history.runPendingOperations()
        router.replaceCurrent(Config(2))
        history.runPendingOperations()

        history.go(delta = 1)
        history.runPendingOperations()

        assertStack(listOf("/2", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_and_replace_current_with_c_WHEN_go_forward_THEN_stack_is_c_b() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0)))
        attach(router)
        router.pushNew(Config(1))
        history.runPendingOperations()
        history.go(delta = -1)
        history.runPendingOperations()
        router.replaceCurrent(Config(2))
        history.runPendingOperations()

        history.go(delta = 1)
        history.runPendingOperations()

        assertEquals(listOf(Config(2), Config(1)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_navigate_to_c_WHEN_go_forward_THEN_stack_is_c_b() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)
        router.navigate { listOf(Config(2)) }
        history.runPendingOperations()

        history.go(delta = 1)
        history.runPendingOperations()

        assertEquals(listOf(Config(2), Config(1)), router.configurations)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_navigate_to_c_WHEN_go_forward_THEN_history_is_c_b_and_b_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router)
        router.navigate { listOf(Config(2)) }
        history.runPendingOperations()

        history.go(delta = 1)
        history.runPendingOperations()

        assertStack(listOf("/2", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_callback_deny_back_THEN_history_is_a_b_and_b_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router) { _, _ -> false }

        history.go(-1)
        history.runPendingOperations()
        assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_callback_allow_back_THEN_history_is_a_and_a_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router) { _, _ -> true }

        history.go(-1)
        history.runPendingOperations()

        assertStack(listOf("/0", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_callback_deny_forward_THEN_history_is_a_b_and_a_is_active() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        attach(router) { newStack, _ -> newStack.last().value != 1 }

        history.go(-1)
        history.runPendingOperations()
        history.go(1)
        history.runPendingOperations()

        assertStack(listOf("/0", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_backward_THEN_onWebNavigation_receives_correct_stacks() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        var newStackVar = emptyList<Config>()
        var oldStackVar = emptyList<Config>()
        attach(router) { newStack, oldStack ->
            newStackVar = newStack
            oldStackVar = oldStack
            true
        }

        history.go(-1)
        history.runPendingOperations()

        assertEquals(listOf(Config(0)), newStackVar)
        assertEquals(listOf(Config(0), Config(1)), oldStackVar)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_forward_THEN_onWebNavigation_receives_correct_stacks() {
        if (isNodeJs()) {
            return
        }

        val router = TestStackRouter(listOf(Config(0), Config(1)))
        var newStackVar: List<Config>
        var oldStackVar: List<Config>
        attach(router) { newStack, oldStack ->
            newStackVar = newStack
            oldStackVar = oldStack
            true
        }

        history.go(-1)
        history.runPendingOperations()
        newStackVar = emptyList()
        oldStackVar = emptyList()
        history.go(1)
        history.runPendingOperations()

        assertEquals(listOf(Config(0), Config(1)), newStackVar)
        assertEquals(listOf(Config(0)), oldStackVar)
    }

    private fun attach(
        router: TestStackRouter<Config>,
        callback: (newStack: List<Config>, oldStack: List<Config>) -> Boolean = { _, _ -> true },
    ) {
        controller.attach(
            navigator = router,
            stack = router.stack,
            serializer = Config.serializer(),
            getPath = { "/${it.value}" },
            getConfiguration = { Config(it.removePrefix("/").toInt()) },
            onWebNavigation = callback,
        )

        history.runPendingOperations()
    }

    private fun assertStack(urls: List<String>, index: Int = urls.lastIndex) {
        history.assertStack(urls = urls, index = index)
        assertEquals(urls.take(index + 1), controller.historyPaths)
    }

    @Serializable
    private data class Config(val value: Int)
}
