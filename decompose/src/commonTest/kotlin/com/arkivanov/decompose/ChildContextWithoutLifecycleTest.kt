package com.arkivanov.decompose

import com.arkivanov.decompose.backhandler.addBackHandler
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.TestStateKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import kotlinx.serialization.builtins.serializer
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildContextWithoutLifecycleTest {

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_resumed_THEN_child_lifecycle_resumed() {
        val context = TestComponentContext()
        val childContext = context.childContext(key = "key")

        context.lifecycle.resume()

        assertEquals(Lifecycle.State.RESUMED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_destroyed_THEN_child_lifecycle_destroyed() {
        val context = TestComponentContext()
        val childContext = context.childContext(key = "key")
        context.lifecycle.resume()

        context.lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun WHEN_recreated_THEN_child_state_restored() {
        val context = TestComponentContext()
        val childContext = context.childContext(key = "key")
        childContext.stateKeeper.register(key = "child_key", strategy = String.serializer()) { "savedChildState" }
        context.lifecycle.resume()

        val savedParentState = context.stateKeeper.save()
        context.lifecycle.destroy()
        val newContext = TestComponentContext(stateKeeper = TestStateKeeperDispatcher(savedParentState))
        val newChild = newContext.childContext(key = "key")
        val restoredChildState = newChild.stateKeeper.consume(key = "child_key", strategy = String.serializer())

        assertEquals("savedChildState", restoredChildState)
    }

    @Test
    fun WHEN_created_THEN_child_registered_in_StateKeeper() {
        val context = TestComponentContext()

        context.childContext(key = "key")

        context.stateKeeper.assertSupplierRegistered(key = "key")
    }

    @Test
    fun WHEN_recreated_THEN_child_instance_retained() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestComponentContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)
        context.lifecycle.resume()
        context.lifecycle.destroy()

        val newContext = TestComponentContext(instanceKeeper = instanceKeeperDispatcher)
        val newChildContext = newContext.childContext(key = "key")
        val newInstance = newChildContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        assertSame(instance, newInstance)
    }

    @Test
    fun WHEN_destroyed_THEN_child_instance_not_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestComponentContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)
        context.lifecycle.resume()
        context.lifecycle.destroy()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_parent_InstanceKeeper_destroyed_THEN_child_instance_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestComponentContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        instanceKeeperDispatcher.destroy()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_created_THEN_child_registered_in_InstanceKeeper() {
        val context = TestComponentContext()

        context.childContext(key = "key")

        assertNotNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun WHEN_enabled_child_BackHandler_registered_THEN_dispatcher_enabled() {
        val context = TestComponentContext()
        val childContext = context.childContext(key = "key")

        childContext.navigationEventDispatcher.addBackHandler(isEnabled = true)

        assertTrue(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun WHEN_disabled_child_BackHandler_registered_THEN_dispatcher_disabled() {
        val context = TestComponentContext()
        val childContext = context.childContext(key = "key")

        childContext.navigationEventDispatcher.addBackHandler(isEnabled = false)

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun WHEN_child_BackHandler_not_registered_THEN_dispatcher_disabled() {
        val context = TestComponentContext()

        context.childContext(key = "key")

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }
}
