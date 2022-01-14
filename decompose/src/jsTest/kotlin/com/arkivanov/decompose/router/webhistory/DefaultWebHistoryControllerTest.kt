package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.TestRouter
import com.arkivanov.decompose.router.pop
import com.arkivanov.decompose.router.push
import com.arkivanov.essenty.parcelable.Parcelable
import kotlin.test.Test
import kotlin.test.assertEquals

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
class DefaultWebHistoryControllerTest {

    private val window = TestWindow()
    private val history = window.history
    private val controller = DefaultWebHistoryController(window)

    @Test
    fun GIVEN_router_with_initial_stack_of_one_config_WHEN_attach_THEN_history_stack_is_correct() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))

        attach(router)

        history.assertStack(listOf("/0"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_configs_WHEN_attach_THEN_history_stack_is_correct() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))

        attach(router)

        history.assertStack(listOf("/0", "/1"))
    }

    @Test
    fun WHEN_router_push_THEN_url_pushed_to_history() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)

        router.push(Config(1))
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_two_configs_WHEN_router_pop_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
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

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()

        router.pop()
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_tree_configs_WHEN_router_pop_two_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { it.dropLast(2) }
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/1", "/2"), 0)
    }

    @Test
    fun GIVEN_router_push_two_WHEN_router_pop_two_THEN_history_changed_to_previous_page() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.navigate { it + listOf(Config(1), Config(2)) }
        window.runPendingOperations()

        router.navigate { it.dropLast(2) }
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/1", "/2"), 0)
    }

    @Test
    fun GIVEN_router_push_and_pop_WHEN_router_push_same_config_THEN_history_changed_to_next_page() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        router.pop()
        window.runPendingOperations()

        router.push(Config(1))
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_push_and_pop_WHEN_router_push_another_config_THEN_history_changed_to_next_page() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        router.pop()
        window.runPendingOperations()

        router.push(Config(2))
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/2"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_c_WHEN_navigate_to_a_d_THEN_history_is_a_d_and_d_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { listOf(Config(0), Config(3)) }
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_c_WHEN_navigate_to_a_d_e_THEN_history_is_a_d_e_and_e_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1), Config(2)))
        attach(router)

        router.navigate { listOf(Config(0), Config(3), Config(4)) }
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/3", "/4"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_a_c_THEN_history_is_a_c_and_c_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(0), Config(2)) }
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/2"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_a_c_d_THEN_history_is_a_c_d_and_d_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(0), Config(2), Config(3)) }
        window.runPendingOperations()

        history.assertStack(listOf("/0", "/2", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_c_THEN_history_is_c_b_and_c_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(2)) }
        window.runPendingOperations()

        // Corner case: old pages remain in the history
        history.assertStack(listOf("/2", "/1"), 0)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_WHEN_navigate_to_c_d_THEN_history_is_c_d_and_d_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
        attach(router)

        router.navigate { listOf(Config(2), Config(3)) }
        window.runPendingOperations()

        history.assertStack(listOf("/2", "/3"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_WHEN_navigate_to_b_THEN_history_is_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)

        router.navigate { listOf(Config(1)) }
        window.runPendingOperations()

        history.assertStack(listOf("/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_WHEN_navigate_to_b_c_THEN_history_is_b_c_and_c_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)

        router.navigate { listOf(Config(1), Config(2)) }
        window.runPendingOperations()

        history.assertStack(listOf("/1", "/2"))
    }

    // Browser buttons tests

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_WHEN_go_back_THEN_stack_is_a() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()

        window.history.go(delta = -1)
        window.runPendingOperations()

        assertEquals(listOf(Config(0)), router.stack)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_WHEN_go_forward_THEN_history_is_a_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        window.history.go(delta = -1)
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        window.history.assertStack(listOf("/0", "/1"))
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_and_pushed_b_and_go_back_WHEN_go_forward_THEN_stack_is_a_b() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0)))
        attach(router)
        router.push(Config(1))
        window.runPendingOperations()
        window.history.go(delta = -1)
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertEquals(listOf(Config(0), Config(1)), router.stack)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_navigate_to_c_WHEN_go_forward_THEN_stack_is_c_b() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
        attach(router)
        router.navigate { listOf(Config(2)) }
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        assertEquals(listOf(Config(2), Config(1)), router.stack)
    }

    @Test
    fun GIVEN_router_with_initial_stack_of_a_b_and_navigate_to_c_WHEN_go_forward_THEN_history_is_c_b_and_b_is_active() {
        if (isNode()) {
            return
        }

        val router = TestRouter(listOf(Config(0), Config(1)))
        attach(router)
        router.navigate { listOf(Config(2)) }
        window.runPendingOperations()

        window.history.go(delta = 1)
        window.runPendingOperations()

        history.assertStack(listOf("/2", "/1"))
    }

    private fun attach(router: TestRouter<Config>) {
        controller.attach(
            router = router,
            getPath = { "/${it.value}" },
            getConfiguration = { Config(it.removePrefix("/").toInt()) },
        )

        window.runPendingOperations()
    }

    private fun isNode(): Boolean = jsTypeOf(kotlinx.browser.window) == "undefined"

    private data class Config(val value: Int) : Parcelable
}
