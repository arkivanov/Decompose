package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.ChildNavState.Status.ACTIVE
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.INACTIVE
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.backhandler.BackCallback
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
internal class ChildrenBackPressedTest : ChildrenTestBase() {

    @Test
    fun GIVEN_children_created_with_active_child_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_active_child_and_disabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 3).requireInstance().backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_inactive_child_and_enabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_children_created_with_inactive_child_and_disabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 2).requireInstance().backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_inactive_and_enabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        navigate { listOf(1 by INACTIVE, 2 by INACTIVE, 3 by ACTIVE) }
        children.getById(id = 1).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_destroyed_to_active_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        navigate { listOf(1 by ACTIVE, 2 by INACTIVE, 3 by ACTIVE) }
        children.getById(id = 1).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_inactive_to_active_and_enabled_callback_registered_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        navigate { listOf(1 by DESTROYED, 2 by ACTIVE, 3 by ACTIVE) }
        children.getById(id = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_active_to_inactive_and_enabled_callback_registered_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }
        children.getById(id = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_inactive_child_and_switched_to_active_WHEN_back_THEN_callback_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by ACTIVE, 3 by ACTIVE) }

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_inactive_child_and_switched_to_destroyed_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 2).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by ACTIVE) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_active_child_and_switched_to_inactive_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_enabled_callback_registered_in_active_child_and_switched_to_destroyed_WHEN_back_THEN_callback_not_called() {
        var isCalled = false
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 3).requireInstance().backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_backTransformer_returns_null_WHEN_back_THEN_returned_false() {
        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            backTransformer = { null },
        )

        val result = backDispatcher.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_backTransformer_returns_not_null_WHEN_back_THEN_navigated() {
        val children by context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            backTransformer = { { stateOf() } },
        )

        backDispatcher.back()

        assertContentEquals(emptyList(), children)
    }

    @Test
    fun GIVEN_navigated_and_backTransformer_returns_null_WHEN_back_THEN_returned_false() {
        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            backTransformer = { navState ->
                if (navState.children.isNotEmpty()) {
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
    fun WHEN_back_THEN_onNavStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()
        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            backTransformer = { { stateOf() } },
            onNavStateChanged = { newNavState, oldNavState -> results += newNavState to oldNavState },
        )
        results.clear()

        backDispatcher.back()

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)), results)
    }
}
