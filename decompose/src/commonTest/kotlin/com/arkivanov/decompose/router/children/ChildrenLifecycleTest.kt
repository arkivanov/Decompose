package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DecomposeExperimentFlags
import com.arkivanov.decompose.getValue
import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.stop
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildrenLifecycleTest : ChildrenTestBase() {

    @Test
    fun WHEN_created_THEN_initial_state() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        children.assertChildren(1 to null, 2 to 2, 3 to 3, 4 to 4)
    }

    @Test
    fun WHEN_created_THEN_lifecycles_correct() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 2).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.STARTED, children.getByConfig(config = 3).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, children.getByConfig(config = 4).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_children_added_THEN_state_updated() {
        val children by context.children()

        navigate { it + (1 by DESTROYED) }
        navigate { it + (2 by CREATED) }
        navigate { it + (3 by STARTED) }
        navigate { it + (4 by RESUMED) }

        children.assertChildren(1 to null, 2 to 2, 3 to 3, 4 to 4)
    }

    @Test
    fun WHEN_children_added_THEN_lifecycles_correct() {
        val children by context.children()

        navigate { it + (1 by DESTROYED) }
        navigate { it + (2 by CREATED) }
        navigate { it + (3 by STARTED) }
        navigate { it + (4 by RESUMED) }

        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 2).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.STARTED, children.getByConfig(config = 3).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, children.getByConfig(config = 4).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_destroyed_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { state -> state.filterNot { it.configuration == 1 } }

        children.assertChildren(2 to 2, 3 to 3, 4 to 4)
    }

    @Test
    fun WHEN_created_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { state -> state.filterNot { it.configuration == 2 } }

        children.assertChildren(1 to null, 3 to 3, 4 to 4)
    }

    @Test
    fun WHEN_created_child_removed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component = children.getByConfig(config = 2).requireInstance()

        navigate { state -> state.filterNot { it.configuration == 2 } }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_started_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { state -> state.filterNot { it.configuration == 3 } }

        children.assertChildren(1 to null, 2 to 2, 4 to 4)
    }

    @Test
    fun WHEN_started_child_removed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component = children.getByConfig(config = 3).requireInstance()

        navigate { state -> state.filterNot { it.configuration == 3 } }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_resumed_child_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { state -> state.filterNot { it.configuration == 4 } }

        children.assertChildren(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun WHEN_resumed_child_removed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component = children.getByConfig(config = 4).requireInstance()

        navigate { state -> state.filterNot { it.configuration == 4 } }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_all_children_removed_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { emptyList() }

        children.assertChildren()
    }

    @Test
    fun WHEN_all_children_removed_THEN_lifecycles_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component2 = children.getByConfig(config = 2).requireInstance()
        val component3 = children.getByConfig(config = 3).requireInstance()
        val component4 = children.getByConfig(config = 4).requireInstance()

        navigate { emptyList() }

        assertEquals(Lifecycle.State.DESTROYED, component2.lifecycle.state)
        assertEquals(Lifecycle.State.DESTROYED, component3.lifecycle.state)
        assertEquals(Lifecycle.State.DESTROYED, component4.lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_created_THEN_lifecycle_created() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by CREATED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 1).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_started_THEN_lifecycle_started() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by STARTED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.STARTED, children.getByConfig(config = 1).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_resumed_THEN_lifecycle_resumed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by RESUMED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.RESUMED, children.getByConfig(config = 1).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_created_to_started_THEN_lifecycle_started() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by CREATED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.STARTED, children.getByConfig(config = 2).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_created_to_resumed_THEN_lifecycle_resumed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by CREATED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.RESUMED, children.getByConfig(config = 2).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_started_to_resumed_THEN_lifecycle_resumed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.RESUMED, children.getByConfig(config = 3).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_created_to_destroyed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component = children.getByConfig(config = 2).requireInstance()

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_started_to_created_THEN_lifecycle_created() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 3).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_started_to_destroyed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component = children.getByConfig(config = 3).requireInstance()

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_started_THEN_lifecycle_started() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }

        assertEquals(Lifecycle.State.STARTED, children.getByConfig(config = 4).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_created_THEN_lifecycle_created() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }

        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 4).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_destroyed_THEN_lifecycle_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component = children.getByConfig(config = 4).requireInstance()

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        assertEquals(Lifecycle.State.DESTROYED, component.lifecycle.state)
    }

    @Test
    fun WHEN_context_lifecycle_stopped_THEN_all_component_lifecycles_stopped() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        lifecycle.stop()

        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 2).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 3).requireInstance().lifecycle.state)
        assertEquals(Lifecycle.State.CREATED, children.getByConfig(config = 4).requireInstance().lifecycle.state)
    }

    @Test
    fun WHEN_context_lifecycle_destroyed_THEN_all_component_lifecycles_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val component2 = children.getByConfig(config = 2).requireInstance()
        val component3 = children.getByConfig(config = 3).requireInstance()
        val component4 = children.getByConfig(config = 4).requireInstance()

        lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, component2.lifecycle.state)
        assertEquals(Lifecycle.State.DESTROYED, component3.lifecycle.state)
        assertEquals(Lifecycle.State.DESTROYED, component4.lifecycle.state)
    }

    @Test
    fun GIVEN_first_and_last_children_duplicated_WHEN_last_child_removed_THEN_last_child_destroyed() {
        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
        val children by context.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
        val child = children.last().requireInstance()

        navigate { it.dropLast(1) }

        assertEquals(Lifecycle.State.DESTROYED, child.lifecycle.state)
    }

    @Test
    fun GIVEN_first_and_last_children_duplicated_first_child_created_WHEN_last_child_removed_THEN_first_child_created() {
        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
        val children by context.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
        val child = children.first().requireInstance()

        navigate { it.dropLast(1) }

        assertEquals(Lifecycle.State.CREATED, child.lifecycle.state)
    }

    @Test
    fun GIVEN_first_and_last_children_duplicated_WHEN_first_child_removed_THEN_last_child_destroyed() {
        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
        val children by context.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
        val child = children.last().requireInstance()

        navigate { it.drop(1) }

        assertEquals(Lifecycle.State.DESTROYED, child.lifecycle.state)
    }

    @Test
    fun GIVEN_first_and_last_children_duplicated_and_last_child_resumed_WHEN_first_child_removed_THEN_first_child_resumed() {
        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
        val children by context.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
        val child = children.first().requireInstance()

        navigate { it.drop(1) }

        assertEquals(Lifecycle.State.RESUMED, child.lifecycle.state)
    }
}
