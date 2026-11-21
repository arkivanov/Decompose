package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.savedstate.getKotlinSerializable
import androidx.savedstate.putKotlinSerializable
import androidx.savedstate.read
import androidx.savedstate.savedState
import com.arkivanov.decompose.testutils.recreate
import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

@Suppress("TestFunctionName")
class HostComponentContextSavedStateTest {

    @Test
    fun GIVEN_context_created_WHEN_savedStateRegistry_read_THEN_does_not_throw() {
        val ctx = HostComponentContext()

        ctx.savedStateRegistry
    }

    @Test
    fun GIVEN_child_context_created_WHEN_savedStateRegistry_read_THEN_does_not_throw() {
        val ctx = HostComponentContext().childContext(key = "child")

        ctx.savedStateRegistry
    }

    @Test
    fun GIVEN_resumed_context_created_WHEN_savedStateRegistry_read_THEN_does_not_throw() {
        val ctx = HostComponentContext(lifecycleState = Lifecycle.State.RESUMED)

        ctx.savedStateRegistry
    }

    @Test
    fun GIVEN_resumed_child_context_created_WHEN_savedStateRegistry_read_THEN_does_not_throw() {
        val ctx = HostComponentContext(lifecycleState = Lifecycle.State.RESUMED).childContext(key = "child")

        ctx.savedStateRegistry
    }

    @Test
    fun GIVEN_SavedStateProvider_registered_WHEN_context_recreated_and_saved_state_consumed_THEN_state_restored() {
        // given
        var ctx = HostComponentContext(lifecycleState = Lifecycle.State.RESUMED)

        ctx.savedStateRegistry.registerSavedStateProvider(key = "key") {
            savedState {
                putKotlinSerializable(key = "data", value = Data("value"), serializer = Data.serializer())
            }
        }

        // when
        ctx = ctx.recreate(isConfigurationChange = false)
        val state = ctx.savedStateRegistry.consumeRestoredStateForKey(key = "key")
        val data = state?.read { getKotlinSerializable(key = "data", deserializer = Data.serializer()) }

        // then
        assertNotNull(data)
        assertEquals("value", data.value)
    }

    @Test
    fun GIVEN_SavedStateProvider_registered_in_child_context_WHEN_context_recreated_and_saved_state_consumed_THEN_state_restored() {
        // given
        var ctx = HostComponentContext(lifecycleState = Lifecycle.State.RESUMED)

        ctx.childContext(key = "child").savedStateRegistry.registerSavedStateProvider(key = "key") {
            savedState {
                putKotlinSerializable(key = "data", value = Data("value"), serializer = Data.serializer())
            }
        }

        // when
        ctx = ctx.recreate(isConfigurationChange = false)
        val state = ctx.childContext(key = "child").savedStateRegistry.consumeRestoredStateForKey(key = "key")
        val data = state?.read { getKotlinSerializable(key = "data", deserializer = Data.serializer()) }

        // then
        assertNotNull(data)
        assertEquals("value", data.value)
    }

    @Serializable
    class Data(val value: String)
}
