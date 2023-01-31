package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.ChildNavState.Status.ACTIVE
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.INACTIVE
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.stop
import kotlin.test.Test
import kotlin.test.assertEquals

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
internal class ChildrenLifecycleTest : ChildrenTestBase() {

    @Test
    fun WHEN_created_THEN_initial_state() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        children.assertChildren(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun WHEN_created_THEN_lifecycles_correct() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        assertEquals(Lifecycle.State.CREATED, children.getById(id = 2).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, children.getById(id = 3).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_children_added_THEN_state_updated() {
        val children by context.children()

        navigate { it + (1 by DESTROYED) }
        navigate { it + (2 by INACTIVE) }
        navigate { it + (3 by ACTIVE) }

        children.assertChildren(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun WHEN_children_added_THEN_lifecycles_correct() {
        val children by context.children()

        navigate { it + (1 by DESTROYED) }
        navigate { it + (2 by INACTIVE) }
        navigate { it + (3 by ACTIVE) }

        assertEquals(Lifecycle.State.CREATED, children.getById(id = 2).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, children.getById(id = 3).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_destroyed_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { state -> state.filterNot { it.configuration.id == 1 } }

        children.assertChildren(2 to 2, 3 to 3)
    }

    @Test
    fun WHEN_inactive_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { state -> state.filterNot { it.configuration.id == 2 } }

        children.assertChildren(1 to null, 3 to 3)
    }

    @Test
    fun WHEN_inactive_child_removed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component = children.getById(id = 2).requireInstance()

        navigate { state -> state.filterNot { it.configuration.id == 2 } }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_active_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { state -> state.filterNot { it.configuration.id == 3 } }

        children.assertChildren(1 to null, 2 to 2)
    }

    @Test
    fun WHEN_active_child_removed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component = children.getById(id = 3).requireInstance()

        navigate { state -> state.filterNot { it.configuration.id == 3 } }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_all_children_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { emptyList() }

        children.assertChildren()
    }

    @Test
    fun WHEN_all_children_removed_THEN_lifecycles_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component2 = children.getById(id = 2).requireInstance()
        val component3 = children.getById(id = 3).requireInstance()

        navigate { emptyList() }

        assertEquals(Lifecycle.State.DESTROYED, component2.lifecycle.state)
        assertEquals(Lifecycle.State.DESTROYED, component3.lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_inactive_THEN_lifecycle_created() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { listOf(1 by INACTIVE, 2 by INACTIVE, 3 by ACTIVE) }

        assertEquals(Lifecycle.State.CREATED, children.getById(id = 1).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_inactive_to_active_THEN_lifecycle_resumed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { listOf(1 by DESTROYED, 2 by ACTIVE, 3 by ACTIVE) }

        assertEquals(Lifecycle.State.RESUMED, children.getById(id = 2).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_inactive_to_destroyed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component = children.getById(id = 2).requireInstance()

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by ACTIVE) }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_active_to_inactive_THEN_lifecycle_stopped() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }

        assertEquals(Lifecycle.State.CREATED, children.getById(id = 3).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_active_to_destroyed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component = children.getById(id = 3).requireInstance()

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_context_lifecycle_stopped_THEN_all_component_lifecycles_stopped() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        lifecycle.stop()

        assertEquals(Lifecycle.State.CREATED, children.getById(id = 2).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, children.getById(id = 3).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_context_lifecycle_destroyed_THEN_all_component_lifecycles_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component2 = children.getById(id = 2).requireInstance()
        val component3 = children.getById(id = 3).requireInstance()

        lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, component2.lifecycle.state)
        assertEquals(Lifecycle.State.DESTROYED, component3.lifecycle.state)
    }
}
