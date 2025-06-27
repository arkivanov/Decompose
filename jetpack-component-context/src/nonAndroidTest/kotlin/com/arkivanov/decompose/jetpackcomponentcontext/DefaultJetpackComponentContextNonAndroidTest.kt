package com.arkivanov.decompose.jetpackcomponentcontext

import androidx.lifecycle.Lifecycle.Event
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModel
import androidx.savedstate.read
import androidx.savedstate.savedState
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.decompose.testutils.recreate
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotSame
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class DefaultJetpackComponentContextTest {

    @Test
    fun lifecycle_emits_events_in_order() {
        val ctx = TestComponentContext(lifecycle = LifecycleRegistry())
        val jCtx = DefaultJetpackComponentContext(ctx)
        val events = ArrayList<Event>()

        jCtx.lifecycle.addObserver(
            object : LifecycleEventObserver {
                override fun onStateChanged(source: LifecycleOwner, event: Event) {
                    events += event
                }
            }
        )

        ctx.lifecycle.resume()
        ctx.lifecycle.destroy()

        assertEquals(listOf(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME, Event.ON_PAUSE, Event.ON_STOP, Event.ON_DESTROY), events)
    }

    @Test
    fun WHEN_configuration_change_THEN_view_model_same_instance() {
        var ctx = TestComponentContext()
        var jCtx = DefaultJetpackComponentContext(ctx)
        val vm = TestViewModel()
        jCtx.viewModel(key = "vm") { vm }

        ctx = ctx.recreate(isConfigurationChange = true)
        jCtx = DefaultJetpackComponentContext(ctx)
        val newVm = jCtx.viewModel(key = "vm") { TestViewModel() }

        assertSame(vm, newVm)
    }

    @Test
    fun WHEN_configuration_change_THEN_view_model_not_cleared() {
        var ctx = TestComponentContext()
        var jCtx = DefaultJetpackComponentContext(ctx)
        val vm = TestViewModel()
        jCtx.viewModel(key = "vm") { vm }

        ctx = ctx.recreate(isConfigurationChange = true)
        jCtx = DefaultJetpackComponentContext(ctx)
        jCtx.viewModel(key = "vm") { TestViewModel() }

        assertFalse(vm.isCleared)
    }

    @Test
    fun WHEN_recreated_THEN_view_model_new_instance() {
        var ctx = TestComponentContext()
        var jCtx = DefaultJetpackComponentContext(ctx)
        val vm = TestViewModel()
        jCtx.viewModel(key = "vm") { vm }

        ctx = ctx.recreate(isConfigurationChange = false)
        jCtx = DefaultJetpackComponentContext(ctx)
        val newVm = jCtx.viewModel(key = "vm") { TestViewModel() }

        assertNotSame(vm, newVm)
    }

    @Test
    fun WHEN_recreated_THEN_view_model_cleared() {
        var ctx = TestComponentContext()
        var jCtx = DefaultJetpackComponentContext(ctx)
        val vm = TestViewModel()
        jCtx.viewModel(key = "vm") { vm }

        ctx = ctx.recreate(isConfigurationChange = false)
        jCtx = DefaultJetpackComponentContext(ctx)
        jCtx.viewModel(key = "vm") { TestViewModel() }

        assertTrue(vm.isCleared)
    }

    @Test
    fun WHEN_recreated_THEN_saved_state_not_restored() {
        var ctx = TestComponentContext()
        var jCtx = DefaultJetpackComponentContext(ctx)
        jCtx.savedStateRegistry.registerSavedStateProvider(key = "state") { savedState(mapOf("int" to 1)) }

        ctx = ctx.recreate()
        jCtx = DefaultJetpackComponentContext(ctx)
        val restoredValue = jCtx.savedStateRegistry.consumeRestoredStateForKey(key = "state")?.read { getInt("int") }

        assertNull(restoredValue)
    }

    private class TestViewModel : ViewModel() {
        var isCleared: Boolean = false

        override fun onCleared() {
            isCleared = true
        }
    }
}
