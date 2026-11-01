package com.arkivanov.decompose.savedstate

import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.serialization.decodeFromSavedState
import androidx.savedstate.serialization.encodeToSavedState
import androidx.savedstate.serialization.serializers.SavedStateSerializer
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerializationStrategy

// FIXME: Check if really needed or can use something from AndroidX
// FIXME: Move to Essenty
actual fun <T : Any> SavedStateRegistry.register(key: String, strategy: SerializationStrategy<T>, supplier: () -> T?) {
    registerSavedStateProvider(key = key) {
        encodeNullableToSavedState(serializer = strategy, value = supplier())
    }
}

actual fun <T : Any> SavedStateRegistry.consume(key: String, strategy: DeserializationStrategy<T>): T? =
    consumeRestoredStateForKey(key = key)?.let { decodeNullableFromSavedState(deserializer = strategy, savedState = it) }

private fun <T : Any> encodeNullableToSavedState(
    serializer: SerializationStrategy<T>,
    value: T?,
): SavedState =
    encodeToSavedState(
        serializer = Holder.serializer(),
        value = Holder(value?.let { encodeToSavedState(serializer, value) }),
    )

private fun <T : Any> decodeNullableFromSavedState(
    deserializer: DeserializationStrategy<T>,
    savedState: SavedState,
): T? =
    decodeFromSavedState(deserializer = Holder.serializer(), savedState = savedState).value?.let {
        decodeFromSavedState(deserializer = deserializer, savedState = it)
    }

@Serializable
private class Holder(
    val value: @Serializable(SavedStateSerializer::class) SavedState?,
)
