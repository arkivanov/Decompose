package com.arkivanov.decompose

import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.statekeeper.SerializableContainer
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
        val context = TestContext()
        val childContext = context.childContext(key = "key")

        context.lifecycle.resume()

        assertEquals(Lifecycle.State.RESUMED, childContext.lifecycle.state)
    }

    @Test
    fun GIVEN_created_WHEN_parent_lifecycle_destroyed_THEN_child_lifecycle_destroyed() {
        val context = TestContext()
        val childContext = context.childContext(key = "key")
        context.lifecycle.resume()

        context.lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, childContext.lifecycle.state)
    }

    @Test
    fun WHEN_recreated_THEN_child_state_restored() {
        val context = TestContext()
        val childContext = context.childContext(key = "key")
        childContext.stateKeeper.register(key = "child_key", strategy = String.serializer()) { "savedChildState" }
        context.lifecycle.resume()

        val savedParentState = context.stateKeeper.save()
        context.lifecycle.destroy()
        val newContext = TestContext(savedParentState)
        val newChild = newContext.childContext(key = "key")
        val restoredChildState = newChild.stateKeeper.consume(key = "child_key", strategy = String.serializer())

        assertEquals("savedChildState", restoredChildState)
    }

    @Test
    fun WHEN_created_THEN_child_registered_in_StateKeeper() {
        val context = TestContext()

        context.childContext(key = "key")

        context.stateKeeper.assertSupplierRegistered(key = "key")
    }

    @Test
    fun WHEN_recreated_THEN_child_instance_retained() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)
        context.lifecycle.resume()
        context.lifecycle.destroy()

        val newContext = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val newChildContext = newContext.childContext(key = "key")
        val newInstance = newChildContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        assertSame(instance, newInstance)
    }

    @Test
    fun WHEN_destroyed_THEN_child_instance_not_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)
        context.lifecycle.resume()
        context.lifecycle.destroy()

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_parent_InstanceKeeper_destroyed_THEN_child_instance_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val context = TestContext(instanceKeeper = instanceKeeperDispatcher)
        val childContext = context.childContext(key = "key")
        val instance = childContext.instanceKeeper.getOrCreate(key = "child", factory = ::TestInstance)

        instanceKeeperDispatcher.destroy()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_created_THEN_child_registered_in_InstanceKeeper() {
        val context = TestContext()

        context.childContext(key = "key")

        assertNotNull(context.instanceKeeper.get(key = "key"))
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

    private class TestContext(
        savedState: SerializableContainer? = null,
        override val instanceKeeper: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
    ) : ComponentContext {
        override val lifecycle: LifecycleRegistry = LifecycleRegistry()
        override val stateKeeper: TestStateKeeperDispatcher = TestStateKeeperDispatcher(savedState)
        override val backHandler: BackDispatcher = BackDispatcher()
        override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::DefaultComponentContext)
    }
}
