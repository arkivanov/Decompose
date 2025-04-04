package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * Creates an instance of [NavStateSaver] that does not serialize the navigation state.
 * The navigation state is preserved over configuration changes on Android
 * but is lost when the application process is recreated.
 *
 * Can be used for large navigation states like lists to avoid exceeding the Bundle size limit
 * when saving the state.
 */
@ExperimentalDecomposeApi
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
