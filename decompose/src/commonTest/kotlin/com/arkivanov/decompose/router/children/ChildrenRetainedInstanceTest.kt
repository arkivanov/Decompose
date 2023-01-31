package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.router.children.ChildNavState.Status.ACTIVE
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.INACTIVE
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertNotSame
import kotlin.test.assertSame
import kotlin.test.assertTrue

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
internal class ChildrenRetainedInstanceTest : ChildrenTestBase() {

    @Test
    fun WHEN_child_switched_from_inactive_to_destroyed_THEN_instance_destroyed() {
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component = children.getById(id = 2).requireInstance()
        val instance = component.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by ACTIVE) }

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_active_to_destroyed_THEN_instance_destroyed() {
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val component = children.getById(id = 3).requireInstance()
        val instance = component.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_child_switched_from_active_to_inactive_THEN_instance_not_destroyed() {
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val instance = children.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun GIVEN_child_switched_from_inactive_to_destroyed_WHEN_child_switched_to_inactive_THEN_instance_not_retained() {
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val oldInstance = children.getById(id = 2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by ACTIVE) }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }
        val newInstance = children.getById(id = 2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(oldInstance, newInstance)
    }

    @Test
    fun GIVEN_child_switched_from_active_to_destroyed_WHEN_child_switched_to_active_THEN_instance_not_retained() {
        val children by context.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val oldInstance = children.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }
        val newInstance = children.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_inactive_child_recreated_THEN_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val oldInstance = oldChildren.getById(id = 2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newChildren by newContext.children()
        val newInstance = newChildren.getById(id = 2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_inactive_child_recreated_THEN_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val instance = oldChildren.getById(id = 2).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_active_child_recreated_THEN_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val oldInstance = oldChildren.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newChildren by newContext.children()
        val newInstance = newChildren.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertSame(oldInstance, newInstance)
    }

    @Test
    fun WHEN_active_child_recreated_THEN_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val instance = oldChildren.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_recreated_and_child_restored_as_destroyed_THEN_instance_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldChildren by oldContext.children(initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val instance = oldChildren.getById(id = 3).requireInstance().instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.children(restoreNavState = { stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) })

        assertTrue(instance.isDestroyed)
    }
}
