package com.arkivanov.decompose

import androidx.lifecycle.SavedStateViewModelFactory
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.CreationExtras.Key
import com.arkivanov.decompose.navigationevent.addDirectInput
import com.arkivanov.decompose.navigationevent.addHandler
import com.arkivanov.decompose.router.TestViewModel
import com.arkivanov.decompose.testutils.consume
import com.arkivanov.decompose.testutils.register
import com.arkivanov.decompose.viewmodel.getOrCreate
import com.arkivanov.decompose.viewmodel.viewModel
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
class RetainedComponentSingleTest {

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
        val ctx = owner.retainedComponent()
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
        val instance1 = ctx.viewModelStore.getOrCreate(key = "key", factory = ::TestViewModel)

        owner = owner.recreate(isChangingConfigurations = true)
        ctx = owner.retainedComponent()
        val instance2 = ctx.viewModelStore.getOrCreate(key = "key", factory = ::TestViewModel)

        assertNotSame(instance1, instance2)
    }

    @Test
    fun GIVEN_isStateSavingAllowed_is_false_on_save_WHEN_configuration_changed_THEN_old_instances_destroyed() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent(isStateSavingAllowed = { false })
        val instance1 = ctx.viewModelStore.getOrCreate(key = "key", factory = ::TestViewModel)

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
        val instance1 = ctx.viewModelStore.getOrCreate(key = "key", factory = ::TestViewModel)

        owner = owner.recreate(isChangingConfigurations = true)
        ctx = owner.retainedComponent(discardSavedState = true)
        val instance2 = ctx.viewModelStore.getOrCreate(key = "key", factory = ::TestViewModel)

        assertNotSame(instance1, instance2)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_old_instances_destroyed() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent()
        val instance1 = ctx.viewModelStore.getOrCreate(key = "key", factory = ::TestViewModel)

        owner = owner.recreate(isChangingConfigurations = true)
        owner.retainedComponent(discardSavedState = true)

        assertTrue(instance1.isDestroyed)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_old_instance_lifecycle_destroyed() {
        var owner = TestOwner()
        val ctx = owner.retainedComponent()
        val events = ctx.lifecycle.logEvents()
        events.clear()

        owner.isChangingConfigurations = true
        owner = owner.recreate()
        owner.retainedComponent(discardSavedState = true)

        assertContentEquals(listOf("onPause", "onStop", "onDestroy"), events)
    }

    @Test
    fun WHEN_configuration_changed_and_discardSavedState_is_true_on_restore_THEN_new_instance_lifecycle_resumed() {
        var owner = TestOwner()
        owner.retainedComponent()

        owner.isChangingConfigurations = true
        owner = owner.recreate()
        val ctx = owner.retainedComponent(discardSavedState = true)
        val events = ctx.lifecycle.logEvents()

        assertContentEquals(listOf("onCreate", "onStart", "onResume"), events)
    }

    @Test
    fun GIVEN_enabled_BackCallback_registered_WHEN_onBackPressed_THEN_callback_called() {
        val owner = TestOwner()
        val ctx = owner.retainedComponent()
        var isCalled = false
        ctx.navigationEventDispatcher.addHandler { isCalled = true }

        owner.navigationEventDispatcher.addDirectInput().backCompleted()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_disabled_BackCallback_registered_WHEN_onBackPressed_THEN_callback_not_called() {
        val owner = TestOwner()
        val ctx = owner.retainedComponent()
        var isCalled = false
        ctx.navigationEventDispatcher.addHandler(isBackEnabled = false) { isCalled = true }

        owner.navigationEventDispatcher.addDirectInput().backCompleted()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_created_with_CreationExtras_WHEN_ViewModel_created_THEN_extra_provided() {
        // given
        val ctx = TestOwner().retainedComponent(viewModelCreationExtras = CreationExtras { set(StringKey, "extra") })

        // when
        val vm = ctx.viewModel { TestViewModel(value = get(StringKey)) }

        // then
        assertEquals("extra", vm.value)
    }

    @Test
    fun GIVEN_created_with_CreationExtras_and_child_context_created_WHEN_ViewModel_created_THEN_extra_provided() {
        // given
        val ctx = TestOwner().retainedComponent(viewModelCreationExtras = CreationExtras { set(StringKey, "extra") })
        val childCtx = ctx.childContext(key = "child")

        // when
        val vm = childCtx.viewModel { TestViewModel(value = get(StringKey)) }

        // then
        assertEquals("extra", vm.value)
    }

    @Test
    fun GIVEN_recreated_WHEN_ViewModel_created_THEN_new_CreationExtras_used() {
        // given
        var owner = TestOwner()
        owner.retainedComponent(viewModelCreationExtras = CreationExtras { set(StringKey, "extra1") })
        owner = owner.recreate(isChangingConfigurations = true)
        val ctx2 = owner.retainedComponent(viewModelCreationExtras = CreationExtras { set(StringKey, "extra2") })

        // when
        val vm = ctx2.viewModel { TestViewModel(value = get(StringKey)) }

        // then
        assertEquals("extra2", vm.value)
    }

    private fun TestOwner.retainedComponent(
        viewModelCreationExtras: CreationExtras = CreationExtras.Empty,
        discardSavedState: Boolean = false,
        isStateSavingAllowed: () -> Boolean = { true },
    ): ComponentContext =
        retainedComponent(
            cast = { it as ComponentContext },
            key = "key",
            viewModelFactory = ::SavedStateViewModelFactory,
            viewModelCreationExtras = { viewModelCreationExtras },
            navigationEventDispatcher = navigationEventDispatcher,
            discardSavedState = discardSavedState,
            isStateSavingAllowed = isStateSavingAllowed,
            isChangingConfigurations = { isChangingConfigurations },
            factory = { it },
        )

    private companion object {
        private val StringKey: Key<String> = CreationExtras.Companion.Key()
    }

    private class TestViewModel(val value: String?) : ViewModel()
}
