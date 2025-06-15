package com.arkivanov.decompose

import androidx.savedstate.SavedState
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

@Suppress("TRANSIENT_MISSING_INITIALIZER")
@Serializable
internal actual class SavedStateHolder actual constructor(
    @Transient actual val savedState: SavedState?,
)

internal actual object SavedStateHolderSerializer : KSerializer<SavedStateHolder> by SavedStateHolder.serializer()
