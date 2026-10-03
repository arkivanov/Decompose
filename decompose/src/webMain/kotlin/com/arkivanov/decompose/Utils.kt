package com.arkivanov.decompose

import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.json.Json

internal val Json =
    Json {
        allowStructuredMapKeys = true
    }

internal fun StateKeeperDispatcher.saveState(version: String?): String =
    SavedState(version = version, state = save())
        .encodeToJson(SavedState.serializer())
        .value

internal fun JsonString.decodeSavedState(version: String?): SerializableContainer? {
    val savedState =
        decodeSerializable(SavedState.serializer())
            ?: return decodeSerializable(SerializableContainer.serializer()) // Old format for compatibility

    return savedState.takeIf { it.version == version }?.state
}

internal fun <T : Any> T.encodeToJson(serializer: SerializationStrategy<T>): JsonString =
    JsonString(Json.encodeToString(serializer, this))

internal fun <T : Any> JsonString.decodeSerializable(serializer: DeserializationStrategy<T>): T? =
    try {
        Json.decodeFromString(serializer, value)
    } catch (_: Exception) {
        null
    }

internal value class JsonString(val value: String)

internal fun String.asJsonString(): JsonString = JsonString(this)

internal external fun encodeURIComponent(str: String): String

internal external fun decodeURIComponent(str: String): String

@Serializable
private data class SavedState(
    val version: String?,
    val state: SerializableContainer,
)
