package com.arkivanov.decompose

import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer

internal val json =
    Json {
        allowStructuredMapKeys = true
    }

inline fun <reified T : Any> StateKeeper.register(key: String, noinline supplier: () -> T?) {
    register(key = key, strategy = serializer<T>(), supplier = supplier)
}

inline fun <reified T : Any> StateKeeper.consume(key: String): T? =
    consume(key = key, strategy = serializer<T>())

internal inline fun <reified T> T.serializeAndDeserialize(): T {
    val serializer = serializer<T>()

    return json.decodeFromString(serializer, json.encodeToString(serializer, this))
}

fun StateKeeperDispatcher.recreate(isConfigurationChange: Boolean = false): StateKeeperDispatcher =
    StateKeeperDispatcher(
        savedState = save().let { if (isConfigurationChange) it else it.serializeAndDeserialize() },
    )
