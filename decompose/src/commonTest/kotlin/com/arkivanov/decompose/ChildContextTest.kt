package com.arkivanov.decompose

import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.ParcelableStub
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildContextTest {

    @Test
    fun GIVEN_child_created_without_lifecycle_WHEN_parent_lifecycle_resumed_THEN_child_lifecycle_resumed() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = null)

        context.lifecycle.resume()

        assertEquals(Lifecycle.State.RESUMED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_child_created_without_lifecycle_WHEN_parent_lifecycle_destroyed_THEN_child_lifecycle_destroyed() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = null)
        context.lifecycle.resume()

        context.lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_child_created_with_lifecycle_WHEN_parent_lifecycle_resumed_and_child_lifecycle_initialized_THEN_child_lifecycle_initialized() {
        val context = TestContext()
        val childContext = context.childContext(key = "key", lifecycle = LifecycleRegistry())

        context.lifecycle.resume()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_child_created_with_lifecycle_WHEN_parent_lifecycle_initialized_and_child_lifecycle_resumed_THEN_child_lifecycle_initialized() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        childLifecycle.resume()

        assertEquals(Lifecycle.State.INITIALIZED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_child_created_with_lifecycle_WHEN_parent_lifecycle_resumed_and_child_lifecycle_resumed_THEN_child_lifecycle_resumed() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        context.lifecycle.resume()
        childLifecycle.resume()

        assertEquals(Lifecycle.State.RESUMED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_child_created_with_lifecycle_WHEN_parent_lifecycle_destroyed_and_child_lifecycle_resumed_THEN_child_lifecycle_destroyed() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        context.lifecycle.resume()
        childLifecycle.resume()
        context.lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_child_created_with_lifecycle_WHEN_parent_lifecycle_resumed_and_child_lifecycle_destroyed_THEN_child_lifecycle_destroyed() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)

        context.lifecycle.resume()
        childLifecycle.resume()
        childLifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun WHEN_recreated_THEN_child_state_restored() {
        val context = TestContext()
        val childContext = context.childContext(key = "key")
        val savedChildState = ParcelableStub()
        childContext.stateKeeper.register("child_key") { savedChildState }

        val savedParentState = context.stateKeeper.save()
        val newContext = TestContext(savedParentState)
        val newChild = newContext.childContext(key = "key")
        val restoredChildState = newChild.stateKeeper.consume("child_key", ParcelableStub::class)

        assertEquals(savedChildState, restoredChildState)
    }

    @Test
    fun WHEN_child_lifecycle_destroyed_and_recreated_THEN_child_state_not_restored() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)
        val savedChildState = ParcelableStub()
        childContext.stateKeeper.register("child_key") { savedChildState }
        childLifecycle.resume()
        childLifecycle.destroy()

        val savedParentState = context.stateKeeper.save()
        val newContext = TestContext(savedParentState)
        val newChild = newContext.childContext(key = "key", lifecycle = LifecycleRegistry())
        val restoredChildState = newChild.stateKeeper.consume("child_key", ParcelableStub::class)

        assertNull(restoredChildState)
    }

    @Test
    fun WHEN_child_created_without_lifecycle_THEN_child_registered_in_StateKeeper() {
        val context = TestContext()

        context.childContext(key = "key")

        context.stateKeeper.assertSupplierRegistered(key = "key")
    }

    @Test
    fun WHEN_child_created_with_lifecycle_THEN_child_registered_in_StateKeeper() {
        val context = TestContext()

        context.childContext(key = "key", lifecycle = LifecycleRegistry())

        context.stateKeeper.assertSupplierRegistered(key = "key")
    }

    @Test
    fun WHEN_child_lifecycle_destroyed_THEN_child_unregistered_from_StateKeeper() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        context.childContext(key = "key", lifecycle = childLifecycle)
        childLifecycle.resume()

        childLifecycle.destroy()

        context.stateKeeper.assertSupplierNotRegistered(key = "key")
    }

    @Test
    fun WHEN_recreated_THEN_child_instance_retained() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        val newContext = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val newChildContext = newContext.childContext(key = "key")
        val newInstance = newChildContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        assertSame(instance, newInstance)
    }

    @Test
    fun WHEN_child_created_without_lifecycle_THEN_child_registered_in_InstanceKeeper() {
        val context = TestContext()

        context.childContext(key = "key")

        assertNotNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun WHEN_child_created_with_lifecycle_THEN_child_registered_in_InstanceKeeper() {
        val context = TestContext()

        context.childContext(key = "key", lifecycle = LifecycleRegistry())

        assertNotNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun WHEN_child_lifecycle_destroyed_THEN_child_unregistered_from_InstanceKeeper() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        context.childContext(key = "key", lifecycle = childLifecycle)
        childLifecycle.resume()

        childLifecycle.destroy()

        assertNull(context.instanceKeeper.get(key = "key"))
    }

    @Test
    fun GIVEN_enabled_child_BackHandler_registered_WHEN_backHandler_back_THEN_returns_true() {
        val context = TestContext()
        val childContext = context.childContext(key = "key")
        childContext.backHandler.register(BackCallback(isEnabled = true, onBack = {}))

        val result = context.backHandler.back()

        assertTrue(result)
    }

    @Test
    fun GIVEN_disabled_child_BackHandler_registered_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childContext = context.childContext(key = "key")
        childContext.backHandler.register(BackCallback(isEnabled = false, onBack = {}))

        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_child_BackHandler_not_registered_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        context.childContext(key = "key")

        val result = context.backHandler.back()

        assertFalse(result)
    }

    @Test
    fun GIVEN_enabled_child_BackHandler_registered_and_lifecycle_destroyed_WHEN_backHandler_back_THEN_returns_false() {
        val context = TestContext()
        val childLifecycle = LifecycleRegistry()
        val childContext = context.childContext(key = "key", lifecycle = childLifecycle)
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
        override val backHandler: BackDispatcher = BackDispatcher()
    }
}
