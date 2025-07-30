package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.decompose.testutils.keys
import com.arkivanov.decompose.testutils.recreate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

@Suppress("TestFunctionName")
class ChildrenKeysTest : ChildrenTestBase() {

    @Test
    fun WHEN_created_with_multiple_children_THEN_keys_unique() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by STARTED, 3 by RESUMED))

        children.assertKeysUnique()
    }

    @Test
    fun WHEN_created_child_added_to_end_THEN_new_unique_key_generated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED))
        val keys = children.keys

        navigate { it + listOf(2 by CREATED) }

        assertEquals(keys, children.keys.dropLast(1))
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_created_child_added_to_front_THEN_new_unique_key_generated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED))
        val keys = children.keys

        navigate { listOf(2 by CREATED) + it }

        assertEquals(keys, children.keys.drop(1))
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_resumed_child_added_to_end_THEN_new_unique_key_generated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED))
        val keys = children.keys

        navigate { it + listOf(3 by RESUMED) }

        assertEquals(keys, children.keys.dropLast(1))
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_resumed_child_added_to_front_THEN_new_unique_key_generated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED))
        val keys = children.keys

        navigate { listOf(3 by RESUMED) + it }

        assertEquals(keys, children.keys.drop(1))
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_child_removed_from_end_THEN_remaining_keys_not_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED))
        val keys = children.keys

        navigate { it.dropLast(1) }

        assertEquals(keys.dropLast(1), children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_child_removed_from_front_THEN_remaining_keys_not_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED))
        val keys = children.keys

        navigate { it.drop(1) }

        assertEquals(keys.drop(1), children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_the_only_destroyed_child_replaced_THEN_key_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED))
        val keys = children.keys

        navigate { listOf(2 by DESTROYED) }

        assertNotEquals(keys, children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_the_only_created_child_replaced_THEN_key_changed() {
        val children by context.children(initialState = stateOf(1 by CREATED))
        val keys = children.keys

        navigate { listOf(2 by RESUMED) }

        assertNotEquals(keys, children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_last_child_replaced_THEN_last_key_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED))
        val keys = children.keys

        navigate { listOf(1 by CREATED, 3 by DESTROYED) }

        assertEquals(keys.dropLast(1), children.keys.dropLast(1))
        assertNotEquals(keys, children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun WHEN_first_child_replaced_THEN_first_key_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED))
        val keys = children.keys

        navigate { listOf(3 by CREATED, 2 by DESTROYED) }

        assertEquals(keys.drop(1), children.keys.drop(1))
        assertNotEquals(keys, children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun GIVEN_multiple_children_WHEN_shuffled_and_lifecycles_not_changed_THEN_keys_not_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val (key1, key2, key3, key4) = children.keys

        navigate { listOf(2 by CREATED, 4 by RESUMED, 3 by STARTED, 1 by DESTROYED) }

        assertEquals(listOf(key2, key4, key3, key1), children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun GIVEN_multiple_children_WHEN_shuffled_and_lifecycles_changed_THEN_keys_not_changed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val (key1, key2, key3, key4) = children.keys

        navigate { listOf(2 by RESUMED, 4 by DESTROYED, 3 by DESTROYED, 1 by STARTED) }

        assertEquals(listOf(key2, key4, key3, key1), children.keys)
        children.assertKeysUnique()
    }

    @Test
    fun GIVEN_multiple_children_WHEN_configuration_change_THEN_keys_not_changed() {
        var ctx = TestComponentContext()
        var children = ctx.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val keys = children.value.keys

        ctx = ctx.recreate(isConfigurationChange = true)
        children = ctx.children()

        assertEquals(keys, children.value.keys)
    }

    @Test
    fun GIVEN_multiple_children_WHEN_recreated_THEN_keys_not_changed() {
        var ctx = TestComponentContext()
        var children = ctx.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val keys = children.value.keys

        ctx = ctx.recreate(isConfigurationChange = false)
        children = ctx.children()

        assertEquals(keys, children.value.keys)
    }
}
