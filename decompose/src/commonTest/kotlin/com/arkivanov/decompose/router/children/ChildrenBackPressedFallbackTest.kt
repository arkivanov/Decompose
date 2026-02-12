package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.backhandler.addDirectInput
import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.decompose.testutils.getValue
import kotlin.test.Test
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildrenBackPressedFallbackTest : ChildrenTestBase() {

    @Test
    fun GIVEN_children_created_with_resumed_child_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_resumed_child_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_started_child_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_started_child_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_created_child_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_created_child_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_created_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by CREATED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 1).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_created_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by CREATED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 1).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_started_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by STARTED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 1).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_started_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by STARTED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 1).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_resumed_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by RESUMED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 1).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_resumed_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by RESUMED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 1).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_started_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 2).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_started_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 2).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_resumed_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 2).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_resumed_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }
        val child = children.getByConfig(config = 2).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_resumed_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by RESUMED, 4 by RESUMED) }
        val child = children.getByConfig(config = 3).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_resumed_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by RESUMED, 4 by RESUMED) }
        val child = children.getByConfig(config = 3).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_started_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }
        val child = children.getByConfig(config = 4).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_started_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }
        val child = children.getByConfig(config = 4).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_created_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }
        val child = children.getByConfig(config = 4).requireInstance()

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_created_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }
        val child = children.getByConfig(config = 4).requireInstance()

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_started_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_started_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_resumed_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_resumed_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_destroyed_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        val input = child.navigationEventDispatcher.addDirectInput()
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        input.backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_destroyed_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        val input = child.navigationEventDispatcher.addDirectInput()
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        input.forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_created_child_switched_to_destroyed_WHEN_child_input_added_THEN_exception_thrown() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 2).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        assertFailsWith<IllegalStateException> {
            child.navigationEventDispatcher.addDirectInput()
        }
    }

    @Test
    fun GIVEN_started_child_switched_to_created_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by CREATED) }

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_started_child_switched_to_created_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by CREATED) }

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_started_child_switched_to_resumed_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED, 4 by CREATED) }

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_started_child_switched_to_resumed_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED, 4 by CREATED) }

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_started_child_switched_to_destroyed_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        val input = child.navigationEventDispatcher.addDirectInput()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by CREATED) }

        input.backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_started_child_switched_to_destroyed_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        val input = child.navigationEventDispatcher.addDirectInput()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by CREATED) }

        input.forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_started_child_destroyed_WHEN_input_added_to_child_THEN_exception_thrown() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 3).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by CREATED) }

        assertFailsWith<IllegalStateException> {
            child.navigationEventDispatcher.addDirectInput()
        }
    }

    @Test
    fun GIVEN_resumed_child_switched_to_created_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_resumed_child_switched_to_created_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_resumed_child_switched_to_started_WHEN_child_back_THEN_fallback_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }

        child.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_resumed_child_switched_to_started_WHEN_child_forward_THEN_fallback_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }

        child.navigationEventDispatcher.addDirectInput().forwardCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_resumed_child_switched_to_destroyed_WHEN_child_back_THEN_fallback_not_called() {
        var isCalled = false
        onBackCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        val input = child.navigationEventDispatcher.addDirectInput()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        input.backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_resumed_child_switched_to_destroyed_WHEN_child_forward_THEN_fallback_not_called() {
        var isCalled = false
        onForwardCompletedFallback = { isCalled = true }
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        val input = child.navigationEventDispatcher.addDirectInput()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        input.forwardCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_resumed_child_switched_to_destroyed_WHEN_child_input_added_THEN_exception_thrown() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val child = children.getByConfig(config = 4).requireInstance()
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        assertFailsWith<IllegalStateException> {
            child.navigationEventDispatcher.addDirectInput()
        }
    }
}
