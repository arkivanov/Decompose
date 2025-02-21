package com.arkivanov.decompose.router.children

import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

fun <T : Any> transientNavStateSaver(): NavStateSaver<T> =
    NavStateSaver(
        save = { SerializableContainer(value = TransientSavedState(it), strategy = TransientSavedState.serializer()) },
        restore = {
            @Suppress("UNCHECKED_CAST")
            it.consume(TransientSavedState.serializer())?.value as T?
        },
    )

@Serializable
private class TransientSavedState(
    @Transient val value: Any? = null,
)
