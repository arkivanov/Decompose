package com.arkivanov.decompose

import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.testutils.consume
import com.arkivanov.decompose.testutils.register
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.getOrCreate
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNotSame
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
@RunWith(RobolectricTestRunner::class)
class RetainedComponentMultipleTest {

    @Test
    fun WHEN_same_key_reused_THEN_throws_IllegalStateException() {
        val owner = TestOwner()
        owner.retainedComponent(key = "key")

        assertFailsWith<IllegalStateException> {
            owner.retainedComponent(key = "key")
        }
    }

    @Test
    fun WHEN_created_THEN_lifecycles_resumed() {
        val owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        val events1 = ctx1.lifecycle.logEvents()
        val events2 = ctx2.lifecycle.logEvents()

        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events1)
        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events2)
    }

    @Test
    fun WHEN_recreated_THEN_old_lifecycle_destroyed() {
        var owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        val events1 = ctx1.lifecycle.logEvents()
        events1.clear()
        val events2 = ctx2.lifecycle.logEvents()
        events2.clear()

        owner = owner.recreate(isChangingConfigurations = false)
        owner.retainedComponent(key = "key1")
        owner.retainedComponent(key = "key2")

        assertContentEquals(listOf("onPause", "onStop", "onDestroy"), events1)
        assertContentEquals(listOf("onPause", "onStop", "onDestroy"), events2)
    }

    @Test
    fun WHEN_recreated_THEN_new_lifecycle_resumed() {
        var owner = TestOwner()
        owner.retainedComponent(key = "key1")
        owner.retainedComponent(key = "key2")

        owner = owner.recreate(isChangingConfigurations = false)
        val ctx1 = owner.retainedComponent(key = "key1")
        val events1 = ctx1.lifecycle.logEvents()
        val ctx2 = owner.retainedComponent(key = "key2")
        val events2 = ctx2.lifecycle.logEvents()

        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events1)
        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events2)
    }

    @Test
    fun WHEN_configuration_changed_THEN_lifecycle_not_called() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent()
        val events = ctx.lifecycle.logEvents()
        events.clear()

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent()

        assertContentEquals(emptyList(), events)
    }

    @Test
    fun WHEN_recreated_THEN_saves_and_restores_states() {
        var owner = TestOwner()
        var ctx1 = owner.retainedComponent(key = "key1")
        var ctx2 = owner.retainedComponent(key = "key2")
        ctx1.stateKeeper.register(key = "key") { "saved_state_1" }
        ctx2.stateKeeper.register(key = "key") { "saved_state_2" }

        owner = owner.recreate(isChangingConfigurations = false)
        ctx1 = owner.retainedComponent(key = "key1")
        ctx2 = owner.retainedComponent(key = "key2")
        val restoredState1 = ctx1.stateKeeper.consume<String>(key = "key")
        val restoredState2 = ctx2.stateKeeper.consume<String>(key = "key")

        assertEquals("saved_state_1", restoredState1)
        assertEquals("saved_state_2", restoredState2)
    }

    @Test
    fun retains_instances() {
        var owner = TestOwner()
        val ctx11 = owner.retainedComponent(key = "key1")
        val ctx12 = owner.retainedComponent(key = "key2")

        owner = owner.recreate()
        val ctx21 = owner.retainedComponent(key = "key1")
        val ctx22 = owner.retainedComponent(key = "key2")

        assertSame(ctx11, ctx21)
        assertSame(ctx12, ctx22)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_recreated_THEN_state_not_saved() {
        var owner = TestOwner()
        var ctx1 = owner.retainedComponent(key = "key1", isStateSavingAllowed = { false })
        var ctx2 = owner.retainedComponent(key = "key2", isStateSavingAllowed = { false })
        ctx1.stateKeeper.register(key = "key") { "saved_state_1" }
        ctx2.stateKeeper.register(key = "key") { "saved_state_2" }

        owner = owner.recreate(isChangingConfigurations = false)
        ctx1 = owner.retainedComponent(key = "key1")
        ctx2 = owner.retainedComponent(key = "key2")
        val restoredState1 = ctx1.stateKeeper.consume<String>(key = "key")
        val restoredState2 = ctx2.stateKeeper.consume<String>(key = "key")

        assertNull(restoredState1)
        assertNull(restoredState2)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_configuration_changed_THEN_instances_not_retained() {
        var owner = TestOwner()
        var ctx1 = owner.retainedComponent(key = "key1", isStateSavingAllowed = { false })
        var ctx2 = owner.retainedComponent(key = "key2", isStateSavingAllowed = { false })
        val instance11 = ctx1.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val instance12 = ctx2.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        ctx1 = owner.retainedComponent(key = "key1")
        ctx2 = owner.retainedComponent(key = "key2")
        val instance21 = ctx1.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val instance22 = ctx2.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(instance11, instance21)
        assertNotSame(instance12, instance22)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_configuration_changed_THEN_old_instances_destroyed() {
        var owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1", isStateSavingAllowed = { false })
        val ctx2 = owner.retainedComponent(key = "key2", isStateSavingAllowed = { false })
        val instance1 = ctx1.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val instance2 = ctx2.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent(key = "key1")
        owner.retainedComponent(key = "key2")

        assertTrue(instance1.isDestroyed)
        assertTrue(instance2.isDestroyed)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_discards_saved_state() {
        var owner = TestOwner()
        var ctx1 = owner.retainedComponent(key = "key1")
        var ctx2 = owner.retainedComponent(key = "key2")
        ctx1.stateKeeper.register(key = "key") { "saved_state_1" }
        ctx2.stateKeeper.register(key = "key") { "saved_state_2" }

        owner = owner.recreate(isChangingConfigurations = true)
        ctx1 = owner.retainedComponent(key = "key1", discardSavedState = true)
        ctx2 = owner.retainedComponent(key = "key2", discardSavedState = true)
        val restoredState1 = ctx1.stateKeeper.consume<String>(key = "key")
        val restoredState2 = ctx2.stateKeeper.consume<String>(key = "key")

        assertNull(restoredState1)
        assertNull(restoredState2)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_instances_not_retained() {
        var owner = TestOwner()
        var ctx1 = owner.retainedComponent(key = "key1")
        var ctx2 = owner.retainedComponent(key = "key2")
        val instance11 = ctx1.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val instance12 = ctx2.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        ctx1 = owner.retainedComponent(key = "key1", discardSavedState = true)
        ctx2 = owner.retainedComponent(key = "key2", discardSavedState = true)
        val instance21 = ctx1.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val instance22 = ctx2.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(instance11, instance21)
        assertNotSame(instance12, instance22)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_old_instances_destroyed() {
        var owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        val instance1 = ctx1.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        val instance2 = ctx2.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent(key = "key1", discardSavedState = true)
        owner.retainedComponent(key = "key2", discardSavedState = true)

        assertTrue(instance1.isDestroyed)
        assertTrue(instance2.isDestroyed)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_old_instance_lifecycle_destroyed() {
        var owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        val events1 = ctx1.lifecycle.logEvents()
        events1.clear()
        val events2 = ctx2.lifecycle.logEvents()
        events2.clear()

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent(key = "key1", discardSavedState = true)
        owner.retainedComponent(key = "key2", discardSavedState = true)

        assertContentEquals(listOf("onPause", "onStop", "onDestroy"), events1)
        assertContentEquals(listOf("onPause", "onStop", "onDestroy"), events2)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_new_instance_lifecycle_resumed() {
        var owner = TestOwner()
        owner.retainedComponent()

        owner = owner.recreate(isChangingConfigurations = true)
        val ctx = owner.retainedComponent(discardSavedState = true)
        val events = ctx.lifecycle.logEvents()

        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events)
    }

    @Test
    fun GIVEN_enabled_BackCallback_registered_in_all_retained_components_WHEN_onBackPressed_THEN_last_callback_called() {
        val owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        var isCalled1 = false
        var isCalled2 = false
        ctx1.backHandler.register(BackCallback { isCalled1 = true })
        ctx2.backHandler.register(BackCallback { isCalled2 = true })

        owner.onBackPressedDispatcher.onBackPressed()

        assertFalse(isCalled1)
        assertTrue(isCalled2)
    }

    @Test
    fun GIVEN_enabled_BackCallback_registered_in_first_retained_component_WHEN_onBackPressed_THEN_first_callback_called() {
        val owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        var isCalled1 = false
        var isCalled2 = false
        ctx1.backHandler.register(BackCallback { isCalled1 = true })
        ctx2.backHandler.register(BackCallback(isEnabled = false) { isCalled2 = true })

        owner.onBackPressedDispatcher.onBackPressed()

        assertTrue(isCalled1)
        assertFalse(isCalled2)
    }

    @Test
    fun GIVEN_enabled_BackCallback_registered_in_second_retained_component_WHEN_onBackPressed_THEN_second_callback_called() {
        val owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        var isCalled1 = false
        var isCalled2 = false
        ctx1.backHandler.register(BackCallback(isEnabled = false) { isCalled1 = true })
        ctx2.backHandler.register(BackCallback(isEnabled = true) { isCalled2 = true })

        owner.onBackPressedDispatcher.onBackPressed()

        assertFalse(isCalled1)
        assertTrue(isCalled2)
    }

    @Test
    fun GIVEN_disabled_BackCallback_registered_in_all_retained_components_WHEN_onBackPressed_THEN_callbacks_not_called() {
        val owner = TestOwner()
        val ctx1 = owner.retainedComponent(key = "key1")
        val ctx2 = owner.retainedComponent(key = "key2")
        var isCalled1 = false
        var isCalled2 = false
        ctx1.backHandler.register(BackCallback(isEnabled = false) { isCalled1 = true })
        ctx2.backHandler.register(BackCallback(isEnabled = false) { isCalled2 = true })

        owner.onBackPressedDispatcher.onBackPressed()

        assertFalse(isCalled1)
        assertFalse(isCalled2)
    }

    private fun TestOwner.retainedComponent(
        key: String = "key",
        discardSavedState: Boolean = false,
        isStateSavingAllowed: () -> Boolean = { true },
    ): ComponentContext =
        retainedComponent(
            key = key,
            onBackPressedDispatcher = onBackPressedDispatcher,
            discardSavedState = discardSavedState,
            isStateSavingAllowed = isStateSavingAllowed,
            isChangingConfigurations = { isChangingConfigurations },
            factory = { it },
        )
}
