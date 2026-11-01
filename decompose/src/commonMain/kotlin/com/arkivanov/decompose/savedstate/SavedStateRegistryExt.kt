package com.arkivanov.decompose.savedstate

import androidx.lifecycle.LifecycleOwner
import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import androidx.savedstate.savedState
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy

expect fun <T : Any> SavedStateRegistry.register(key: String, strategy: SerializationStrategy<T>, supplier: () -> T?)

expect fun <T : Any> SavedStateRegistry.consume(key: String, strategy: DeserializationStrategy<T>): T?

internal fun SavedStateRegistryOwner.childSavedStateRegistry(
    key: String,
    recreate: Boolean = false,
    isSavingAllowed: () -> Boolean = { true },
): SavedStateRegistry {
    val owner =
        object : SavedStateRegistryOwner, LifecycleOwner by this {
            val controller = SavedStateRegistryController.create(this)
            override val savedStateRegistry: SavedStateRegistry by controller::savedStateRegistry
        }

    owner.controller.performAttach()

    savedStateRegistry.consumeRestoredStateForKey(key = key).also { savedState ->
        owner.controller.performRestore(savedState?.takeUnless { recreate })
    }

    savedStateRegistry.registerSavedStateProvider(key = key) {
        if (isSavingAllowed()) owner.controller.save() else savedState() // FIXME: Test the else case
    }

    // FIXME: enableSavedStateHandles()

    return owner.controller.savedStateRegistry
}

internal fun SavedStateRegistryController.save(): SavedState =
    savedState().also(this::performSave)
