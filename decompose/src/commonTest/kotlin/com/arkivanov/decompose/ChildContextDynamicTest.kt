package com.arkivanov.decompose

import com.arkivanov.decompose.backhandler.TestBackDispatcher
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.ParcelableStub
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.Lifecycle.State.CREATED
import com.arkivanov.essenty.lifecycle.Lifecycle.State.STARTED
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNotSame
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildContextDynamicTest {

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_resumed_and_child_lifecycle_initialized_THEN_child_lifecycle_initialized() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)

        context.lifecycle.resume()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_persistent_created_WHEN_parent_lifecycle_resumed_and_child_lifecycle_initialized_THEN_child_lifecycle_initialized() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)

        context.lifecycle.resume()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_initialized_and_child_lifecycle_resumed_THEN_child_lifecycle_initialized() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)

        childLifecycle.resume()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_resumed_and_child_lifecycle_resumed_THEN_child_lifecycle_resumed() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)

        context.lifecycle.resume()
        childLifecycle.resume()

        assertEquals(Lifecycle.State.RESUMED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_destroyed_and_child_lifecycle_resumed_THEN_child_lifecycle_destroyed() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)

        context.lifecycle.resume()
        childLifecycle.resume()
        context.lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_resumed_and_child_lifecycle_destroyed_THEN_child_lifecycle_destroyed() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)

        context.lifecycle.resume()
        childLifecycle.resume()
        childLifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun WHEN_persistent_recreated_THEN_child_state_restored() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val savedChildState = ParcelableStub()
        childContext.stateKeeper.register("child_key") { savedChildState }
        context.lifecycle.resume()

        val savedParentState = context.stateKeeper.save()
        context.lifecycle.destroy()
        val newContext = TestContext(savedParentState)
        val newChild = newContext.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val restoredChildState = newChild.stateKeeper.consume("child_key", ParcelableStub::class)

        assertEquals(savedChildState, restoredChildState)
    }

    @Test
    fun WHEN_not_persistent_recreated_THEN_child_state_not_restored() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)
        childContext.stateKeeper.register("child_key") { ParcelableStub() }
        context.lifecycle.resume()

        val savedParentState = context.stateKeeper.save()
        context.lifecycle.destroy()
        val newContext = TestContext(savedParentState)
        val newChild = newContext.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)
        val restoredChildState = newChild.stateKeeper.consume("child_key", ParcelableStub::class)

        assertNull(restoredChildState)
    }

    @Test
    fun GIVEN_persistent_WHEN_child_lifecycle_destroyed_and_recreated_THEN_child_state_not_restored() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = true)
        val savedChildState = ParcelableStub()
        childContext.stateKeeper.register("child_key") { savedChildState }
        childLifecycle.resume()
        childLifecycle.destroy()

        val savedParentState = context.stateKeeper.save()
        val newContext = TestContext(savedParentState)
        val newChild = newContext.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val restoredChildState = newChild.stateKeeper.consume("child_key", ParcelableStub::class)

        assertNull(restoredChildState)
    }

    @Test
    fun WHEN_persistent_created_THEN_child_registered_in_StateKeeper() {
        val context = TestContext()

        context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)

        context.stateKeeper.assertSupplierRegistered(key = "key")
    }

    @Test
    fun WHEN_not_persistent_created_THEN_child_not_registered_in_StateKeeper() {
        val context = TestContext()

        context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)

        context.stateKeeper.assertSupplierNotRegistered(key = "key")
    }

    @Test
    fun GIVEN_persistent_WHEN_child_lifecycle_destroyed_THEN_child_unregistered_from_StateKeeper() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        context.childContext(key = "key", lifecycle = childLifecycle, persistent = true)
        childLifecycle.resume()

        childLifecycle.destroy()

        context.stateKeeper.assertSupplierNotRegistered(key = "key")
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_child_instance_retained() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        val newContext = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val newChildContext = newContext.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val newInstance = newChildContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        assertSame(instance, newInstance)
    }

    @Test
    fun GIVEN_persistent_WHEN_destroyed_THEN_child_instance_not_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)
        context.lifecycle.resume()
        context.lifecycle.destroy()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun GIVEN_persistent_WHEN_parent_InstanceKeeper_destroyed_THEN_child_instance_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        instanceKeeperDispatcher.destroy()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_destroyed_THEN_child_instance_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)
        context.lifecycle.resume()
        context.lifecycle.destroy()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_child_instance_not_retained() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        val newContext = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val newChildContext = newContext.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)
        val newInstance = newChildContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        assertNotSame(instance, newInstance)
    }

    @Test
    fun WHEN_persistent_created_THEN_child_registered_in_InstanceKeeper() {
        val context = TestContext()

        context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = true)

        assertNotNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun WHEN_not_persistent_created_THEN_child_not_registered_in_InstanceKeeper() {
        val context = TestContext()

        context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)

        assertNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun GIVEN_persistent_WHEN_child_lifecycle_destroyed_THEN_child_unregistered_from_InstanceKeeper() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        context.childContext(key = "key", lifecycle = childLifecycle, persistent = true)
        childLifecycle.resume()

        childLifecycle.destroy()

        assertNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun GIVEN_child_lifecycle_stopped_and_enabled_child_BackHandler_registered_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childContext =
            context.childContext(key = "key", lifecycle = LifecycleRegistry(initialState = CREATED), persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = true, onBack = {}))

        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_child_lifecycle_stopped_and_disabled_child_BackHandler_registered_WHEN_child_lifecycle_started_and_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry(initialState = CREATED)
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = false, onBack = {}))

        childLifecycle.start()
        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_child_lifecycle_started_and_enabled_child_BackHandler_registered_WHEN_backHandler_back_THEN_returns_true() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(initialState = STARTED), persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = true, onBack = {}))

        val result = context.backHandler.back()

        assertTrue(result)
    }

    @Test
    fun GIVEN_child_lifecycle_started_and_disabled_child_BackHandler_registered_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(initialState = STARTED), persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = false, onBack = {}))

        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_child_lifecycle_started_and_enabled_child_BackHandler_registered_WHEN_child_lifecycle_stopped_and_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry(initialState = STARTED)
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = true, onBack = {}))

        childLifecycle.stop()
        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_child_lifecycle_started_and_enabled_child_BackHandler_registered_WHEN_child_lifecycle_destroyed_THEN_BackHandler_unregistered_from_parent() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry(initialState = STARTED)
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = true, onBack = {}))

        childLifecycle.destroy()

        assertEquals(0, context.backHandler.size)
    }

    @Test
    fun GIVEN_disabled_child_BackHandler_registered_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = false, onBack = {}))

        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_child_BackHandler_not_registered_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        context.childContext(key = "key", lifecycle = LifecycleRegistry(), persistent = false)

        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_enabled_child_BackHandler_registered_and_lifecycle_destroyed_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle, persistent = false)
        childContext.backHandler.register(BackCallback(isEnabled = true, onBack = {}))
        childLifecycle.resume()

        childLifecycle.destroy()

        assertFalse(context.backHandler.back())
    }

    private class TestContext(
        savedState: ParcelableContainer? = null,
        override val instanceKeeper: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
    ) : ComponentContext {
        override val lifecycle: LifecycleRegistry = LifecycleRegistry()
        override val stateKeeper: TestStateKeeperDispatcher = TestStateKeeperDispatcher(savedState)
        override val backHandler: TestBackDispatcher = TestBackDispatcher()
    }
}
