package com.arkivanov.decompose.jetpackcomponentcontext

import android.os.Bundle
import android.os.Parcel
import androidx.savedstate.SavedState
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.ByteArraySerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

internal actual object SavedStateSerializer : KSerializer<SavedState> {

    private val byteArraySerializer = ByteArraySerializer()
    actual override val descriptor: SerialDescriptor by byteArraySerializer::descriptor

    actual override fun serialize(encoder: Encoder, value: SavedState) {
        val parcel = Parcel.obtain()
        parcel.writeBundle(value)
        val bytes = parcel.marshall()
        parcel.recycle()
        byteArraySerializer.serialize(encoder, bytes)
    }

    actual override fun deserialize(decoder: Decoder): SavedState {
        val bytes = byteArraySerializer.deserialize(decoder)
        val parcel = Parcel.obtain()
        parcel.unmarshall(bytes, 0, bytes.size)
        parcel.setDataPosition(0)
        val bundle = requireNotNull(parcel.readBundle(Bundle::class.java.classLoader))
        parcel.recycle()
        return bundle
    }
}
