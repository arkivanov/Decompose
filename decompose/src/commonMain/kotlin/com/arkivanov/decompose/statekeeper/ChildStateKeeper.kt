package com.arkivanov.decompose.statekeeper

import com.arkivanov.decompose.isDestroyed
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import com.arkivanov.essenty.statekeeper.consume

internal fun StateKeeper.child(key: String, lifecycle: Lifecycle? = null): StateKeeper {
    check(!isRegistered(key = key)) { "The key \"$key\" is already in use." }

    val stateKeeper = StateKeeperDispatcher(consume(key))

    if (lifecycle == null) {
        register(key, stateKeeper::save)
    } else if (!lifecycle.isDestroyed) {
        register(key, stateKeeper::save)
        lifecycle.doOnDestroy { unregister(key) }
    }

    return stateKeeper
}
