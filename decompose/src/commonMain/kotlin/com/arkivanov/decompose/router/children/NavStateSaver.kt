package com.arkivanov.decompose.router.children

import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.KSerializer

interface NavStateSaver<T : Any> {

    fun saveState(state: T): SerializableContainer?
    fun restoreState(container: SerializableContainer): T?
}

inline fun <T : Any> NavStateSaver(
    crossinline save: (T) -> SerializableContainer?,
    crossinline restore: (SerializableContainer) -> T?,
): NavStateSaver<T> =
    object : NavStateSaver<T> {
        override fun saveState(state: T): SerializableContainer? = save(state)
        override fun restoreState(container: SerializableContainer): T? = restore(container)
    }

fun <T : Any> NavStateSaver(serializer: KSerializer<T>): NavStateSaver<T> =
    NavStateSaver(
        save = { SerializableContainer(value = it, strategy = serializer) },
        restore = { it.consume(strategy = serializer) },
    )
