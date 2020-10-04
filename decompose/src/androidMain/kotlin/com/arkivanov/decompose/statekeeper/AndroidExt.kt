package com.arkivanov.decompose.statekeeper

import android.os.Bundle
import androidx.savedstate.SavedStateRegistry

private const val KEY_STATE = "STATE_KEEPER_STATE"

fun SavedStateRegistry.toStateKeeper(): StateKeeper {
    val dispatcher = StateKeeperDispatcher(consumeRestoredStateForKey(KEY_STATE)?.getParcelable(KEY_STATE))

    registerSavedStateProvider(KEY_STATE) {
        Bundle().apply {
            putParcelable(KEY_STATE, dispatcher.save())
        }
    }

    return dispatcher
}
