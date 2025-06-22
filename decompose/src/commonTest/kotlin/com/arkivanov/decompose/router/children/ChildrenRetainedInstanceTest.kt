package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DecomposeExperimentFlags
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertNotSame
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildrenRetainedInstanceTest : ChildrenTestBase() {

    @Test
    fun WHEN_child_switched_from_created_to_destroyed_THEN_instance_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = children.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_started_to_destroyed_THEN_instance_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = children.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) }

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_started_to_created_THEN_instance_not_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = children.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by RESUMED) }

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_destroyed_THEN_instance_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = children.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_created_THEN_instance_not_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = children.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_started_THEN_instance_not_destroyed() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = children.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_destroyed_WHEN_child_switched_to_created_THEN_instance_not_retained() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val oldInstance = children.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val newInstance = children.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(oldInstance, newInstance)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_destroyed_WHEN_child_switched_to_started_THEN_instance_not_retained() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val oldInstance = children.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val newInstance = children.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(oldInstance, newInstance)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_destroyed_WHEN_child_switched_to_resumed_THEN_instance_not_retained() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val oldInstance = children.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val newInstance = children.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_created_child_recreated_THEN_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val oldInstance = oldChildren.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newChildren by newContext.children()
        val newInstance = newChildren.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_created_child_recreated_THEN_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = oldChildren.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_started_child_recreated_THEN_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val oldInstance = oldChildren.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newChildren by newContext.children()
        val newInstance = newChildren.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_started_child_recreated_THEN_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = oldChildren.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_resumed_child_recreated_THEN_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val oldInstance = oldChildren.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newChildren by newContext.children()
        val newInstance = newChildren.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_resumed_child_recreated_THEN_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = oldChildren.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_recreated_and_created_child_restored_as_destroyed_THEN_instance_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = oldChildren.getByConfig(2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) })

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_recreated_and_started_child_restored_as_destroyed_THEN_instance_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = oldChildren.getByConfig(3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) })

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_recreated_and_resumed_child_restored_as_destroyed_THEN_instance_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val instance = oldChildren.getByConfig(4).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) })

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_duplicated_children_recreated_THEN_instances_retained() {
        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
        val oldInstance1 = oldChildren.first().requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val oldInstance3 = oldChildren.last().requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newChildren by newContext.children()
        val newInstance1 = newChildren.first().requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val newInstance3 = newChildren.last().requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertSame(oldInstance1, newInstance1)
        assertSame(oldInstance3, newInstance3)
    }

    @Test
    fun WHEN_duplicated_children_recreated_THEN_instances_not_destroyed() {
        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
        val oldInstance1 = oldChildren.first().requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val oldInstance3 = oldChildren.last().requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children()

        assertFalse(oldInstance1.isDestroyed)
        assertFalse(oldInstance3.isDestroyed)
    }
}
