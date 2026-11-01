package com.arkivanov.decompose.savedstate

import android.os.Bundle
import androidx.savedstate.SavedStateRegistry
import com.arkivanov.essenty.statekeeper.getSerializable
import com.arkivanov.essenty.statekeeper.putSerializable
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy

// FIXME: Check if really needed or can use something from AndroidX
actual fun <T : Any> SavedStateRegistry.register(key: String, strategy: SerializationStrategy<T>, supplier: () -> T?) {
    registerSavedStateProvider(key = key) {
        Bundle().apply {
            putSerializable(key = key, value = supplier(), strategy = strategy)
        }
    }
}

actual fun <T : Any> SavedStateRegistry.consume(key: String, strategy: DeserializationStrategy<T>): T? =
    consumeRestoredStateForKey(key = key)?.getSerializable(key = key, strategy = strategy)
