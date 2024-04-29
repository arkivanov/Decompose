package com.arkivanov.decompose

import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.getOrCreate
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotSame
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
@RunWith(RobolectricTestRunner::class)
class RetainedComponentTest {

    @Test
    fun WHEN_created_THEN_lifecycle_resumed() {
        val owner = TestOwner()
        val ctx = owner.retainedComponent()
        val events = ctx.lifecycle.logEvents()

        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events)
    }

    @Test
    fun WHEN_recreated_THEN_old_lifecycle_destroyed() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent()
        val events = ctx.lifecycle.logEvents()
        events.clear()

        owner = owner.recreate(isChangingConfigurations = false)
        owner.retainedComponent()

        assertContentEquals(listOf("onPause", "onStop", "onDestroy"), events)
    }

    @Test
    fun WHEN_recreated_THEN_new_lifecycle_resumed() {
        var owner = TestOwner()
        owner.retainedComponent()

        owner = owner.recreate(isChangingConfigurations = false)
        val ctx = owner.retainedComponent()
        val events = ctx.lifecycle.logEvents()

        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events)
    }

    @Test
    fun WHEN_configuration_changed_THEN_lifecycle_not_called() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent(isChangingConfigurations = { true })
        val events = ctx.lifecycle.logEvents()
        events.clear()

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent()

        assertContentEquals(emptyList(), events)
    }

    @Test
    fun WHEN_recreated_THEN_saves_and_restores_state() {
        var owner = TestOwner()
        var ctx = owner.retainedComponent()
        ctx.stateKeeper.register(key = "key") { "saved_state" }

        owner = owner.recreate(isChangingConfigurations = false)
        ctx = owner.retainedComponent()
        val restoredState = ctx.stateKeeper.consume<String>(key = "key")

        assertEquals("saved_state", restoredState)
    }

    @Test
    fun retains_instances() {
        var owner = TestOwner()
        val ctx1 = owner.retainedComponent()

        owner = owner.recreate()
        val ctx2 = owner.retainedComponent()

        assertSame(ctx1, ctx2)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_recreated_THEN_state_not_saved() {
        var owner = TestOwner()
        var ctx = owner.retainedComponent(isStateSavingAllowed = { false })
        ctx.stateKeeper.register(key = "key") { "saved_state" }

        owner = owner.recreate(isChangingConfigurations = false)
        ctx = owner.retainedComponent()
        val restoredState = ctx.stateKeeper.consume<String>(key = "key")

        assertNull(restoredState)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_configuration_changed_THEN_instances_not_retained() {
        var owner = TestOwner()
        var ctx = owner.retainedComponent(isStateSavingAllowed = { false })
        val instance1 = ctx.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        ctx = owner.retainedComponent()
        val instance2 = ctx.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(instance1, instance2)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_configuration_changed_THEN_old_instances_destroyed() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent(isStateSavingAllowed = { false })
        val instance1 = ctx.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent()

        assertTrue(instance1.isDestroyed)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_discards_saved_state() {
        var owner = TestOwner()
        var ctx = owner.retainedComponent()
        ctx.stateKeeper.register(key = "key") { "saved_state" }

        owner = owner.recreate(isChangingConfigurations = true)
        ctx = owner.retainedComponent(discardSavedState = true)
        val restoredState = ctx.stateKeeper.consume<String>(key = "key")

        assertNull(restoredState)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_instances_not_retained() {
        var owner = TestOwner()
        var ctx = owner.retainedComponent()
        val instance1 = ctx.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        ctx = owner.retainedComponent(discardSavedState = true)
        val instance2 = ctx.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        assertNotSame(instance1, instance2)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_old_instances_destroyed() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent()
        val instance1 = ctx.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent(discardSavedState = true)

        assertTrue(instance1.isDestroyed)
    }

    @Test
    fun GIVEN_enabled_BackCallback_registered_WHEN_onBackPressed_THEN_callback_called() {
        val owner = TestOwner()
        val ctx = owner.retainedComponent()
        var isCalled = false
        ctx.backHandler.register(BackCallback { isCalled = true })

        owner.onBackPressedDispatcher.onBackPressed()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_disabled_BackCallback_registered_WHEN_onBackPressed_THEN_callback_not_called() {
        val owner = TestOwner()
        val ctx = owner.defaultComponentContext()
        var isCalled = false
        ctx.backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        owner.onBackPressedDispatcher.onBackPressed()

        assertFalse(isCalled)
    }

    private fun TestOwner.retainedComponent(
        discardSavedState: Boolean = false,
        isStateSavingAllowed: () -> Boolean = { true },
        isChangingConfigurations: () -> Boolean = { false },
    ): ComponentContext =
        retainedComponent(
            key = "key",
            onBackPressedDispatcher = onBackPressedDispatcher,
            discardSavedState = discardSavedState,
            isStateSavingAllowed = isStateSavingAllowed,
            isChangingConfigurations = isChangingConfigurations,
            factory = { it },
        )
}
