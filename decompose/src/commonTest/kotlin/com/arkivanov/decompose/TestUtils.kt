package com.arkivanov.decompose

import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.serializer

inline fun <reified T : Any> StateKeeper.register(key: String, noinline supplier: () -> T?) {
    register(key = key, strategy = serializer<T>(), supplier = supplier)
}

inline fun <reified T : Any> StateKeeper.consume(key: String): T? =
    consume(key = key, strategy = serializer<T>())
