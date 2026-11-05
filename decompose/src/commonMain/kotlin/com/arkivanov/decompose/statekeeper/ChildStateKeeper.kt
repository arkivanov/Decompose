package com.arkivanov.decompose.statekeeper

import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal fun StateKeeper.child(key: String): StateKeeper {
    check(!isRegistered(key = key)) { "The key \"$key\" is already in use." }

    val stateKeeper = StateKeeperDispatcher(consume(key = key, strategy = SerializableContainer.serializer()))
    register(key = key, strategy = SerializableContainer.serializer(), supplier = stateKeeper::save)

    return stateKeeper
}
