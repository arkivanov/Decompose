package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.testutils.consume
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.decompose.testutils.register
import com.arkivanov.decompose.testutils.serializeAndDeserialize
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlinx.serialization.builtins.serializer
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNotSame
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildSlotIntegrationTest {

    private val navigation = SlotNavigation<Int>()
    private val lifecycle = LifecycleRegistry()
    private val stateKeeperDispatcher = TestStateKeeperDispatcher()
    private val instanceKeeperDispatcher = InstanceKeeperDispatcher()
    private val backDispatcher = BackDispatcher()

    private val context =
        DefaultComponentContext(
            lifecycle = lifecycle,
            stateKeeper = stateKeeperDispatcher,
            instanceKeeper = instanceKeeperDispatcher,
            backHandler = backDispatcher,
        )

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun WHEN_created_without_configuration_THEN_child_not_active() {
        val slot by context.childSlot(initialConfiguration = null)

        slot.assertChild(null)
    }

    @Test
    fun WHEN_created_with_configuration_THEN_slot_active() {
        val slot by context.childSlot(initialConfiguration = 1)

        slot.assertChild(1)
    }

    @Test
    fun GIVEN_not_active_WHEN_activate_THEN_slot_active() {
        val slot by context.childSlot(initialConfiguration = null)

        navigation.activate(1)

        slot.assertChild(1)
    }

    @Test
    fun GIVEN_active_WHEN_dismiss_THEN_slot_not_active() {
        val slot by context.childSlot(initialConfiguration = 1)

        navigation.dismiss()

        slot.assertChild(null)
    }

    @Test
    fun GIVEN_active_WHEN_activate_with_same_configuration_THEN_same_slot_active() {
        val slot by context.childSlot(initialConfiguration = 1)

        navigation.activate(1)

        slot.assertChild(1)
    }

    @Test
    fun GIVEN_active_WHEN_activate_with_same_configuration_THEN_same_instance_active() {
        val slot by context.childSlot(initialConfiguration = 1)
        val instance = slot.requireChild().instance

        navigation.activate(1)

        assertSame(instance, slot.child?.instance)
    }

    @Test
    fun GIVEN_active_WHEN_activate_with_other_configuration_THEN_other_slot_active() {
        val slot by context.childSlot(initialConfiguration = 1)

        navigation.activate(2)

        slot.assertChild(2)
    }

    @Test
    fun GIVEN_not_active_WHEN_activate_THEN_lifecycle_resumed() {
        val slot by context.childSlot(initialConfiguration = null)

        navigation.activate(1)

        assertEquals(Lifecycle.State.RESUMED, slot.requireChild().instance.lifecycle.state)
    }

    @Test
    fun GIVEN_active_WHEN_dismiss_THEN_lifecycle_destroyed() {
        val slot by context.childSlot(initialConfiguration = 1)
        val lifecycle = slot.requireChild().instance.lifecycle

        navigation.dismiss()

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.state)
    }

    @Test
    fun GIVEN_not_active_WHEN_parent_backDispatcher_isEnabled_THEN_false() {
        context.childSlot(initialConfiguration = null)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_active_WHEN_parent_backDispatcher_isEnabled_THEN_true() {
        context.childSlot(initialConfiguration = 1)

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_active_WHEN_back_pressed_THEN_slot_not_active() {
        val slot by context.childSlot(initialConfiguration = 1)

        backDispatcher.back()

        slot.assertChild(null)
    }

    @Test
    fun GIVEN_dismissed_via_back_pressed_WHEN_parent_backDispatcher_isEnabled_THEN_false() {
        context.childSlot(initialConfiguration = 1)
        backDispatcher.back()

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_persistent_and_slot_active_WHEN_recreated_THEN_slot_active() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childSlot(initialConfiguration = 1, persistent = true)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newSlot by newContext.childSlot(initialConfiguration = null, persistent = true)

        newSlot.assertChild(1)
    }

    @Test
    fun GIVEN_persistent_and_slot_not_active_WHEN_recreated_THEN_slot_not_active() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childSlot(initialConfiguration = null, persistent = true)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newSlot by newContext.childSlot(initialConfiguration = 1, persistent = true)

        newSlot.assertChild(null)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_slot_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val slot by oldContext.childSlot(initialConfiguration = 1, persistent = true)
        slot.requireChild().instance.stateKeeper.register("key") { 10 }

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newSlot by newContext.childSlot(initialConfiguration = null, persistent = true)
        val restoredState = newSlot.requireChild().instance.stateKeeper.consume<Int>("key")

        assertEquals(10, restoredState)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_slot_not_active() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childSlot(initialConfiguration = 1, persistent = false)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newSlot by newContext.childSlot(initialConfiguration = null, persistent = false)

        newSlot.assertChild(null)
    }

    @Test
    fun WHEN_created_persistent_THEN_registered_in_parent_StateKeeper() {
        context.childSlot(initialConfiguration = 1, persistent = true)

        stateKeeperDispatcher.assertSupplierRegistered(key = "key")
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_slot_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldSlot by oldContext.childSlot(initialConfiguration = 1, persistent = true)
        val oldInstance = oldSlot.requireChild().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newSlot by newContext.childSlot(initialConfiguration = null, persistent = true)
        val retainedInstance = newSlot.requireChild().instance.instanceKeeper.getOrCreate(::TestInstance)

        assertSame(oldInstance, retainedInstance)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_slot_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldSlot by oldContext.childSlot(initialConfiguration = 1, persistent = true)
        val instance = oldSlot.requireChild().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childSlot(initialConfiguration = null, persistent = true)

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_created_persistent_THEN_registered_in_parent_InstanceKeeper() {
        context.childSlot(initialConfiguration = 1, persistent = true)

        assertNotNull(instanceKeeperDispatcher.get(key = "key"))
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_slot_instance_not_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldSlot by oldContext.childSlot(initialConfiguration = 1, persistent = false)
        val oldInstance = oldSlot.requireChild().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newSlot by newContext.childSlot(initialConfiguration = 1, persistent = false)
        val newInstance = newSlot.requireChild().instance.instanceKeeper.getOrCreate(::TestInstance)

        assertNotSame(oldInstance, newInstance)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_slot_instance_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldSlot by oldContext.childSlot(initialConfiguration = 1, persistent = false)
        val instance = oldSlot.requireChild().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save().serializeAndDeserialize()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childSlot(initialConfiguration = null, persistent = false)

        assertTrue(instance.isDestroyed)
    }

    private fun ComponentContext.childSlot(
        initialConfiguration: Int?,
        persistent: Boolean = true,
    ): Value<ChildSlot<Int, Component>> =
        childSlot(
            source = navigation,
            serializer = Int.serializer().takeIf { persistent },
            key = "key",
            initialConfiguration = { initialConfiguration },
            handleBackButton = true,
            childFactory = ::Component,
        )

    private fun ChildSlot<Int, Component>.requireChild(): Child.Created<Int, Component> =
        requireNotNull(child)

    private fun ChildSlot<Int, Component>.assertChild(id: Int?) {
        assertEquals(id, child?.configuration)
        assertEquals(id, child?.instance?.config)
    }

    private class Component(
        val config: Int,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext
}
