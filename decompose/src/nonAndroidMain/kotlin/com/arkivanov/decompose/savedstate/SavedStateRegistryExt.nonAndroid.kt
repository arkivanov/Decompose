package com.arkivanov.decompose.savedstate

import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.read
import androidx.savedstate.savedState
import androidx.savedstate.serialization.decodeFromSavedState
import androidx.savedstate.serialization.encodeToSavedState
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy

// FIXME: Check if really needed or can use something from AndroidX
// FIXME: Move to Essenty
actual fun <T : Any> SavedStateRegistry.register(key: String, strategy: SerializationStrategy<T>, supplier: () -> T?) {
    registerSavedStateProvider(key = key) {
        val value = supplier()
        if (value != null) {
            encodeToSavedState(strategy, value)
        } else {
            savedState { putBoolean(KEY_NULL, true) }
        }
    }
}

actual fun <T : Any> SavedStateRegistry.consume(key: String, strategy: DeserializationStrategy<T>): T? =
    consumeRestoredStateForKey(key = key)?.let { savedState ->
        if (savedState.read { contains(KEY_NULL) }) {
            null
        } else {
            decodeFromSavedState(strategy, savedState)
        }
    }

private const val KEY_NULL = "com.arkivanov.decompose.savedstate.NULL"
