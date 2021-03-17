package com.arkivanov.decompose.statekeeper

import android.os.Bundle
import androidx.savedstate.SavedStateRegistry

private const val KEY_STATE = "STATE_KEEPER_STATE"

/**
 * Creates a new instance of [StateKeeper] and attaches it to the provided [SavedStateRegistry].
 *
 * @param isSavingAllowed called before saving the state.
 * When `true` then the state will be saved, otherwise it won't. Default value is `true`.
 */
fun StateKeeper(
    savedStateRegistry: SavedStateRegistry,
    isSavingAllowed: () -> Boolean = { true }
): StateKeeper {
    val dispatcher = StateKeeperDispatcher(savedStateRegistry.consumeRestoredStateForKey(KEY_STATE)?.getParcelable(KEY_STATE))

    savedStateRegistry.registerSavedStateProvider(KEY_STATE) {
        Bundle().apply {
            if (isSavingAllowed()) {
                putParcelable(KEY_STATE, dispatcher.save())
            }
        }
    }

    return dispatcher
}

@Deprecated("Use StateKeeper(SavedStateRegistry) builder function", ReplaceWith("StateKeeper(this)"))
fun SavedStateRegistry.toStateKeeper(): StateKeeper = StateKeeper(this)

