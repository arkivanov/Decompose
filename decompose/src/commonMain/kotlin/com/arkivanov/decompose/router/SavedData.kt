package com.arkivanov.decompose.router

import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.parcelable.consumeRequired
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.json.Json

private val json =
    Json {
        allowStructuredMapKeys = true
    }

@Parcelize
private class ParcelableJson(val json: String) : Parcelable

// Temporary interop until v3.0
internal fun <T : Any> T.toParcelableContainer(strategy: SerializationStrategy<T>): ParcelableContainer =
    ParcelableContainer(
        value = ParcelableJson(
            json = json.encodeToString(serializer = strategy, value = this),
        ),
    )

// Temporary interop until v3.0
internal fun <T : Any> ParcelableContainer.consumeRequired(strategy: DeserializationStrategy<T>): T =
    json.decodeFromString(
        deserializer = strategy,
        string = consumeRequired<ParcelableJson>().json,
    )
