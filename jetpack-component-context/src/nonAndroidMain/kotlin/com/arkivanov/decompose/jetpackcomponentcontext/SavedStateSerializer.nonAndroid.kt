package com.arkivanov.decompose.jetpackcomponentcontext

import androidx.savedstate.SavedState
import androidx.savedstate.savedState
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.buildClassSerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

internal actual object SavedStateSerializer : KSerializer<SavedState> {

    actual override val descriptor: SerialDescriptor = buildClassSerialDescriptor(serialName = "SavedState")

    actual override fun serialize(encoder: Encoder, value: SavedState) {
        // no-op
    }

    actual override fun deserialize(decoder: Decoder): SavedState =
        savedState()
}
