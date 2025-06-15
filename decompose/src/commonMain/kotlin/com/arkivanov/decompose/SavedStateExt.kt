package com.arkivanov.decompose

import androidx.savedstate.SavedState
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

internal expect class SavedStateHolder(
    savedState: SavedState? = null,
) {
    val savedState: SavedState?
}

internal expect object SavedStateHolderSerializer : KSerializer<SavedStateHolder> {
    override val descriptor: SerialDescriptor

    override fun serialize(encoder: Encoder, value: SavedStateHolder)
    override fun deserialize(decoder: Decoder): SavedStateHolder
}
