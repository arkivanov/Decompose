package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.Lifecycle.State.CREATED
import com.arkivanov.decompose.instancekeeper.getOrCreate
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.lifecycle.moveToStarted
import com.arkivanov.decompose.lifecycle.resumed
import com.arkivanov.decompose.navigationevent.addHandler
import com.arkivanov.decompose.router.TestViewModel
import com.arkivanov.decompose.testutils.consume
import com.arkivanov.decompose.testutils.recreate
import com.arkivanov.decompose.testutils.register
import com.arkivanov.decompose.testutils.testLifecycleRegistry
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildContextWithLifecycleTest {

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_resumed_and_child_lifecycle_initialized_THEN_child_lifecycle_initialized() {
        val context = HostComponentContext()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry())

        context.lifecycle.moveToResumed()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.currentState)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_initialized_and_child_lifecycle_resumed_THEN_child_lifecycle_initialized() {
        val context = HostComponentContext()
        val childLifecycle = testLifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        childLifecycle.moveToResumed()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.currentState)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_resumed_and_child_lifecycle_resumed_THEN_child_lifecycle_resumed() {
        val context = HostComponentContext()
        val childLifecycle = testLifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        context.lifecycle.moveToResumed()
        childLifecycle.moveToResumed()

        assertEquals(Lifecycle.State.RESUMED, childContext.lifecycle.currentState)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_destroyed_and_child_lifecycle_resumed_THEN_child_lifecycle_destroyed() {
        val context = HostComponentContext()
        val childLifecycle = testLifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        context.lifecycle.moveToResumed()
        childLifecycle.moveToResumed()
        context.lifecycle.moveToDestroyed()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.currentState)
    }

    @Test
    fun GIVEN_parent_and_child_lifecycles_resumed_WHEN_child_lifecycle_destroyed_THEN_error_thrown() {
        val context = HostComponentContext()
        val childLifecycle = testLifecycleRegistry()
        context.childContext(key = "key", lifecycle = childLifecycle)
        context.lifecycle.moveToResumed()
        childLifecycle.moveToResumed()

        assertFailsWith<IllegalStateException> {
            childLifecycle.moveToDestroyed()
        }
    }

    @Test
    fun WHEN_recreated_THEN_child_state_restored() {
        val context = HostComponentContext()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry())
        childContext.stateKeeper.register("child_key") { "savedChildState" }
        context.lifecycle.moveToResumed()

        val newContext = context.recreate()
        val newChild = newContext.childContext(key = "key", lifecycle = testLifecycleRegistry())
        val restoredChildState = newChild.stateKeeper.consume<String>("child_key")

        assertEquals("savedChildState", restoredChildState)
    }

    @Test
    fun WHEN_created_THEN_child_registered_in_StateKeeper() {
        val context = HostComponentContext().resumed()

        context.childContext(key = "key", lifecycle = testLifecycleRegistry())

        assertTrue(context.stateKeeper.isRegistered("key"))
    }

    @Test
    fun WHEN_recreated_THEN_child_instance_retained() {
        val context = HostComponentContext().resumed()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry())
        val instance = childContext.viewModelStore.getOrCreate(key = "child", factory = ::TestViewModel)

        val newContext = context.recreate(isConfigurationChange = true)
        val newChildContext = newContext.childContext(key = "key", lifecycle = testLifecycleRegistry())
        val newInstance = newChildContext.viewModelStore.getOrCreate(key = "child", factory = ::TestViewModel)

        assertSame(instance, newInstance)
    }

    @Test
    fun WHEN_destroyed_THEN_child_instance_not_destroyed() {
        val context = HostComponentContext()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry())
        val instance = childContext.viewModelStore.getOrCreate(key = "child", factory = ::TestViewModel)
        context.lifecycle.moveToResumed()
        context.lifecycle.moveToDestroyed()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_parent_InstanceKeeper_destroyed_THEN_child_instance_destroyed() {
        val context = HostComponentContext().resumed()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry())
        val instance = childContext.viewModelStore.getOrCreate(key = "child", factory = ::TestViewModel)

        context.viewModelStore.clear()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_created_THEN_child_registered_in_InstanceKeeper() {
        val context = HostComponentContext().resumed()

        context.childContext(key = "key", lifecycle = testLifecycleRegistry())

        assertNotNull(context.viewModelStore.get(key = "key"))
    }

    @Test
    fun GIVEN_child_lifecycle_stopped_WHEN_enabled_child_BackHandler_registered_THEN_dispatcher_disabled() {
        val context = HostComponentContext().resumed()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry(state = CREATED))

        childContext.navigationEventDispatcher.addHandler(isBackEnabled = true)

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_child_lifecycle_stopped_and_disabled_child_BackHandler_registered_WHEN_child_lifecycle_started_THEN_dispatcher_disabled() {
        val context = HostComponentContext().resumed()
        val childLifecycle = testLifecycleRegistry(state = CREATED)
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)
        childContext.navigationEventDispatcher.addHandler(isBackEnabled = false)

        childLifecycle.moveToStarted()

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_child_lifecycle_started_WHEN_enabled_child_BackHandler_registered_THEN_dispatcher_enabled() {
        val context = HostComponentContext().resumed()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry(Lifecycle.State.STARTED))

        childContext.navigationEventDispatcher.addHandler(isBackEnabled = true)

        assertTrue(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_child_lifecycle_started_WHEN_disabled_child_BackHandler_registered_THEN_dispatcher_disabled() {
        val context = HostComponentContext().resumed()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry(Lifecycle.State.STARTED))

        childContext.navigationEventDispatcher.addHandler(isBackEnabled = false)

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_child_lifecycle_started_and_enabled_child_BackHandler_registered_WHEN_child_lifecycle_stopped_THEN_dispatcher_disabled() {
        val context = HostComponentContext().resumed()
        val childLifecycle = testLifecycleRegistry(Lifecycle.State.STARTED)
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)
        childContext.navigationEventDispatcher.addHandler(isBackEnabled = true)

        childLifecycle.moveToCreated()

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun WHEN_disabled_child_BackHandler_registered_THEN_dispatcher_disabled() {
        val context = HostComponentContext().resumed()
        val childContext = context.childContext(key = "key", lifecycle = testLifecycleRegistry())

        childContext.navigationEventDispatcher.addHandler(isBackEnabled = false)

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun WHEN_child_BackHandler_not_registered_THEN_dispatcher_disabled() {
        val context = HostComponentContext().resumed()

        context.childContext(key = "key", lifecycle = testLifecycleRegistry())

        assertFalse(context.navigationEventInput.hasEnabledHandlers)
    }
}
