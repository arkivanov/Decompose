package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.TestBackCallback
import com.arkivanov.decompose.TestBackCallback.Event.OnBack
import com.arkivanov.decompose.assertEvents
import com.arkivanov.decompose.assertNoEvents
import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.backhandler.BackCallback
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildrenBackPressedTest : ChildrenTestBase() {

    @Test
    fun GIVEN_children_created_with_resumed_child_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_resumed_child_and_disabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_started_child_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_started_child_and_disabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_created_child_and_enabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_created_child_and_disabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_created_and_enabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by CREATED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        children.getByConfig(config = 1).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_started_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by STARTED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        children.getByConfig(config = 1).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_resumed_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by RESUMED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        children.getByConfig(config = 1).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_started_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_resumed_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_resumed_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by RESUMED, 4 by RESUMED) }
        children.getByConfig(config = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_started_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_created_and_enabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_created_child_and_switched_to_started_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_created_child_and_switched_to_resumed_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_created_child_and_switched_to_destroyed_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_started_child_and_switched_to_created_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by CREATED) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_started_child_and_switched_to_resumed_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED, 4 by CREATED) }

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_started_child_and_switched_to_destroyed_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by CREATED) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_resumed_child_and_switched_to_created_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_resumed_child_and_switched_to_started_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_resumed_child_and_switched_to_destroyed_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_backTransformer_returns_null_WHEN_back_THEN_returned_false() {
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED),
            backTransformer = { null },
        )

        val result = backDispatcher.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_backTransformer_returns_not_null_WHEN_back_THEN_navigated() {
        val children by context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED),
            backTransformer = { { stateOf() } },
        )

        backDispatcher.back()

        assertContentEquals(emptyList(), children)
    }

    @Test
    fun GIVEN_navigated_and_backTransformer_returns_null_WHEN_back_THEN_returned_false() {
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED),
            backTransformer = { state ->
                if (state.children.isNotEmpty()) {
                    { stateOf() }
                } else {
                    null
                }
            },
        )
        navigate { emptyList() }

        val result = backDispatcher.back()

        assertFalse(result)
    }

    @Test
    fun WHEN_back_THEN_onStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED),
            backTransformer = { { stateOf() } },
            onStateChanged = { newState, oldState -> results += newState to oldState },
        )
        results.clear()

        backDispatcher.back()

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED)), results)
    }

    @Test
    fun WHEN_back_and_navigate_recursively_THEN_childFactory_not_called_recursively() {
        var isNavigating = false
        var isCalledRecursively = false
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by RESUMED),
            backTransformer = { { stateOf(1 by RESUMED) } },
        ) { config, ctx ->
            if (isNavigating) {
                isCalledRecursively = true
            }

            if (config == 1) {
                isNavigating = true
                navigate { it + (3 by RESUMED) }
                isNavigating = false
            }

            Component(config, ctx)
        }

        backDispatcher.back()

        assertFalse(isCalledRecursively)
    }

    @Test
    fun WHEN_back_and_navigate_recursively_THEN_state_updated() {
        val children by context.children(
            initialState = stateOf(1 by DESTROYED, 2 by RESUMED),
            backTransformer = { { stateOf(1 by RESUMED) } },
        ) { config, ctx ->
            if (config == 1) {
                navigate { it + (3 by RESUMED) }
            }

            Component(config, ctx)
        }

        backDispatcher.back()

        children.assertChildren(1 to 1, 3 to 3)
    }

    @Test
    fun GIVEN_callback_registered_in_context_and_in_child_WHEN_back_THEN_child_callback_called() {
        val children by context.children(initialState = stateOf(1 by RESUMED))

        backDispatcher.register(TestBackCallback())
        val callback = TestBackCallback()
        children.getByConfig(1).requireInstance().backHandler.register(callback)

        backDispatcher.back()

        callback.assertEvents(OnBack)
    }

    @Test
    fun GIVEN_callback_registered_in_context_and_in_child_WHEN_back_THEN_context_callback_not_called() {
        val children by context.children(initialState = stateOf(1 by RESUMED))

        val callback = TestBackCallback()
        backDispatcher.register(callback)
        children.getByConfig(1).requireInstance().backHandler.register(TestBackCallback())

        backDispatcher.back()

        callback.assertNoEvents()
    }

    @Test
    fun GIVEN_callback_registered_in_child_and_in_context_WHEN_back_THEN_child_callback_called() {
        val children by context.children(initialState = stateOf(1 by RESUMED))

        val callback = TestBackCallback()
        children.getByConfig(1).requireInstance().backHandler.register(callback)
        backDispatcher.register(TestBackCallback())

        backDispatcher.back()

        callback.assertEvents(OnBack)
    }

    @Test
    fun GIVEN_callback_registered_in_child_and_in_context_WHEN_back_THEN_context_callback_not_called() {
        val children by context.children(initialState = stateOf(1 by RESUMED))

        children.getByConfig(1).requireInstance().backHandler.register(TestBackCallback())
        val callback = TestBackCallback()
        backDispatcher.register(callback)

        backDispatcher.back()

        callback.assertNoEvents()
    }
}
