package com.arkivanov.decompose.savedstate

import androidx.savedstate.SavedState
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

// The first-party androidx.savedstate.serialization.serializers.SavedStateSerializer doesn't support Parcelable on Android (╯°□°)╯︵ ┻━┻
expect object SavedStateSerializer : KSerializer<SavedState> {

    override val descriptor: SerialDescriptor
    override fun serialize(encoder: Encoder, value: SavedState)
    override fun deserialize(decoder: Decoder): SavedState
}
