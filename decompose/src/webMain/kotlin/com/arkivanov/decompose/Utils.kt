package com.arkivanov.decompose

import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.json.Json

internal val Json =
    Json {
        allowStructuredMapKeys = true
    }

internal fun SerializableContainer.encodeToJson(): JsonString =
    JsonString(Json.encodeToString(SerializableContainer.serializer(), this))

internal fun JsonString.decodeContainer(): SerializableContainer? =
    try {
        Json.decodeFromString(SerializableContainer.serializer(), value)
    } catch (e: Exception) {
        null
    }

internal value class JsonString(val value: String)

internal external fun encodeURIComponent(str: String): String

internal external fun decodeURIComponent(str: String): String
