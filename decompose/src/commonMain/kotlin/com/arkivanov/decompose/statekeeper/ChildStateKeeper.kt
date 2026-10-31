package com.arkivanov.decompose.statekeeper

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.isDestroyed
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal fun StateKeeper.child(key: String, lifecycle: Lifecycle? = null): StateKeeper {
    check(!isRegistered(key = key)) { "The key \"$key\" is already in use." }

    val stateKeeper = StateKeeperDispatcher(consume(key = key, strategy = SerializableContainer.serializer()))

    if (lifecycle == null) {
        register(key = key, strategy = SerializableContainer.serializer(), supplier = stateKeeper::save)
    } else if (!lifecycle.isDestroyed) {
        register(key = key, strategy = SerializableContainer.serializer(), supplier = stateKeeper::save)
        lifecycle.doOnDestroy { unregister(key) }
    }

    return stateKeeper
}
